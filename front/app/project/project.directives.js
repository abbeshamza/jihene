
define([
    "./directives/fileModel",
    "./directives/mdBox",
    "./directives/hcPie",
    "./directives/keypressEvents"


], function (fileModelDirective,mdBoxDIrective,hcPieDirective,keypressEvents) {
    'use strict';
    var directiveModuleName = "project.directives";
    angular.module(directiveModuleName, [])
        .directive("fileModel", fileModelDirective)
        .directive("mdBox",mdBoxDIrective)
        .directive("hcPie",hcPieDirective)
        .directive("keypressEvents",keypressEvents);
    return directiveModuleName;
});