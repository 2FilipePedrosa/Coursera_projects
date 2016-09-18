(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);

MsgController.$inject=['$scope'];
function MsgController($scope){


var Nitems=function(){
  var count=0;
  var stringToSplit=$scope.food;
  var separator=','

  var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings.length;
};

$scope.checkItem=function(){
$scope.check="Please enter data first"
  var count=  Nitems();
if(count>3){
    $scope.myStyle={color:'red'};
    $scope.check="Too much!";
}else if(count>0 && count<=3){
$scope.myStyle={color:'green'};
  $scope.check="Enjoy!";
}else($scope.check="Please enter data first");
}
};




})()
