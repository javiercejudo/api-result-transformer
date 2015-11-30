# api-result-transformer

[![Build Status](https://travis-ci.org/javiercejudo/api-result-transformer.svg)](https://travis-ci.org/javiercejudo/api-result-transformer)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/api-result-transformer/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/api-result-transformer?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/api-result-transformer/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/api-result-transformer)

Transform the results of an api with the transformer functions provided

## Install

    npm i api-result-transformer

## Usage

See [live playground](https://tonicdev.com/javiercejudo/api-result-transformer/5.0.0).

```js
var lc = require('api-result-transformer');
var temp = lc.PRESETS.temperature.conversions;
var cToF = lc.conversion(temp, 'celsius', 'fahrenheit');

lc.convert(cToF, 25).toFixed(3); // => '77.000'

// f(x) = 3x + 1
lc.convert([[0, 1], [1, 4]], 5); // => 16
```

Unlike *linear-converter*, *api-result-transformer* always returns primitive numbers.

See [CodePen example](http://codepen.io/javiercejudo/pen/ojjroJ?editors=101).

For more documentation, see [linear-converter](https://github.com/javiercejudo/linear-converter).

## Related projects

- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
