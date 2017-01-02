define([],
    function () {
        'use strict';
        var routesModuleName = "project.routes";
        angular.module(routesModuleName, ['ui.router'])
            .config(["$stateProvider", function ($stateProvider) {
                var modulePath = "app/project";
                $stateProvider
                    .state("project.intro", {
                        url: '',
                        templateUrl: modulePath + '/views/partial/intro.html',
                        controller: 'project:partOneController',
                        controllerAs: 'partOne'
                    })
                    .state("project.partOneOne", {
                        url: '/questionnaire/part-one',
                        templateUrl: modulePath + '/views/partOne/part1.html',
                        controller: 'project:partOneController',
                        controllerAs: 'partOne'
                    })
                    .state("project.partOneTwo", {
                        url: '/questionnaire/part-two',
                        templateUrl: modulePath + '/views/partOne/part2.html',
                        controller: 'project:partOneController',
                        controllerAs: 'partOne'
                    })

            }]);
        return routesModuleName;
    }
);