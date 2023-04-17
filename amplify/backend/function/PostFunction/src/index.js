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
  console.log(event);
  let method = event["requestContext"]["httpMethod"];
  let path = event["requestContext"]["resourcePath"];

  let routeKey = method + " " + path;

  try {
    switch (routeKey) {
      case "POST /post":
        data = JSON.parse(event.body);
        let post = data.data;
        await createPost(post);
        body = "Post created";
        break;
      case "GET /post/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await getPost(id);
        break;
      case "PUT /post/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await updatePost();
        break;
      case "DELETE /post/{proxy+}":
        id = event["pathParameters"].proxy;
        body = await deletePost();
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

async function createPost(post) {
  const query = /* GraphQL */ `
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        image
        grade
        userId
        commentsIds
        likeIds
      }
    }
  `;
  try {
    const variables = {
      input: post,
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

async function getPost() {}

async function updatePost() {}

async function deletePost() {}
