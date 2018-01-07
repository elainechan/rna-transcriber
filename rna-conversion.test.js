const { sayHello } = require('./rna-conversion');

test('For hello world', function() {
	expect(sayHello()).toBe('Hello world!');
});