// Write a function 'ArrayToObject' which takes in an array of arrays, and returns an object 
// with each pair of elements in the array as a key-value pair and store the result in one 
// arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country : ' India ', State : ' Gujarat ', City : ‘Ahmedabad’ }

arr =[['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']]

function ArrayToObject(arr){
obj ={}

obj[arr[0][0]] = arr[0][1]
obj[arr[1][0]] = arr[1][1]
obj[arr[2][0]] = arr[2][1]

return obj
}
obj = ArrayToObject(arr)
fs = require('fs')

fs.writeFileSync('arraytoobject.txt' , JSON.stringify(obj))
