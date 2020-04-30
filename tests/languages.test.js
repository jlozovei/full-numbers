import numbersToWords from '../index';

test('Write a single number in portuguese', () => {
  const options = {
    value: 7,
    lang: 'pt-BR'
  };
  const words = numbersToWords(options);
  expect(words).toBe('sete');
});

test('Write a dozen below 20 in portuguese', () => {
  const options = {
    value: 13,
    lang: 'pt-BR'
  };
  const words = numbersToWords(options);
  expect(words).toBe('treze');
});

test('Write a dozen above 20 in portuguese', () => {
  const options = {
    value: 68,
    lang: 'pt-BR'
  };
  const words = numbersToWords(options);
  expect(words).toBe('sessenta e oito');
});

test('Write a hundred in portuguese', () => {
  const options = {
    value: 1234,
    lang: 'pt-BR'
  };
  const words = numbersToWords(options);
  expect(words).toBe('um mil, duzentos e trinta e quatro');
});

test('Write a million in portuguese', () => {
  const options = {
    value: 2750130,
    lang: 'pt-BR'
  };
  const words = numbersToWords(options);
  expect(words).toBe('dois milhões, setecentos e cinquenta mil, cento e trinta');
});
