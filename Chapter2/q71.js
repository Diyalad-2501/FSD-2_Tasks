fs = require('fs')

fs.writeFileSync('array.txt' , '8 9 0 -1 3 -8 7 6')

d = fs.readFileSync('array.txt' , 'utf-8')
d = d.split(' ')

console.log(d.sort())