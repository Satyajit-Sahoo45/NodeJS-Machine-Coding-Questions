const fs = require('fs');

const content = "the updated written text ajdlkajsldkjals"

fs.appendFile('example.txt', content, 'utf8', (err) => {
    if (err) {
        console.log("Error writing:", err)
        return;
    }
    console.log("Updated written text")
})