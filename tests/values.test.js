import numbersToWords from '../index';

test('Write a single number', () => {
  const words = numbersToWords(5);
  expect(words).toBe('five');
});

test('Write a dozen below 20', () => {
  const words = numbersToWords(14);
  expect(words).toBe('fourteen');
});

test('Write a dozen above 20', () => {
  const words = numbersToWords(52);
  expect(words).toBe('fifty-two');
});

test('Write a hundred', () => {
  const words = numbersToWords(320);
  expect(words).toBe('three hundred and twenty');
});

test('Write a million', () => {
  const words = numbersToWords(4520350);
  expect(words).toBe('four million, five hundred twenty thousand, three hundred fifty');
});
