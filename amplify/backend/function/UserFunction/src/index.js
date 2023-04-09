/* Amplify Params - DO NOT EDIT
	API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIIDOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
	STORAGE_POSTIMAGES_BUCKETNAME
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
      case "POST /user":
        data = JSON.parse(event.body);
        let userToCreate = data.data;

        await createUser(userToCreate);
        body = "User created successfully";
        break;
      case "GET /user/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await getUser(id);
        break;
      case "PUT /user/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await updateUser();
        break;
      case "DELETE /user/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await deleteUser();
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

async function createUser(user) {
  const query = /* GraphQL */ `
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        name
        username
        bio
        discipline
        profileImage
      }
    }
  `;
  try {
    const variables = {
      input: user,
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
  } catch (error) {
    console.log(error);
  }
}

async function getUser(id) {
  const query = /* GraphQL */ `
    query GetUser($id: ID!) {
      getUser(id: $id) {
        name
        username
        bio
        discipline
        profileImage
      }
    }
  `;
  try {
    const variables = {
      id: id,
    };
    const options = {
      method: "POST",
      url: GRAPHQL_ENDPOINT,
      headers: {
        "x-api-key": GRAPHQL_API_KEY,
      },
      data: JSON.stringify({ query, variables }),
    };
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function updateUser() {}

async function deleteUser() {}
