// Write a Node.Js program for following action
// 1. Write a file having five random elements separated by white space in .txt file.
// 2. append sorted array of these 5 elements in same file along with message : “Sorted 
// array:” in new line.
// 3. Find maximum number from that and append with message “maximum number=” in 
// same file. 

fs = require('fs')

fs.writeFileSync('array.txt','0 -1 5 67 3')
r = fs.readFileSync('array.txt','utf-8')
r = r.split(' ')

console.log(r)
r = r.sort((a,b)=>a - b )
console.log(r)

fs.appendFileSync('array.txt' , `\nSorted array: ${JSON.stringify(r)}`)
fs.appendFileSync('array.txt' , `\nMaximum number: ${(r[r.length-1])}`)