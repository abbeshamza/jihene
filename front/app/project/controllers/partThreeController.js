/**
 * @ngdoc controller
 * @name project.controllers:buildController
 * @description
 * This file defines the build controller
 */

define([], function () {
    'use strict';

    partThreeController.$inject = ['localStorageService','$mdToast','$state','$rootScope', '$scope'];

    function partThreeController(localStorageService,$mdToast,$state,$rootScope, $scope) {

        var vm = this;
        vm ={
            testGrammar:testGrammar
        };
        function testGrammar() {

        }


        return vm;

    }





    return partThreeController;
});
