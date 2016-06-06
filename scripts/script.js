// creating a module called myModule
var app = angular.module("myModule",[]);


//
//To sort Data in Angular use the orderBy filter
//Syntax: {{expression | orderBy : expression : reverse}}
// reverse is either true or false
// Example: ng-repeat="employee in employees | orderBy : 'salary' : false"
// will sort the array of employees by salary in ascending order 
//
//another way to set the order in which they are sorted is 
//putting a + or - in front of the expression ---> +salary/-salary
//


app.controller("myController", function($scope,$http){

https://api.themoviedb.org/3/movie/now_playing

	$http({
        method : "GET",
        url : "https://api.themoviedb.org/3/movie/now_playing?api_key=5ce8b69de33584132f1db727eb5cb513"
    })
    .then(function mySucces(response) {
        // $scope.myWelcome = response.data;
        console.log(response);
    },
     function myError(response) {
        $scope.myWelcome = response.statusText;
    });



    $http({
        method : "GET",
        url : "https://api.themoviedb.org/3/search/multi?api_key=5ce8b69de33584132f1db727eb5cb513&query=batman"
    })
    .then(function mySucces(response2) {
        // $scope.myWelcome = response.data;
        console.log(response2);
    },
     function myError(response2) {
        $scope.myWelcome = response2.statusText;
    });


	

});
