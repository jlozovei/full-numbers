import fullNumbers from '../index';

test('Write a single number', () => {
  const words = fullNumbers(5);
  expect(words).toBe('five');
});

test('Write a dozen below 20', () => {
  const words = fullNumbers(14);
  expect(words).toBe('fourteen');
});

test('Write a dozen above 20', () => {
  const words = fullNumbers(52);
  expect(words).toBe('fifty-two');
});

test('Write a hundred', () => {
  const words = fullNumbers(320);
  expect(words).toBe('three hundred and twenty');
});

test('Write a million', () => {
  const words = fullNumbers(4520350);
  expect(words).toBe('four million, five hundred and twenty thousand, three hundred and fifty');
});
