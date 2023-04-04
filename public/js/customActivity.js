define([
    'postmonger'
], function (
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var payload = {};

    $(window).ready(onRender);

    connection.on('initActivity', initialize);

    function onRender() {
        connection.trigger('ready');
    }

    function initialize(data) {
        if (data) {
            payload = data;
        }
    }

    function save() {
        payload["arguments"].execute.inArguments = [{ message: value }];
        payload["metaData"].isConfigured = true;
        connection.trigger("updateActivity", payload);
    }
})