fs =  require('fs')
e = require('events')
ee = new e()
http = require('http')

ee.on('Create_file' ,()=>{
    fs.writeFile('abc.txt' , 'Hiiiiiii',(err)=>{
        if(err) throw err
        ee.emit('Update')
    })
})

ee.on('Update', ()=>{
    fs.appendFile('abc.txt','\nHeloooooo',(err)=>{
        if(err) throw err
        console.log('Data Appended Successfully')
        ee.emit('Read')
    })
})

ee.on('Read' ,()=>{
   fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    
    http.createServer((req,res)=>{
        res.writeHead(200 , {'Content-Type':'text/plain'})
        res.end(data)
    }).listen(5000)
    console.log('All the operations perfomed successfully')
   })
})

ee.emit('Create_file')
// Sync

// ee.on('Create_dir',()=>{
//     fs.mkdirSync('Test')
//     ee.emit('Create_file')
// })

// ee.on('Create_file' ,()=>{
//     fs.writeFileSync('Test/abc.txt' , 'Hiiiiiii')

//     ee.emit('Update')
// })

// ee.on('Update', ()=>{
//     fs.appendFileSync('Test/abc.txt','\nHeloooooo')
//     console.log('Data Appended Successfully')
//     ee.emit('Read')
// })

// ee.on('Read' ,()=>{
//    d =  fs.readFileSync('Test/abc.txt','utf-8')
//    console.log(d)

//    ee.emit('Copy')
// })

// ee.on('Copy' , ()=>{
//     fs.copyFileSync('Test/abc.txt' , 'Test/pqr.txt')
//     ee.emit('Delete')
// })

// ee.on('Delete',()=>{
//     fs.unlinkSync('Test/abc.txt')
//     console.log('All operations performed successfully')
// })

// ee.emit('Create_dir')


// -------------------------------------------------------------------------------------------------------
// Asynchornous
// ee.on('Create_dir',()=>{
//     fs.mkdir('Test' , (err)=>{
//         if(err) throw err
//         ee.emit('Create_file')
//     })
// })

// ee.on('Create_file' ,()=>{
//     fs.writeFile('Test/abc.txt' , 'Hiiiiiii',(err)=>{
//         if(err) throw err
//         ee.emit('Update')
//     })
// })

// ee.on('Update', ()=>{
//     fs.appendFile('Test/abc.txt','\nHeloooooo',(err)=>{
//         if(err) throw err
//         console.log('Data Appended Successfully')
//         ee.emit('Read')
//     })
// })

// ee.on('Read' ,()=>{
//    fs.readFile('Test/abc.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
//     ee.emit('Copy')
//    })
// })

// ee.on('Copy' , ()=>{
//     fs.copyFile('Test/abc.txt' , 'Test/pqr.txt',(err)=>{
//         if(err) throw err
//         ee.emit('Delete')
//     })
// })

// ee.on('Delete',()=>{
//     fs.unlink('Test/abc.txt',(err)=>{
//         if(err) throw err
//         console.log('All operations performed successfully')
//     })
// })

// ee.emit('Create_dir')