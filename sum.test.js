import {describe, expect, test} from '@jest/globals';
import sum from './sum';

// Common Matcher

    



test('the shopping list has milk on it', () => {  


    const shoppingList = 
    [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ]

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');

});



test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
  
test('but there is a "stop" in Christoph', () => {
expect('Christoph').toMatch(/stop/);
});


test('adding floating point numbers',() => {
    
    const value = 0.1 + 0.3;

    expect(value).toBeCloseTo(0.4);

})

test('two plus two', () => {  

    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);   
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
    

})

test('zero',() => {

    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();

})


test('null', () => 
{

    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

});
  

test('adding postive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {

            for (let b = 1; b < 10; b++) {
                
                expect(a + b).not.toBe(1);

            }
    }
})


test('two plus two is four', () => {

    expect(2 + 2).toBe(4);

})


test('object assignment', () => 
{

    const data = {one: 1};        

    data['two'] = 2;

    expect(data).toEqual({one:1,two:2});

});


describe('sum module', () => {



    test('adds 1 + 2 to equal 3', () => 
    {
        // arrange && act && assert
        const num1 = 1;
        const num2 = 2;

        // act
        const result = sum(num1,num2);

        // assert
        expect(result).toBe(3);

    });



});