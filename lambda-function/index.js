const fetch = require('node-fetch');
let url = 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html';

exports.handler = async function(event) {
	const fetchResponse = await fetch(`https://api.github.com/users/${name}`);
	const jsonData = await response.json();
	const slicedData = jsonData.data.slice(0, data.data.length > 10 ? 10 : data.data.length);
	const processedData = {
		data: slicedData,
		awsRegion: process.env.AWS_REGION,
		lambdaVersion: process.env.LAMBDA_VERSION
	};
	const response = {
		statusCode: 200,
		body: JSON.stringify(processedData)
	};
};
