# full-numbers
A nice JS package to convert numbers to words. :zero: :arrow_right: :abc:

:tada: Multilanguage and currency support :tada:


## :closed_book: Usage
First things first - install the package using `npm` or `yarn`:

```bash
# using npm
npm i full-numbers

# using yarn
yarn add full-numbers
```

After that, import the helper wherever you want to use it:

```js
// es-modules
import fullNumbers from 'full-numbers';

// commonjs
const fullNumbers = require('full-numbers');
```

Then, you'll be able to use it:

```js
const words = fullNumbers(1234); // "one thousand, two hundred thirty-four"

// or

const words = fullNumbers({
  value: 1234,
  lang: 'pt-BR',
}); // "um mil, duzentos e trinta e quatro"
```

To use with `currency` support:

```js
// "simple" values
const words = fullNumbers({
  value: 1234,
  lang: 'pt-BR',
  currency: {
    name: {
      singular: 'real',
      plural: 'reais'
    },
    decimals: {
      singular: 'centavo',
      plural: 'centavos'
    }
  }
}); // "um mil, duzentos e trinta e quatro reais"

// with decimals
const words = fullNumbers({
  value: 1234.5,
  lang: 'pt-BR',
  currency: {
    name: {
      singular: 'real',
      plural: 'reais'
    },
    decimals: {
      singular: 'centavo',
      plural: 'centavos'
    }
  }
}); // "um mil, duzentos e trinta e quatro reais e cinquenta centavos"
```


### Avaliable Options
| Name               | Type           | Description         | Example      |
| ------------------ | -------------- | ------------------- | ------------ |
| `value`            | number         | The value           | `123`        |
| `lang`             | string         | The output language | `pt-BR`      |
| `currency`         | object         | The output currency | See below    |

The currency object should look like this:

```js
{
  name: {
    singular: 'real',
    plural: 'reais'
  },
  decimals: {
    singular: 'centavo',
    plural: 'centavos'
  }
}
```

The `singular`/`plural` keys are important to avoid mismatch of grammar rules.


## :computer: Developing
First, fork the project. After it, install the dependencies (preferably using [npm](https://npmjs.com/) - since the project is using it) and do the work.

Also, take a look at the [contributing guide](https://github.com/jlozovei/full-numbers/blob/master/.github/CONTRIBUTING.md)!

### :books: Adding a new language
To add a new language, follow the steps below:

- Create a new `.json` file within `src/languages` directory. The name of this file should be a valid language code (i.e. `en`, `pt-BR`...)
- The file must have the following keys:
  - `PUNCTUATION`: an object of punctuations used between `dozens`, `hundreds` and `decimals` - if the language doesn't use them, leave the values blank;
  - `LESS_THAN_TWENTY`: an array of numbers' names between 0 and 19.
  - `DOZENS`: an array of dozens' names bewteen 0 and 90;
  - `HUNDREDS`: an object with the singular/plural names of hundreds between 100 and 900 - if the names are equal, leave the two keys with the same value;
  - `SHORT_SCALE_NAME`: an object with the [short scale name](https://en.wikipedia.org/wiki/Long_and_short_scales#Short_scale) from 100 (hundred) to 1000000000000000 (quadrillion).

You can follow the [`en.json`](https://github.com/jlozovei/full-numbers/blob/master/src/languages/en.json) file as an example to follow, and see the [supported languages here](https://github.com/jlozovei/full-numbers/tree/master/src/languages).


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/full-numbers/blob/master/LICENSE).
