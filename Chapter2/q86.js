e = require('events')
ee = new e()

ee.on('welcome',()=>{
    console.log('Welcome to Node.js')
    ee.emit('time')
})

ee.on('time',()=>{
    console.log(new Date().toLocaleString())
    ee.emit('bye')
})

ee.on('bye',()=>{
    console.log('Goodbye!')
})

ee.emit('welcome')