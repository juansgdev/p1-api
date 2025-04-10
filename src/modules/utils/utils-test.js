import * as utils from './utils.js';
import * as tests from '../tests/tests.js'

export const utilsTest = () => {
    if (tests.testFunction(utils.readFile("text.txt"), 'Texto de testeeeeeee...', 'string')) {
        console.log('Ok!');
    } else {
        console.log('NOT ok!');
    }
};

const test = utils.readFile("text.txt");
console.log(test);
//utilsTest();