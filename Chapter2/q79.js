e = require('events')
ee = new e()

let l1 = function listener1(){
    console.log('I am l1')
}

let l2 = function listener1(){
    console.log('I am l2')
}

ee.addListener('Conn' , l1)
ee.on('Conn' , l2)
// once() it will emit one time only
ee.emit('Conn')

d =  ee.listenerCount('Conn')

console.log(d)
ee.emit('Conn')

ee.removeListener('Conn' , l1)
d = ee.listenerCount('Conn') 

console.log(d)
ee.emit('Conn')