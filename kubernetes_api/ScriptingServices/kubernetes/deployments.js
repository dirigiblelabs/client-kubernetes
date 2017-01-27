/* globals $ */
/* eslint-env node, dirigible */

var generator = require('platform/generator');
var kubernetesApi = require('kubernetes/api');

const API_BASE_URL_TEMPLATE = '${server}/apis/extensions/v1beta1/namespaces/${namespace}/deployments';
const API_ITEM_URL_TEMPLATE = API_BASE_URL_TEMPLATE + '/${name}';

exports.list = function(server, token, namespace, queryOptions) {
	return kubernetesApi.list(getApiBaseUrl(server, namespace), token, queryOptions);
};

exports.get = function(server, token, namespace, name) {
	return kubernetesApi.get(getApiItemUrl(server, namespace, name), token);
};

exports.create = function(server, token, namespace, body) {
	return kubernetesApi.create(getApiBaseUrl(server, namespace), token, body);
};

exports.delete = function(server, token, namespace, name) {
	return kubernetesApi.delete(getApiItemUrl(server, namespace, name), token);
};

function getApiBaseUrl(server, namespace) {
	return generator.generate(API_BASE_URL_TEMPLATE, {
		'server': server,
		'namespace': namespace
	});
}

function getApiItemUrl(server, namespace, name) {
	return generator.generate(API_ITEM_URL_TEMPLATE, {
		'server': server,
		'namespace': namespace,
		'name': name
	});
}