/* Amplify Params - DO NOT EDIT
	API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIIDOUTPUT
	API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
	STORAGE_POSTIMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const axios = require("axios");
const sqs = new AWS.SQS();
AWS.config.region = process.env.REGION;

const GRAPHQL_ENDPOINT =
  process.env.API_TOPPERENTERPRISE_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_TOPPERENTERPRISE_GRAPHQLAPIKEYOUTPUT;

const approvedLabels = [
  "Climbing",
  "Sport",
  "Adventure",
  "Rock Climbing",
  "Bouldering",
];

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(event);
  const data = JSON.parse(event.Records[0].body);

  const photoUrl = "public/" + data.imageId;

  const client = new AWS.Rekognition();
  const bucket = process.env.STORAGE_POSTIMAGES_BUCKETNAME;

  const params = {
    Image: {
      S3Object: {
        Bucket: bucket,
        Name: photoUrl,
      },
    },
    MaxLabels: 10,
  };

  let response = {
    imageId: photoUrl,
    contentStatus: "Approved",
  };

  try {
    const result = await client.detectLabels(params).promise();
    let labelNames = [];
    result.Labels.forEach((label) => {
      labelNames.push(label.Name);
    });
    const found = approvedLabels.some((value) => labelNames.includes(value));
    if (!found) {
      response.contentStatus = "Rejected";
    }

    //await sendMessageToQueue(response);
    await searchPosts(data.imageId, response.contentStatus);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};

async function sendMessageToQueue(response) {
  const params = {
    MessageBody: JSON.stringify(response),
    QueueUrl:
      "https://sqs.eu-central-1.amazonaws.com/325510795379/UpdatePostQueue.fifo",
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
