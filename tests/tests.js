var assert = chai.assert;

suite('csv', function() {
	test('Comprobación de valores', function() {
		original.value = "\"Nombre\",\"Edad\"\n\"Juan\",30";
		calculate();
		assert.deepEqual(result.innerHTML, "\n<tbody><tr>\t<td>Nombre</td>\t<td>Edad</td></tr>\n<tr>\t<td>Juan</td>\t<td>30</td></tr>\n</tbody>");
	});
	test('Detección de errores', function() {
		original.value = "\"hola\" \"mundo\"\n\"helloworld\"";
		calculate();
		assert.isNotNull(result.innerHTML.match(/class=\"error\"/));
	});
	test('Detección de acierto', function() {
		original.value = "\"Nombre\",\"Edad\"\n\"Juan\",30";
		calculate();
		assert.isNull(result.innerHTML.match(/class=\"error\"/));
	});
});