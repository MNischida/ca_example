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
					"myInArgument": "inArgument coming from iframe"
				}],
				"outArguments": [],
				"timeout": 100000,
				"retryCount": 1,
				"retryDelay": 10000,
				"concurrentRequests" : 5,
				"url": "https://en1mbrh7056kqcg.m.pipedream.net"
			}
		},
		"configurationArguments": {
			"applicationExtensionKey": "teste_ca",
			"publish": {
				"url": "URI/for/your/activity/publish"
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