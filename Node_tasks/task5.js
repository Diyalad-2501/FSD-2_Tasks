// Create JSON object in file which contains array of objects. Calculate perimeter of square 
// and perimeter of circle by using side value and diameter value respectively. And append 
// final answers in file.

const { json } = require('stream/consumers')

obj = [{'name':'circle' , 'diameter':8} , {'name':'sqaure' , 'side':9}]
fs = require('fs')
fs.writeFileSync('perimeter.txt',JSON.stringify(obj))

obj = fs.readFileSync('perimeter.txt' , 'utf-8')
obj = JSON.parse(obj)

if(obj[0]['name'] == 'circle'){
    fs.appendFileSync('perimeter.txt' , `\nPerimeter of ${obj[0]['name']} : ${3.14 * obj[0]['diameter']}`)
}
if(obj[1]['name'] == 'sqaure'){
    fs.appendFileSync('perimeter.txt' , `\nPerimeter of ${obj[1]['name']} : ${4 * obj[1]['side']}`)
}