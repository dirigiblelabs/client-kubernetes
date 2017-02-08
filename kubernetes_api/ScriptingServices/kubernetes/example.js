/* globals $ */
/* eslint-env node, dirigible */

var response = require('net/http/response');

var namespaces = require('kubernetes/namespaces').getApi();
var pods = require('kubernetes/pods').getApi();
var deployments = require('kubernetes/deployments').getApi();
var services = require('kubernetes/services').getApi();
var replicasets = require('kubernetes/replicasets').getApi();
var ingresses = require('kubernetes/ingresses').getApi();

var server = 'http://localhost:8001';
var token = 'asdcxa213dasxz123';

var result = namespaces.listAll(server, token);

response.println(JSON.stringify(result));
