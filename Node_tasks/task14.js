e  = require('events')
ee = new e()

ee.on('registerUser' , (user , status)=>{
    console.log(`Welcome ${user}`)

    if(status == 'fresh'){
        ee.emit('email' , user)
    }
})

ee.on('email' , (user)=>{
    console.log(`Generated Email: ${user}@insti.co.in`)
})

ee.emit('registerUser' , 'Diya' , 'fresh')