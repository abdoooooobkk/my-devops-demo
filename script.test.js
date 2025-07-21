const { sayHello } = require('./script');

test('says Hello World', () => {
  expect(sayHello()).toBe('Hello World!');
});
