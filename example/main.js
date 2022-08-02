const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (error, content) => {
    console.log(content);
});

console.log('Второй!');
