// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-export');

require('./7-mind-grenade');
sayHi('Susan');
sayHi(john);
sayHi(peter);