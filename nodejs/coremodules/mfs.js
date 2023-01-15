var fs = require('fs');
fs.writeFileSync('test.txt', 'Hello fs!');
console.log(fs.readFileSync('test.txt').toString());

try{
    fs.unlinkSync('test.txt');
    console.log('test.txt successfully deleted');
}catch (err){
    console.log("Error: ", err);
}