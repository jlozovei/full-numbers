import isFinite from './helpers/isFinite';
import isSafeNumber from './helpers/isSafeNumber';

import generateWords from './generateWords';

const convert = (options) => {
  const { value, lang } = options;

  /* if (!isFinite(num)) {
    throw new TypeError('Not a finite number: ' + value + ' (' + typeof value + ')');
  } */

  /* if (!isSafeNumber(num)) {
    throw new RangeError('Input is not a safe number, it’s either too large or too small.');
  } */

  try {
    const locale = require(`./languages/${lang}.json`);
  } catch (err) {
    throw new ReferenceError(`
      The language you provided can't be found.
      Check the avaliable languages at:
      https://github.com/jlozovei/full-numbers/tree/master/src/languages.

      Either provide a supported language or remove the "lang" attribute to use english as default.
    `);
  }

  return generateWords(options);
};

export default convert;
