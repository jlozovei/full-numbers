import { scale } from './constants/index';

function floor(expression) {
  return Math.floor(expression);
}

function generateWords(number, lang, lastWords) {
  let word = '';
  let words = lastWords;
  let remainder = 0;

  const locale = require(`./languages/${lang}.json`);

  if (number === 0) return !words ? locale.LESS_THAN_TWENTY[0] : words.join(' ').replace(/,$/, '');

  if (!words) words = [];

  if (number < scale.TWENTY) {
    word = locale.LESS_THAN_TWENTY[number];
  } else {
    if (number < scale.ONE_HUNDRED) {
      remainder = number % scale.TEN;
      word = locale.DOZENS[floor(number / scale.TEN)];
      if (remainder) {
        word += `${locale.PUNCTUATION.dozens}${locale.LESS_THAN_TWENTY[remainder]}`;
        remainder = 0;
      }
    } else if (number < scale.ONE_THOUSAND) {
      const factor = floor(number / scale.ONE_HUNDRED);
      remainder = number % scale.ONE_HUNDRED;

      if (remainder) {
        word = `${locale.HUNDREDS[factor].plural}${locale.PUNCTUATION.hundreds}`;
      } else {
        word = `${locale.HUNDREDS[factor].singular}`;
      }
    } else if (number < scale.ONE_MILLION) {
      const factor = floor(number / scale.ONE_THOUSAND);
      remainder = number % scale.ONE_THOUSAND;

      if (remainder) {
        word = `${generateWords(floor(number / scale.ONE_THOUSAND), lang)} ${
          locale.SHORT_SCALE_NAME.thousand.plural
        },`;
      } else {
        word = `${generateWords(floor(number / scale.ONE_THOUSAND), lang)} ${
          locale.SHORT_SCALE_NAME.thousand.singular
        },`;
      }
    } else if (number < scale.ONE_BILLION) {
      const factor = floor(number / scale.ONE_MILLION);
      remainder = number % scale.ONE_MILLION;

      if (remainder) {
        word = `${generateWords(floor(number / scale.ONE_MILLION), lang)} ${
          locale.SHORT_SCALE_NAME.million.plural
        },`;
      } else {
        word = `${generateWords(floor(number / scale.ONE_MILLION), lang)} ${
          locale.SHORT_SCALE_NAME.million.singular
        },`;
      }
    } else if (number < scale.ONE_TRILLION) {
      const factor = floor(number / scale.ONE_BILLION);
      remainder = number % scale.ONE_BILLION;

      if (remainder) {
        word = `${generateWords(floor(number / scale.ONE_BILLION), lang)} ${
          locale.SHORT_SCALE_NAME.billion.plural
        },`;
      } else {
        word = `${generateWords(floor(number / scale.ONE_BILLION), lang)} ${
          locale.SHORT_SCALE_NAME.billion.singular
        },`;
      }
    } else if (number < scale.ONE_QUADRILLION) {
      const factor = floor(number / scale.ONE_TRILLION);
      remainder = number % scale.ONE_TRILLION;

      if (remainder) {
        word = `${generateWords(floor(number / scale.ONE_TRILLION), lang)} ${
          locale.SHORT_SCALE_NAME.trillion.plural
        },`;
      } else {
        word = `${generateWords(floor(number / scale.ONE_TRILLION), lang)} ${
          locale.SHORT_SCALE_NAME.trillion.singular
        },`;
      }
    } else if (number <= scale.MAX_NUMBER) {
      const factor = floor(number / scale.ONE_QUADRILLION);
      remainder = number % scale.ONE_QUADRILLION;

      if (remainder) {
        word = `${generateWords(floor(number / scale.ONE_QUADRILLION), lang)} ${
          locale.SHORT_SCALE_NAME.quadrillion.plural
        },`;
      } else {
        word = `${generateWords(floor(number / scale.ONE_QUADRILLION), lang)} ${
          locale.SHORT_SCALE_NAME.quadrillion.singular
        },`;
      }
    }
  }

  words.push(word);
  return generateWords(remainder, lang, words);
}

export default generateWords;
