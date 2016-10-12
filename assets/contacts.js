(function(){
//Initializing our app module, added the dependency for pagination
var app = angular.module('myContacts', ['angularUtils.directives.dirPagination']);

//Main contacts controller
app.controller('ContactsController', ['$scope', '$http', function($scope, $http){

//Function allowing us to add new contacts to the database
$scope.addContact = function(){
$scope.contacts.push({
  id: $scope.newcontact.id
  Name: $scope.newcontact.Name,
  Email: $scope.newcontact.Email,
  Phone: $scope.newcontact.Phone,
  Address: $scope.newcontact.Address,
  City: $scope.newcontact.City,
  Zipcode: $scope.newcontact.Zipcode,
  State: $scope.newcontact.State
});
//Setting up our form so it clears out after each new contact is added
  $scope.newcontact.Name = "";
  $scope.newcontact.Email = "";
  $scope.newcontact.Phone = "";
  $scope.newcontact.Address = "";
  $scope.newcontact.City = "";
  $scope.newcontact.Zipcode = "";
  $scope.newcontact.State = "";
};

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