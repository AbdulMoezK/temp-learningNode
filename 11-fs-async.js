const { readFile, writeFile, read } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8' , (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    const firstText = result;
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        
        const secondText = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result:  ${firstText}, ${secondText}`
        , (error, result) => {
            if(error) {
                console.log(error)
                return;
            }
            console.log('done with this task');
        })
    })
});

console.log('starting next task');