# Kubernetes API Client for Eclipse Dirigible

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/client-kubernetes.svg)](https://github.com/dirigiblelabs/client-kubernetes/graphs/contributors)

## Overview
1. **Set-up:**
```
TBD
```

2. **Usage:**
```javascript
// TODO: Initial

const server = 'https://<API-SERVER>';
const token = '<YOUR-TOKEN>';

var response = require('http/v3/response');
var Pods = require('kubernetes/api/v1/Pods');

var podsApi = new Pods(server, token, 'zeus');

var pod = podsApi.getEntityBuilder();
pod.getMetadata().setName('asd');
pod.getMetadata().setNamespace('namespace');

console.error('Pod: ' + JSON.stringify(pod.build()));
response.println(JSON.stringify(podsApi.list()));
```

## License

This project is copyrighted by [SAP SE](http://www.sap.com/) and is available under the [Eclipse Public License v 1.0](https://www.eclipse.org/legal/epl-v10.html). See [LICENSE](LICENSE) and [NOTICE.txt](NOTICE.txt) for further details.
