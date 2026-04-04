fs = require('fs')

fs.writeFileSync('source.txt' , 'Hii . My name is Diya')

fs.copyFileSync('source.txt','destination.txt')

d = fs.readFileSync('destination.txt' ,'utf-8')
console.log(d)