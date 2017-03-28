angular.module('currencyApp', [])
.controller('currencyConvertCtrl', ['$scope','$http', function ($scope,$http) {
	var base = this;
	
	$scope.rates= {};
	$http.get('http://api.fixer.io/latest?base=ZAR').then(function(response){
		$scope.rates= response.data.rates; 
        $scope.toType= $scope.rates.AUD;
		$scope.fromType = $scope.rates.USD;
		$scope.fromValue =1;
		$scope.forExConvert();
	});
	$scope.forExConvert = function(){
		$scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
		$scope.toValue = $scope.toValue;
	};
}]);
 
