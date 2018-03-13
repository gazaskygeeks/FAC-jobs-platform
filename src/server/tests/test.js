const test = require('tape');

test('Initialize', t => {
  const num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});
