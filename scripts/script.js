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

//https://api.themoviedb.org/3/movie/now_playing

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



$scope.nowPlaying = function () {

        $http({
        method : "GET",
        url : "https://api.themoviedb.org/3/movie/now_playing?api_key=5ce8b69de33584132f1db727eb5cb513"
    })
    .then(function mySucces(response) {
        // $scope.myWelcome = response.data;
        // console.log(response.data.results[0]);
        $scope.myArray = response.data.results;
    },
     function myError(response) {
        $scope.myWelcome = response.statusText;
    });


}



    $scope.popular = function () {

        $http({
        method : "GET",
        url : "https://api.themoviedb.org/3/movie/popular?api_key=5ce8b69de33584132f1db727eb5cb513"
    })
    .then(function mySucces(response3) {
        // $scope.myWelcome = response.data;
        console.log(response3);
        $scope.myArray = response3.data.results;
    },
     function myError(response3) {
        $scope.myWelcome = response3.statusText;
    });

}

    $scope.upcoming = function () {

        $http({
        method : "GET",
        url : "https://api.themoviedb.org/3/movie/upcoming?api_key=5ce8b69de33584132f1db727eb5cb513"
    })
    .then(function mySucces(response4) {
        // $scope.myWelcome = response.data;
        console.log(response4);
        $scope.myArray = response4.data.results;
    },
     function myError(response4) {
        $scope.myWelcome = response4.statusText;
    });
   
}

    $scope.topRated = function () {

        $http({
        method : "GET",
        url : "https://api.themoviedb.org/3/movie/upcoming?api_key=5ce8b69de33584132f1db727eb5cb513"
    })
    .then(function mySucces(response5) {
        // $scope.myWelcome = response.data;
        console.log(response5);
        $scope.myArray = response5.data.results;
    },
     function myError(response5) {
        $scope.myWelcome = response5.statusText;
    });
   
}

    $scope.genres = function () {

        $http({
        method : "GET",
        url : "https://api.themoviedb.org/3/movie/upcoming?api_key=5ce8b69de33584132f1db727eb5cb513"
    })
    .then(function mySucces(response6) {
        // $scope.myWelcome = response.data;
        console.log(response6);
        $scope.myArray = response6.data.results;
    },
     function myError(response6) {
        $scope.myWelcome = response6.statusText;
    });
   
}

    $scope.extras = function () {

    
   
}

	

});
