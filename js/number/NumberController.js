app.controller('NumberController', function($scope, numberService) {
	$scope.number = 0;
	$scope.factorial = 1;

	$scope.calcFactorial = function() {
		var factorial;
		factorial = numberService.factorial($scope.number);
		$scope.factorial = (factorial !== null) ? factorial : '';
	};
});