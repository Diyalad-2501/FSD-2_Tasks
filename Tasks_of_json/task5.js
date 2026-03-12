var x =[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
var y ={}
for(i in x){
    var arr = x[i]
    y[arr[0]] = arr[1]
}

console.log(y)