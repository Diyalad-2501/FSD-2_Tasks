Input=[['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']]
output={}
for(i in Input){
   output[Input[i][0]] = Input[i][1]
}

console.log(output)