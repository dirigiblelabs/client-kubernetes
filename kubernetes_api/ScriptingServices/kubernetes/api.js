/* globals $ */
/* eslint-env node, dirigible */

var httpClient = require('net/http/client');

exports.list = function(apiPath, token, queryOptions) {
	apiPath = addQueryOptions(apiPath, queryOptions);

	var httpResponse = httpClient.get(apiPath, getOptions(token));

	var data = httpResponse.data;
	return data ? JSON.parse(data).items : [];
};

exports.get = function(apiPath, token) {
	var httpResponse = httpClient.get(apiPath, getOptions(token));

	return JSON.parse(httpResponse.data);
};

exports.create = function(apiPath, token, body) {
	var httpResponse = httpClient.post(apiPath, getOptions(token, body));
	return JSON.parse(httpResponse.data);
};

exports.delete = function(apiPath, token) {
	var httpResponse = httpClient.delete(apiPath, getOptions(token));

	return JSON.parse(httpResponse.data);
};

function addQueryOptions(apiPath, queryOptions) {
	if (queryOptions !== undefined && queryOptions !== null) {
		if (queryOptions.labelSelector !== undefined && queryOptions.labelSelector !== null) {
			return apiPath + '?labelSelector=' + queryOptions.labelSelector;
		}
	}
	return apiPath;
}

function getOptions(token, body) {
	var options = {
		'headers': [{
			'name': 'Authorization',
			'value': 'Bearer ' + token
		}]
	};
	if (body !== undefined && body !== null) {
		options.headers.push({
			'name': 'Content-Type',
			'value': 'application/json'
		});
		options.body = JSON.stringify(body);
	}
	return options;
}