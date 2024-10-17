const fs = require('fs')

// fs.writeFile('message.txt', 'hello from Duy ', (err) => {
//     if(err) throw err
//     console.log('file has been save')
// })

fs.readFile('./message.txt', (err,data) => {
    if(err) throw err
    console.log(data.toString("utf8"));
})