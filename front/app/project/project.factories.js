/*global define, angular, list of services*/
define([
    "./factories/buildFactory",

], function (buildFactory) {
    'use strict';
    var servicesModuleName = "project.factory";
    angular.module(servicesModuleName, [])
        .factory('buildFactory', buildFactory)

    return servicesModuleName;
});