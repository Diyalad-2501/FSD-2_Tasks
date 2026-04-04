division1 = {numbers: [1,2,3,4,5]}
division2 = { numbers: [2,2,2,2,2]}
d=[]
fs = require('fs')

fs.writeFileSync('xyz.txt' , JSON.stringify(division1))
fs.appendFileSync('xyz.txt' , `\n${JSON.stringify(division1)}`)

d=[]
for(i in division1.numbers){
    d.push(division1.numbers[i] ** division2.numbers[i])
}

fs.appendFileSync('xyz.txt',`\n${d}`)
console.log(d)