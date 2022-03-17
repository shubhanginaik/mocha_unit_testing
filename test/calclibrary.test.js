'use strict';

const expect = require('chai').expect;

const {sum,subtract} = require('../calclibrary');

describe('Test if functions are defined',function(){
    it('sum is a function', function(){
        expect(sum).to.be.a('function')
    });
    it('subtract is a function', function(){
        expect(subtract).to.be.a('function')
    });
});

