angular.module("app",[]),angular.module("app").controller("PitchesCtrl",["$scope","PitchesSvc",function(t,c){t.addPitch=function(){t.postBody&&c.create({title:"",votes:0}).success(function(c){t.pitches.unshift(c),t.postBody=null})},c.fetch().success(function(c){console.log(c),t.pitches=c})}]),angular.module("app").service("PitchesSvc",["$http",function(t){this.fetch=function(){return t.get("/api/pitches")},this.create=function(c){return t.post("/api/pitches",c)}}]);
