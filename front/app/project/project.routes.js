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
                    .state("project.partTwo", {
                        url: '/grammar-test',
                        templateUrl: modulePath + '/views/partTwo/partTwo.html',
                        controller: 'project:partTwoController',
                        controllerAs: 'partTwo'
                    })
                    .state("project.partThreeIntro", {
                        url: '/self-paced-reading-task/intro',
                        templateUrl: modulePath + '/views/partThree/intro.html',
                        controller: 'project:partThreeController',
                        controllerAs: 'partThree'
                    })
                    .state("project.partThreeConclusion", {
                        url: '/self-paced-reading-task/the-end',
                        templateUrl: modulePath + '/views/partThree/conclusion.html',
                        controller: 'project:partThreeController',
                        controllerAs: 'partThree'
                    })
                    .state("project.partThreeTest", {
                        url: '/self-paced-reading-task/the-test',
                        templateUrl: modulePath + '/views/partThree/test.html',
                        controller: 'project:partThreeController',
                        controllerAs: 'partThree'
                    })

            }]);
        return routesModuleName;
    }
);