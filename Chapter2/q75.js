fs = require('fs')

d = fs.readFileSync('array.txt' , 'utf-8')
x = d.split(' ').sort()
console.log(x)
fs.appendFileSync('array.txt', `\nSorted array: ${x}`)
fs.appendFileSync('array.txt', `\nMaximum number: ${x[x.length -1 ]}`)
