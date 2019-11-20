const path = require ('path');
const fs = require ('fs');
// fs.mkdir(path.join(__dirname, '/romal/cv'), (err) =>{
//     if (err) {
//         console.log(err)
//     }
//     else{
//         console.log('Folder is created')
//     }
// });


const content = 'Hello from the other side'

// create a file 

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), content,(err)=>{
    if (err) {
        console.log(err)
    }
    else{
        console.log('Folder is created');
    }
})

// append to a file 

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' i love React',(err)=>{
    if (err) {
        console.log(err)
    }
    else{
        console.log('Folder is created');
    }
})

// Read a file 

fs.readFile(path.join(__filename, '/test hello.text'), 'utf8', (err,data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})