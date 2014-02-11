var assert = chai.assert;

suite('temperature', function() {
	test('32.5F = 0.3C', function() {
		original.value = "32.5F";
		calculate();
		assert.deepEqual(converted.innerHTML, "0.3 Celsius");
	});
	test('35C = 95.0 Farenheit', function() {
		original.value = "35C";
		calculate();
		assert.deepEqual(converted.innerHTML, "95.0 Farenheit");
	});
	test('5X = error', function() {
		original.value = "5X";
		calculate();
		assert.match(converted.innerHTML, /ERROR/);
	});
});