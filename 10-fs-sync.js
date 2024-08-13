const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt', //path to file to write (if it doesnt exist it is created)
    `Here is the result:  ${first}, ${second}`, // what to send
    {flag: 'a'} // additional argument so that it appends not replaces
);

console.log('done with this task');
console.log('starting the next one');