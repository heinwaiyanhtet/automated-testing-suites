import {describe, expect, test} from '@jest/globals';
import throwerror from './throwerror';



test('compiling android goes as expected', () => {

    
    expect(() => throwerror()).toThrow();

    expect(() => throwerror()).toThrow(Error);


    // You can also use a string that must be contained in the error message or a regexp
    // expect(() => throwerror()).toThrow(/JDK/);


      // Or you can match an exact error message using a regexp like below
    // expect(() => throwerror()).toThrow(/^you are using the wrong JDK!$/);


});
