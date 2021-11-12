const axios = require("axios");
const slack_credentials = require("./slack_credentials.json");

exports.postActivity = (activity, message) => {
	axios({
		method: "POST",
		url: slack_credentials.activity_message_endpoint,
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${slack_credentials.activity_message_token}`,
		},
		data: {
			text: `${activity} \n ${message}`,
		},
	});
};
