describe('NumberService', function() {
	var converterService;

	beforeEach(function(){
		//load module
		module('numberApp');

		inject(function(_numberService_) {
      		numberService = _numberService_;
    	});
	});

	it('deve ter o método fatorial', function() {
		expect(angular.isFunction(numberService.factorial)).toBe(true);
	});

	it('deve ser feito o cálculo do fatorial', function() {
		expect(numberService.factorial(0)).toBe(1);
		expect(numberService.factorial(2)).toBe(2);
		expect(numberService.factorial(3)).toBe(6);
		expect(numberService.factorial(5)).toBe(120);
	});

	it('deve retornar null para valores inválidos', function() {
		expect(numberService.factorial()).toBe(null);
		expect(numberService.factorial(-1)).toBe(null);
		expect(numberService.factorial('')).toBe(null);
		expect(numberService.factorial('1')).toBe(null);
		expect(numberService.factorial('-1')).toBe(null);
		expect(numberService.factorial('anystring')).toBe(null);
	});
});