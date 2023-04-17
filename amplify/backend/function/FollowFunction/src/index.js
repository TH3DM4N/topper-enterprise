/* Amplify Params - DO NOT EDIT
	API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIIDOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const axios = require("axios");

const GRAPHQL_ENDPOINT =
  process.env.API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT;

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
      case "POST /follow":
        data = JSON.parse(event.body);
        let follow = data.data;

        await createFollow(follow);
        body = "Follow created";
        break;
      case "GET /follow/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await getFollow(id);
        break;
      case "PUT /follow/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await updateFollow();
        break;
      case "DELETE /follow/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await deleteFollow();
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

async function createFollow(follow) {
  const query = /* GraphQL */ `
    mutation CreateRelation($input: CreateRelationInput!) {
      createRelation(input: $input) {
        id
        requesterId
        receiverId
      }
    }
  `;
  try {
    const variables = {
      input: follow,
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

async function getFollow(id) {
  const query = /* GraphQL */ `
      query SearchRelation {
        searchRelations(limit: 5, filter: { requesterId: { eq: "${id}" } }) {
          items {
            id
            receiverId
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

async function updateFollow() {}

async function deleteFollow() {}
