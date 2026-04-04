fs = require('fs')
http = require('http')
url = require('url')

fs.writeFileSync('test.txt','Exam attempt')
fs.appendFileSync('test.txt',"\nEntry 1: Pass \nEntry 2: Fail \nEntry 3: Pass")
r = fs.readFileSync('test.txt','utf-8')
c = r.split('Pass').length
console.log(c)
if(c>=3){
    fs.unlinkSync('test.txt')   
}