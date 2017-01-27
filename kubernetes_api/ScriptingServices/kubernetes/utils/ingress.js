/* globals $ */
/* eslint-env node, dirigible */

exports.getObject = function(name, namespace, labels, host, path, serviceName, servicePort) {
	return {
		'metadata': {
			'name': name,
			'namespace': namespace,
			'labels': labels
		},
		'spec': {
	        'rules': [
	          {
	            'host': host,
	            'http': {
	              'paths': [
	                {
	                  'path': path,
	                  'backend': {
	                    'serviceName': serviceName,
	                    'servicePort': servicePort
	                  }
	                }
	              ]
	            }
	          }
	        ]
	      }
	};
};
