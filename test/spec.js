/*jshint node:true, mocha:true */

'use strict';

require('should');

var floatApi = require('../fixtures/api');
var apiResultTransformer = require('../src/');

describe('api result transformer', function() {
  it('should transform the results of an api with the transformer functions provided', function() {
    var integerApi = apiResultTransformer({
      add: Math.round
    }, floatApi);

    floatApi.add(Math.PI, 2).should.be.exactly(Math.PI + 2);
    integerApi.add(Math.PI, 2).should.be.exactly(5);
  });
});
