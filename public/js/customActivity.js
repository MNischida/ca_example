define([
    'postmonger'
], function (
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var payload = {};

    var steps = [
        { label: "Step 1", key: "step1" }
    ];

    var currentStep = steps[0].key;

    $(window).ready(onRender);

    connection.on('initActivity', initialize);
    connection.on("requestedTokens", onGetTokens);
    connection.on("requestedEndpoints", onGetEndpoints);

    connection.on("clickedNext", onClickedNext);

    function onRender() {
        connection.trigger('ready');

        connection.trigger("requestTokens");
        connection.trigger("requestEndpoints");
    }

    function initialize(data) {
        if (data) {
            payload = data;
        }

        var hasInArguments = Boolean(
            payload["arguments"] &&
            payload["arguments"].execute &&
            payload["arguments"].execute.inArguments &&
            payload["arguments"].execute.inArguments.length > 0
        );
      
        var inArguments = hasInArguments
            ? payload["arguments"].execute.inArguments
            : {};
    }

    function onClickedNext() {
        save();
      }

      function onGetTokens(tokens) {
        // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
        // console.log(tokens);
      }
    
      function onGetEndpoints(endpoints) {
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        // console.log(endpoints);
      }

    function save() {
        var eventDefinitionKey;

        connection.trigger('requestTriggerEventDefinition');

        connection.on('requestedTriggerEventDefinition', function (eventDefinitionModel) {
            eventDefinitionKey = eventDefinitionModel.eventDefinitionKey;

            payload['arguments'].execute.inArguments[0].telefone = "{{Event." + eventDefinitionKey + ".Telefone}}"
        })

        payload["metaData"].isConfigured = true;
        connection.trigger("updateActivity", payload);
    }
})