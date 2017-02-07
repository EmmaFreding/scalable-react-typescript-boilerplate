/// <reference path="../../../typings/globals/mocha/index.d.ts" />
import hello from './index';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import * as mocha from 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = hello();
    console.log("inside test")
    expect(result).to.equal('Hello World!');
  });
});