/**
 * @ngdoc controller
 * @name project.controllers:buildController
 * @description
 * This file defines the build controller
 */

define([], function () {
    'use strict';

    partTwoController.$inject = ['localStorageService','$mdToast','$state','$rootScope', '$scope'];

    function partTwoController(localStorageService,$mdToast,$state,$rootScope, $scope) {

        var vm = this;
        vm ={
            testGrammar:testGrammar
        };
        function testGrammar() {

        }


        return vm;

    }





    return partTwoController;
});
