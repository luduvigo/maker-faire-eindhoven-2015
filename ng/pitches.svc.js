angular.module('app')
    .service('PitchesSvc', function ($http){
        this.fetch = function () {
            return $http.get('/api/pitches')
        }       
        this.create = function (pitch) {
            return $http.post('/api/pitches', pitch)
        }
    })
