import isFloat from './helpers/isFloat';
import getDecimals from './helpers/getDecimals';
import padNumber from './helpers/padNumber';

import { scale } from './constants/index';

const state = {};

function floor(expression) {
  return Math.floor(expression);
}

function wordify(number, lastWords) {
  let word = '';
  let words = lastWords;
  let remainder = 0;

  if (number === 0)
    return !words ? state.locale.LESS_THAN_TWENTY[0] : words.join(' ').replace(/,$/, '');

  if (!words) words = [];

  if (number < scale.TWENTY) {
    word = state.locale.LESS_THAN_TWENTY[number];
  } else {
    if (number < scale.ONE_HUNDRED) {
      remainder = number % scale.TEN;
      word = state.locale.DOZENS[floor(number / scale.TEN)];

      if (remainder) {
        word += `${state.locale.PUNCTUATION.dozens}${state.locale.LESS_THAN_TWENTY[remainder]}`;
        remainder = 0;
      }
    } else if (number < scale.ONE_THOUSAND) {
      const factor = floor(number / scale.ONE_HUNDRED);
      remainder = number % scale.ONE_HUNDRED;

      if (remainder) {
        word = `${state.locale.HUNDREDS[factor].plural} ${state.locale.PUNCTUATION.hundreds}`;
      } else {
        word = state.locale.HUNDREDS[factor].singular;
      }
    } else if (number < scale.ONE_MILLION) {
      const factor = floor(number / scale.ONE_THOUSAND);
      remainder = number % scale.ONE_THOUSAND;
      word = `${wordify(floor(number / scale.ONE_THOUSAND))} `;

      if (remainder) {
        word += state.locale.SHORT_SCALE_NAME.thousand.plural;
      } else {
        word += state.locale.SHORT_SCALE_NAME.thousand.singular;
      }

      if ((remainder / scale.TEN) % scale.TEN === 0) {
        word += ` ${state.locale.PUNCTUATION.hundreds}`;
      } else {
        word += ',';
      }
    } else if (number < scale.ONE_BILLION) {
      const factor = floor(number / scale.ONE_MILLION);
      remainder = number % scale.ONE_MILLION;
      word = `${wordify(floor(number / scale.ONE_MILLION))} `;

      if (remainder) {
        word += state.locale.SHORT_SCALE_NAME.million.plural;
      } else {
        word += state.locale.SHORT_SCALE_NAME.million.singular;
      }

      word += ',';
    } else if (number < scale.ONE_TRILLION) {
      const factor = floor(number / scale.ONE_BILLION);
      remainder = number % scale.ONE_BILLION;
      word = `${wordify(floor(number / scale.ONE_BILLION))} `;

      if (remainder) {
        word += state.locale.SHORT_SCALE_NAME.billion.plural;
      } else {
        word += state.locale.SHORT_SCALE_NAME.billion.singular;
      }

      word += ',';
    } else if (number < scale.ONE_QUADRILLION) {
      const factor = floor(number / scale.ONE_TRILLION);
      remainder = number % scale.ONE_TRILLION;
      word = `${wordify(floor(number / scale.ONE_TRILLION))} `;

      if (remainder) {
        word += state.locale.SHORT_SCALE_NAME.trillion.plural;
      } else {
        word += state.locale.SHORT_SCALE_NAME.trillion.singular;
      }

      word += ',';
    } else if (number <= scale.MAX_NUMBER) {
      const factor = floor(number / scale.ONE_QUADRILLION);
      remainder = number % scale.ONE_QUADRILLION;
      word = `${wordify(floor(number / scale.ONE_QUADRILLION))} `;

      if (remainder) {
        word += state.locale.SHORT_SCALE_NAME.quadrillion.plural;
      } else {
        word += state.locale.SHORT_SCALE_NAME.quadrillion.singular;
      }

      word += ',';
    }
  }

  words.push(word);
  return wordify(remainder, words);
}

export default function generateWords(options) {
  const { value, lang, currency } = options;
  const hasDecimalValues = isFloat(value);

  const locale = require(`./languages/${lang}.json`);
  state.locale = locale;

  if (currency) {
    state.currency = currency;
  }

  if (hasDecimalValues) {
    const decimals = getDecimals(value, 10);
    const padded = padNumber(decimals);

    state.decimals = {
      value: padded,
      words: wordify(parseInt(padded))
    };
  } else {
    delete state.decimals;
  }

  const number = parseInt(value, 10);
  let words = wordify(number);

  if (state.currency) {
    if (number > 1) words += ` ${state.currency.name.plural}`;
    else words += ` ${state.currency.name.singular}`;

    if (state.decimals) {
      words += ` ${state.locale.PUNCTUATION.decimals} ${state.decimals.words}`;

      if (state.decimals.value > 1) {
        words += ` ${state.currency.decimals.plural}`;
      } else {
        words += ` ${state.currency.decimals.singular}`;
      }
    }
  }

  return words;
}
