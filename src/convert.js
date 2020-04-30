import isFinite from './helpers/isFinite';
import isSafeNumber from './helpers/isSafeNumber';

import generateWords from './generateWords';

const convert = (params) => {
  const { value, lang } = params;
  const num = parseInt(value, 10);

  if (!isFinite(num)) {
    throw new TypeError('Not a finite number: ' + value + ' (' + typeof value + ')');
  }

  if (!isSafeNumber(num)) {
    throw new RangeError('Input is not a safe number, it’s either too large or too small.');
  }

  return generateWords(num, lang);
};

export default convert;
