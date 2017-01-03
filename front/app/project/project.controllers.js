/*global define, angular, list of controllers*/
define([
    "./controllers/partOneController",
    "./controllers/partTwoController",
    "./controllers/partThreeController"
], function (partOneController,partTwoController,partThreeController) {
    'use strict';
    var controllersModuleName = "project.controllers";
    angular.module(controllersModuleName, [])
        .controller("project:partOneController",partOneController)
        .controller("project:partTwoController",partTwoController)
        .controller("project:partThreeController",partThreeController);
    return controllersModuleName;
});