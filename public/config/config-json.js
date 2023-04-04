module.exports = function configJSON(req) {
	var fullURL = `https://${req.get('host')}`

	return {
		"workflowApiVersion": "1.1",
		"metaData": {
			"icon": "images/test.png",
			"category": "message"
		},
		"type": "Rest",
		"lang": {
			"en-US": {
				"name": "Custom Activity Example",
				"description": "A custom Journey Builder activity example."
			}
		},
		"arguments": {
			"execute": {
				"inArguments": [{
					"myInArgument": "inArgument coming from iframe",
					"shortcode": 1234,
					"template": ""
				}],
				"outArguments": [],
				"timeout": 100000,
				"retryCount": 1,
				"retryDelay": 10000,
				"concurrentRequests" : 5,
				"url": `${fullURL}/execute`
			}
		},
		"configurationArguments": {
			"applicationExtensionKey": "ca_example",
			"publish": {
				"url": `${fullURL}/publish`
			}
		},
		"wizardSteps": [{
				"label": "Step 1",
				"key": "step1"
			}
		],
		"userInterfaces": {
			"configModal": {
				"fullscreen": true
			}
		},
		"schema": {
			"arguments": {
				"execute": {
					"inArguments": [{
						"myInArgument": {
							"dataType": "text",
							"isNullable": false,
							"direction": "in"
						}
					}],
					"outArguments": []
				}
			}
		}
	}
}