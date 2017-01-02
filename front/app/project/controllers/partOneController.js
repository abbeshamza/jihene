/**
 * @ngdoc controller
 * @name project.controllers:buildController
 * @description
 * This file defines the build controller
 */

define([], function () {
    'use strict';

    partOneController.$inject = ['localStorageService','$mdToast','$state','$rootScope', '$scope'];

    function partOneController(localStorageService,$mdToast,$state,$rootScope, $scope) {

        var vm = this;
        vm ={
            rediectToPartOne:partOneUrl,
            saveUser:saveUser,
            frenchLanguage:finishPartOne
        };

        function partOneUrl() {
            $rootScope.$on('keypress', function (e, a, key) {
                $scope.$apply(function () {
                    if(key==" ")
                    $scope.key = "go";
                });
            })
        }

        function saveUser() {
           console.log($scope.user);
        }
        function finishPartOne() {
            $scope.french.trouble=$scope.selected
            console.log($scope.french);
        }

            $scope.items = ['Spelling','Grammar','Pronunciation','Vocabulary'];
            $scope.selected = [];
            $scope.toggle = function (item, list) {
                var idx = list.indexOf(item);
                if (idx > -1) {
                    list.splice(idx, 1);
                }
                else {
                    list.push(item);
                }
            };

            $scope.exists = function (item, list) {
                return list.indexOf(item) > -1;
            };

            $scope.isIndeterminate = function() {
                return ($scope.selected.length !== 0 &&
                $scope.selected.length !== $scope.items.length);
            };

            $scope.isChecked = function() {
                return $scope.selected.length === $scope.items.length;
            };

            $scope.toggleAll = function() {
                if ($scope.selected.length === $scope.items.length) {
                    $scope.selected = [];
                } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
                    $scope.selected = $scope.items.slice(0);
                }
            };

               return vm;

        }





    return partOneController;
});
