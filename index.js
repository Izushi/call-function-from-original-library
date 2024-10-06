// const myAppFunction = require('@daichiizushi/original-library');
import myAppFunction from '@daichiizushi/original-library';

const numbers = [1, 2, 3, 4, 5];
const callback = myAppFunction(element => element * 2);
callback(numbers);