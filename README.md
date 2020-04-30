# full-numbers
A nice JS package to convert numbers to words. :zero: :arrow_right: :abc:  
Multilanguage support! :tada:


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

### Avaliable Options
| Name           | Type           | Description         | Example |
| -------------- | -------------- | ------------------- | ------- |
| `value`        | number         | The value           | `123`   |
| `lang`         | string         | The output language | `pt-BR` |


## :computer: Developing
First, fork the project. After it, install the dependencies (preferably using [npm](https://npmjs.com/) - since the project is using it) and do the work.

Also, take a look at the [contributing guide](https://github.com/jlozovei/full-numbers/blob/master/.github/CONTRIBUTING.md)!


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/full-numbers/blob/master/LICENSE).
