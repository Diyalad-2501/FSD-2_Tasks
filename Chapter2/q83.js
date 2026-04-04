e = require('events')
ee = new e()

ee.on('Calculate' , (m)=>{
    t=0
    for(i in m){
        t+=m[i]
    }
    console.log(`Total marks of 5 subjects ${t}`)

    ee.emit('Percentage',t)
})

ee.on('Percentage' , (t)=>{
    console.log(`Percenatge :${t*100/ 125}`)
})

ee.emit('Calculate' , [23,24,25,24,23])