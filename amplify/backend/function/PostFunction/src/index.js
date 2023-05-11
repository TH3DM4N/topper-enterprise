/* Amplify Params - DO NOT EDIT
	API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIIDOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
	STORAGE_POSTIMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */

const axios = require("axios");
const AWS = require("aws-sdk");
const sqs = new AWS.SQS();

const GRAPHQL_ENDPOINT =
  process.env.API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(event);
  let body;
  let data;
  let id;
  let statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  try {
    if (event.Records[0].hasOwnProperty("eventSourceARN")) {
      const data = JSON.parse(event.Records[0].body);
      await searchPosts(data.imageId, data.contentStatus);

      return {
        statusCode,
        body: "Post status updated",
        headers,
      };
    }
  } catch {}

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
        contentStatus
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
    await sendMessageToQueue(post.image);
  } catch (err) {
    console.log(err);
  }
}

async function sendMessageToQueue(imageId) {
  const params = {
    MessageBody: JSON.stringify({ imageId: imageId }),
    QueueUrl:
      "https://sqs.eu-central-1.amazonaws.com/325510795379/CheckContentQueue",
  };

  const result = await sqs.sendMessage(params).promise();
  console.log("Message sent to the queue:", result);
}

async function searchPosts(imageId, contentStatus) {
  //SERIALIZE THE STRING
  const index = imageId.lastIndexOf("/");
  const image = imageId.substring(index + 1);

  const query = /* GraphQL */ `
      query SearchPosts {
        searchPosts(limit: 5, filter: { image: { eq: "${image}" } }) {
          items {
            id
            title
            image
            grade
            location
            userId
            contentStatus
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

    const post = response.data.data.searchPosts.items[0];
    post.contentStatus = contentStatus;

    await updatePost(post);
  } catch (error) {
    console.log(error);
  }
}

async function getPost() {}

async function updatePost(post) {
  const query = /* GraphQL */ `
    mutation UpdatePost($input: UpdatePostInput!) {
      updatePost(input: $input) {
        id
        title
        image
        grade
        userId
        contentStatus
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

async function deletePost() {}
