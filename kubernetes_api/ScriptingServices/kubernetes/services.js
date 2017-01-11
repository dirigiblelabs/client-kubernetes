/* globals $ */
/* eslint-env node, dirigible */

var httpClient = require('net/http/client');
var generator = require('platform/generator');

exports.list = function(server, token, namespace) {
	var api = generator.generate('${server}/api/v1/namespaces/${namespace}/services', {
		'server': server,
		'namespace': namespace
	});

	var httpResponse = httpClient.get(api, {
		'headers': [{
			'name': 'Authorization',
			'value': 'Bearer ' + token
		}]
	});

	var data = httpResponse.data;
	return data ? JSON.parse(data).items : [];
};

exports.get = function(server, token, namespace, name) {
	var api = generator.generate('${server}/api/v1/namespaces/${namespace}/services/${name}', {
		'server': server,
		'namespace': namespace,
		'name': name
	});

	var httpResponse = httpClient.get(api,  {
		'headers': [{
			'name': 'Authorization',
			'value': 'Bearer ' + token
		}]
	});

	return JSON.parse(httpResponse.data);
};

exports.create = function(server, token, namespace, body) {
	var api = generator.generate('${server}/api/v1/namespaces/${namespace}/services', {
		'server': server,
		'namespace': namespace
	});

	var httpResponse = httpClient.post(api, {
		'headers': [{
			'name': 'Authorization',
			'value': 'Bearer ' + token
		}, {
			'name': 'Content-Type',
			'value': 'application/json'
		}], 
		'body': JSON.stringify(body)
	});

	return JSON.parse(httpResponse.data);
};

exports.delete = function(server, token, namespace, name) {
	var api = generator.generate('${server}/api/v1/namespaces/${namespace}/services/${name}', {
		'server': server,
		'namespace': namespace,
		'name': name
	});

	var httpResponse = httpClient.delete(api, {
		'headers': [{
			'name': 'Authorization',
			'value': 'Bearer ' + token
		}], 
	});

	return JSON.parse(httpResponse.data);
};

