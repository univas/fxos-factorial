app.factory('numberService', function() {
	var ns = {};

	ns.factorial = function(number) {
		var factorial = 1;
		var i;

		if(typeof(number) === 'string' || number < 0 || number == null) return null;

		if(number == 0) 
			return 1;

		for(i = 1; i <= number; i++) {
			factorial *= i;
		}
		return factorial;

	};

	return ns;

});