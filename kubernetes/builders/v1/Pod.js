var method = Pod.prototype;

function Pod() {
	this.metadata = new Metadata();
	this.spec = new Spec();
}

method.getMetadata = function() {
	return this.metadata;
};

method.getSpec = function() {
	return this.spec;	
};

function Metadata() {

	Metadata.prototype.getName = function() {
		return this.name;
	};

	Metadata.prototype.setName = function(name) {
		this.name = name;
	};

	Metadata.prototype.getNamespace = function() {
		return this.namespace;
	};

	Metadata.prototype.setNamespace = function(namespace) {
		this.namespace = namespace;
	};

	Metadata.prototype.getLabels = function() {
		return this.labels;
	};

	Metadata.prototype.setLabels = function(labels) {
		this.labels = labels;
	};
}

function Spec() {

	this.containers = [];
	this.volumes = [];

	Spec.prototype.getContainers = function() {
		return this.containers;
	};

	Spec.prototype.setContainers = function(containers) {
		this.containers = containers;
	};

	Spec.prototype.addContainer = function(container) {
		this.containers.push(container);
	};

	Spec.prototype.getVolumes = function() {
		return this.volumes;
	};

	Spec.prototype.setVolumes = function(volumes) {
		this.volumes = volumes;
	};

	Spec.prototype.addVolume = function(volume) {
		this.volumes.push(volume);
	};
}

method.build = function() {
	return {
		'apiVersion': 'v1',
		'kind': 'Pod',
		'metadata': {
			'name': this.getMetadata().getName(),
			'namespace': this.getMetadata().getNamespace(),
			'labels': this.getMetadata().getLabels()
		},
		'spec': {
			'containers': this.getSpec().getContainers(),
			'volumes': this.getSpec().getVolumes()
		}
	};
};

module.exports = Pod;