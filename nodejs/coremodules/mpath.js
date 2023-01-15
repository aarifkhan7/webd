var path = require('path');
console.log(path.normalize('/foo/bar'));
console.log(path.normalize('/foo//bar/bas/..'));

console.log(path.join('/', 'home', '/aarif'));

var completePath = '/home/Aarif/Desktop/hello.html'

console.log(path.dirname(completePath));
console.log(path.basename(completePath));
console.log(path.extname(completePath));
