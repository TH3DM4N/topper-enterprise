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
        let post = data.data;

        await createComment(post);
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
async function createComment() {}

async function getComment() {}

async function updateComment() {}

async function deleteComment() {}
