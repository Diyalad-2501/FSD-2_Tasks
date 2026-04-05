e = require('events')
ee = new e()

ee.on('calculate' , ()=>{
    marks = [22,18,20,25,24]
    total=0
    for(i of marks){
        total+=i
    }
    console.log(`Total marks: ${total}`)
    ee.emit('percentage' , total)
})

ee.on('percentage' , (total)=>{
    t = 5 * 25
    p = (total/t)*100

    console.log(`Percenatge : ${p}%`)
})
ee.emit('calculate')