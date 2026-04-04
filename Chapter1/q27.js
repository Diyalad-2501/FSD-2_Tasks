function FirstAndLast(a){
    obj={}
    obj[a[0]] = a[a.length-1]
    return obj
}

console.log(FirstAndLast(['ABC', 'DEF', 'Employee', 'Manager']))
