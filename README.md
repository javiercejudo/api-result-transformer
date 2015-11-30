# api-result-transformer

[![Build Status](https://travis-ci.org/javiercejudo/api-result-transformer.svg)](https://travis-ci.org/javiercejudo/api-result-transformer)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/api-result-transformer/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/api-result-transformer?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/api-result-transformer/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/api-result-transformer)

Transform the results of an api with the transformer functions provided

## Install

    npm i api-result-transformer

## Usage

```js
var apiResultTransformer = require('api-result-transformer');

var floatApi = {
  add: function(a, b) {
    return a + b;
  }
};

var integerApi = apiResultTransformer({
  add: Math.round
}, floatApi);

floatApi.add(Math.PI, 2); // => Math.PI + 2
integerApi.add(Math.PI, 2); // => 5
```
