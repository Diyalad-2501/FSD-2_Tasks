var a = [{'Name':'Diya' , 'Age':19},{'Name':'Mihir' , 'Age':18},{'Name':'Jenish' , 'Age':20}]

for(i in a){
    for(j in a[i]){
        console.log(`${j}:${a[i][j]}`)
    }
}