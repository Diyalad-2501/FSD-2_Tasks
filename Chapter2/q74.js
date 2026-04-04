fs = require('fs')

fs.writeFileSync('new.txt' , 'This is data')
fs.appendFileSync('new.txt' , '\nThat is data')
d = fs.readFileSync('new.txt' , 'utf-8')
console.log(d)
console.log('Thank you for using program')
