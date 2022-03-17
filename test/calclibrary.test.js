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
    it('"2" is a string', function(){
        expect('2').to.be.a('string')
    });
    it('2 is a number', function(){
        expect(2).to.be.a('number')
    });
});

describe('Test sum(1,2)=3',function(){
    it('sum(1,2)=3', function(){
        expect(sum(1,2)).to.equal(3)
    });
});
describe('Test sum with integers',function(){
    const testCases=[
        {a:1,b:1, result:2},
        {a:2,b:3, result:5},
        {a:-2,b:-3, result:-5},
        {a:0,b:0, result:0}
    ]
    testCases.forEach(function(tcase){
        it(`sum(${tcase.a},${tcase.b})=${tcase.result}`,function(){
           expect(sum(tcase.a,tcase.b)).to.equal(tcase.result); 
        });
    });
});

describe('test with floats', function(){
    const testCases =[
        {a:10,b:11.5, result:21.5},
        {a:-1.5,b:-3.5, result:-5},
        {a:2.4, b:-2.5, result:-0.1}
    ];

    testCases.forEach(function(tcase){
        it(`sum(${tcase.a},${tcase.b})=${tcase.result}`,function(){
           expect(sum(tcase.a,tcase.b)).to.be.closeTo(tcase.result,0.01); 
        });
    });
});

// describe('Missing parameter', function(){
//     const testCases=[
//         {a:1, expected:'parameter missing'},
//         {a:'a', expected:'parameter missing'}
//     ]
//     testCases.forEach(function(tcases){
//         it(`sum(${tcase.a}) throws an exception '${tcases.expected}'`, function(){
//             expect(function(){
//                 sum(tcases.a)
//             }).to.throw(tcases.expected);
//         });
//     });
// });

// describe('testing only numbers allowed', function(){
//     it(`sum(1,a) throws an exception 'only numbers allowed'`, function(){
//         expect(function(){
//             sum(1,'a')
//         }).to.throw('only numbers allowed');
//     });
// });