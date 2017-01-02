/*global define, angular, list of controllers*/
define([
    "./controllers/partOneController"
], function (partOneController) {
    'use strict';
    var controllersModuleName = "project.controllers";
    angular.module(controllersModuleName, [])
        .controller("project:partOneController",partOneController);
    return controllersModuleName;
});