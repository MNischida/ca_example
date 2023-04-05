module.exports = function configJSON(req) {
	var fullURL = `https://${req.get('host')}`

	return {
		"workflowApiVersion": "1.1",
		"metaData": {
			"icon": "../images/test.png",
			"category": "message"
		},
		"type": "Rest",
		"lang": {
			"name": "Custom Activity Example",
			"description": "A custom Journey Builder activity example."
		},
		"arguments": {
			"execute": {
				"inArguments": [{
					"myInArgument": "inArgument coming from iframe",
					"shortcode": 1234,
					"telefone": ""
				}],
				"outArguments": [],
				"timeout": 100000,
				"retryCount": 1,
				"retryDelay": 10000,
				"concurrentRequests" : 5,
				"url": `https://en1mbrh7056kqcg.m.pipedream.net`
			}
		},
		"configurationArguments": {
			"applicationExtensionKey": "ca_example",
			"save": {
				"url": `${fullURL}/save`
			},
			"publish": {
				"url": `${fullURL}/publish`
			},
			"validate": {
				"url": `${fullURL}/validate`
			},
			"stop": {
				"url": `${fullURL}/stop`
			},
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
					"inArguments": [],
					"outArguments": []
				}
			}
		}
	}
}