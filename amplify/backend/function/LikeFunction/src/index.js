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
      case "POST /like":
        data = JSON.parse(event.body);
        let like = data.data;

        await createLike(like);
        body = "Like created";
        break;
      case "GET /like/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await getLike(id);
        break;
      case "PUT /like/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await updateLike();
        break;
      case "DELETE /like/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await deleteLike();
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

async function createLike(like) {
  const query = /* GraphQL */ `
    mutation CreateLike($input: CreateLikeInput!) {
      createLike(input: $input) {
        id
        userId
        postId
      }
    }
  `;
  try {
    const variables = {
      input: like,
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

async function getLike(id) {
  const query = /* GraphQL */ `
      query SearchLike {
        searchLike(limit: 5, filter: { requesterId: { eq: "${id}" } }) {
          items {
            id
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

async function updateLike() {}

async function deleteLike() {}
