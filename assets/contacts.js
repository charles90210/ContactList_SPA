(function(){
//Initializing our app module
var app = angular.module('myContacts', ['angularUtils.directives.dirPagination']);

//Main contacts controller
app.controller('ContactsController', ['$scope', '$http', function($scope, $http){


$scope.contacts = [];
//$http get service to help us retrieve the json data
$http.get('assets/contacts.json').success(function(data){
    $scope.contacts = data;
//This function here allows me push my json data into the bootstrap Table 
$(function(){$('#table').bootstrapTable({data: contacts})})

});
   
//Setting up sort for the table columns  
$scope.sort = function(keyname){
  $scope.sortKey = keyname;
  $scope.reverse = !$scope.reverse;
}

}]);

})();//end of main function