describe('NumberController', function() {
	var 
		$scope,
		controller,
		numberService;

	beforeEach(function(){
		//load module
		module('numberApp');

		inject(function($rootScope, $controller, _numberService_) {
    		$scope = $rootScope.$new();
    		numberService = _numberService_;
    		controller = $controller('NumberController', {
      			$scope: $scope,
      			numberService: numberService
    		});
    	});
	});

	it('deve ter o número e o fatorial definidos no escopo', function() {
		expect($scope.number).toBeDefined();
		expect($scope.factorial).toBeDefined(); 
	});

	it('deve ter um método para calcular o fatorial', function() {
		expect($scope.calcFactorial).toBeDefined();
	});

	it('deve calcular o fatorial e armazenar o resultado no escopo', function() {
		//given
		$scope.number = 5;

		//and
		spyOn(numberService, 'factorial').andCallThrough();

		//when
		$scope.calcFactorial();

		//then
		expect(numberService.factorial).toHaveBeenCalledWith(5);

		//and
		expect($scope.factorial).toBe(120);
	});
	
	it('deve armazenar vazio no escopo quando o parâmetro for inválido', function() {
		//given
		$scope.number = "";

		//when
		$scope.calcFactorial();

		//and
		expect($scope.factorial).toBe("");
	});
});