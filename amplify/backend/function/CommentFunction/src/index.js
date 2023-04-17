/* Amplify Params - DO NOT EDIT
	API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIIDOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  let body;
  let data;
  let id;
  let statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  let method = event["requestContext"]["httpMethod"];
  let path = event["requestContext"]["resourcePath"];

  let routeKey = method + " " + path;

  try {
    switch (routeKey) {
      case "POST /comment":
        data = JSON.parse(event.body);
        let comment = data.data;

        await createComment(comment);
        body = "comment created";
        break;
      case "GET /comment/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await getComment(id);
        break;
      case "PUT /comment/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await updateComment();
        break;
      case "DELETE /comment/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await deleteComment();
        break;
      default:
        throw new Error(`Unsupported route: "${event.httpMethod}"`);
    }
  } catch (err) {
    statusCode = 400;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
async function createComment(comment) {
  const query = /* GraphQL */ `
    mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        id
        content
        userId
        postId
      }
    }
  `;
  try {
    const variables = {
      input: comment,
    };
    const option = {
      method: "POST",
      url: GRAPHQL_ENDPOINT,
      headers: {
        "x-api-key": GRAPHQL_API_KEY,
      },
      data: JSON.stringify({ query, variables }),
    };
    await axios(option);
  } catch (err) {
    console.log(err);
  }
}

async function getComment(id) {
  const query = /* GraphQL */ `
      query SearchComment {
        searchComment(limit: 5, filter: { requesterId: { eq: "${id}" } }) {
          items {
            id
            content
            userId
            postId
          }
        }
      }
    `;
  try {
    const options = {
      method: "POST",
      url: GRAPHQL_ENDPOINT,
      headers: {
        "x-api-key": GRAPHQL_API_KEY,
      },
      data: JSON.stringify({ query }),
    };
    const response = await axios(options);
    return response.data;
  } catch {
    console.log(error);
  }
}

async function updateComment() {}

async function deleteComment() {}
