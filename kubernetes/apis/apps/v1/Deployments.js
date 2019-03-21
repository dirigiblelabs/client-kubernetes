var Api = require("kubernetes/Api").prototype;
var method = Deployments.prototype = Object.create(Api);

method.constructor = Deployments;

function Deployments(server, token, namespace) {
    Api.constructor.apply(this, [{
		apiVersion: "apis/apps/v1",
		kind: "Deployment",
		entityBuilder: "kubernetes/builders/apis/apps/v1/Deployment"
	}, server, token, namespace]);
}

module.exports = Deployments;