/* globals $ */
/* eslint-env node, dirigible */

var generator = require('platform/generator');
var kubernetesApi = require('kubernetes/api');

const API_BASE_URL_TEMPLATE = '${server}/api/v1/namespaces';
const API_ITEM_URL_TEMPLATE = API_BASE_URL_TEMPLATE + '/${name}';

exports.list = function(server, token, queryOptions) {
	return kubernetesApi.list(getApiBaseUrl(server), token, queryOptions);
};

exports.get = function(server, token, name) {
	return kubernetesApi.get(getApiItemUrl(server, name), token);
};

exports.create = function(server, token, body) {
	return kubernetesApi.create(getApiBaseUrl(server), token, body);
};

exports.update= function(server, token, name, body) {
	return kubernetesApi.update(getApiItemUrl(server, name), token, body);
};

exports.delete = function(server, token, name) {
	return kubernetesApi.delete(getApiItemUrl(server, name), token);
};

function getApiBaseUrl(server) {
	return generator.generate(API_BASE_URL_TEMPLATE, {
		'server': server,
	});
}

function getApiItemUrl(server, name) {
	return generator.generate(API_ITEM_URL_TEMPLATE, {
		'server': server,
		'name': name
	});
}
