/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_POSTIMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */

var AWS = require("aws-sdk");
AWS.config.region = process.env.REGION;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const client = new AWS.Rekognition();
  const bucket = process.env.STORAGE_POSTIMAGES_BUCKETNAME;
  const photo = "public/28b397e5-6e3e-4b9f-95e6-21a57a1e9120";

  const params = {
    Image: {
      S3Object: {
        Bucket: bucket,
        Name: photo,
      },
    },
    MaxLabels: 10,
  };

  try {
    const result = await client.detectLabels(params).promise();
    console.log(`Detected labels for: ${photo}`);
    result.Labels.forEach((label) => {
      console.log(`Label:      ${label.Name}`);
      console.log(`Confidence: ${label.Confidence}`);
    });
    return {
      statusCode: 200,
      body: JSON.stringify(1),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
