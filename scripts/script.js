// creating a module called myModule
var variable = angular.module("myModule",[]);


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


variable.controller("myController", function($scope){

	// DUMMY DATA
	// var merchandise = [{ image:"images/2014toyotaCorolla.jpg", brand:"Toyota", model:"Corolla", year:2014, engine: "v4", mileage: 75000, price: 25000 },
	// { image:"images/2008chevroletSilverado.jpg", brand:"Chevrolet", model:"Silverado", year:2009, engine: "v8", mileage: 90000, price: 35000 },
	// { image:"images/2010volkswagenBug.jpg", brand:"Volkswagen", model:"Beetle", year:2010, engine: "v4", mileage: 50000, price: 45000 },
	// { image:"images/2010mazda3.jpg", brand:"Mazda", model:"3", year:2010, engine: "v4", mileage: 72000, price: 34000 },
	// { image:"images/2012hondaAccord.jpg", brand:"Honda", model:"Accord", year:2012, engine: "v4", mileage: 35000, price: 27000 },
	// { image:"images/2012mustang.jpg", brand:"Ford", model:"Mustang", year:2012, engine: "v6", mileage: 45000, price: 19000 },
	// { image:"images/2012porscheCayman.jpg", brand:"Porche", model:"Cayman", year:2012, engine: "v8", mileage: 47000, price: 38000 },
	// { image:"images/2013fordFusion.jpg", brand:"Ford", model:"Fusion", year:2013, engine: "v4", mileage: 75000, price: 25000 },
	// { image:"images/2013porscheCayenne.jpg", brand:"Porche", model:"Cayenne", year:2013, engine: "v8", mileage: 64000, price: 47000 },
	// { image:"images/2013volkswagenBug.jpg", brand:"Volkswagen", model:"Beetle", year:2013, engine: "v4", mileage: 97000, price: 29000 },
	// { image:"images/2015mustang.png", brand:"Ford", model:"Mustang", year:2015, engine: "v8", mileage: 7000, price: 53000 }
	// 				  ];

	// $scope.merchandise = merchandise;

	// $scope.sortColumn = "brand";
	

});
