angular.module('app')
    .controller('PitchesCtrl', function ($scope, PitchesSvc) {
        $scope.addPitch = function () {
             if($scope.postBody){
                PitchesSvc.create({
                    title: '',
                    votes : 0
                }).
                success(function (pitch) {
                    $scope.pitches.unshift(pitch)
                    $scope.postBody = null         
                })
            }
        }
        PitchesSvc.fetch().success(function (pitches) {

            $scope.pitches = pitches
        })         
    })
