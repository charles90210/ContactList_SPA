(function(){
//Initializing our app module
var app = angular.module('myContacts', []);

//Main contacts controller
app.controller('ContactsController', ['$scope', '$http', function($scope, $http){


//$http get service to help us retrieve the json data
$http.get('assets/contacts.json').success(function(data){
    $scope.contacts = data;
});
  //This function here allows me display my json data in my bootstrap table.  
  $(function(){$('#table').bootstrapTable({data: contacts})})

}]);

})();//end of main function