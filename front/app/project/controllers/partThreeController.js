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

            var mots=["Le chien", "est" , "morte"];
            $scope.countdown=10;
            angular.forEach(mots, function(value) {
                $scope.countdown=10;
                $scope.$broadcast('timer-start');
                $scope.enabledWord=value;
                console.log(value);

                $scope.countdown=10;
            });

            $scope.timerRunning = true;
            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');
                $scope.timerRunning = true;
            };
            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');
                $scope.timerRunning = false;
            };
            $scope.$on('timer-stopped', function (event, data){
                console.log('Timer Stopped - data = ', data);
                $scope.countdown=10;
            });

        }
        return vm;

    }





    return partThreeController;
});
