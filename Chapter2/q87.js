e  = require('events')
ee = new e()

ee.on('start' ,()=>{
    console.log('Start')
    ee.emit('process')
})

ee.on('process',()=>{
    console.log('in process')
    ee.emit('end')
})

ee.on('end',()=>{
    console.log('End')
})

ee.emit('start')