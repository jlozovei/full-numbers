import convert from './src/convert';

const numbersToWords = (params) => {
  const isObj = typeof params === 'object';
  const value = isObj ? params.value : params;
  const hasCurrencyObj = isObj && params.hasOwnProperty('currency');

  const options = {
    value,
    lang: params.lang || 'en'
  };

  if (hasCurrencyObj) options.currency = params.currency;

  return convert(options);
};

export default numbersToWords;
