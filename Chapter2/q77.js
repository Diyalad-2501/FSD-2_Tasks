const { error } = require('console')

fs = require('fs')

// Sync

// fs.mkdirSync('Hello')
// fs.writeFileSync('Hello/abc.txt','Hiiii')
// fs.appendFileSync('Hello/abc.txt','\nHelloooooo')
// d = fs.readFileSync('Hello/abc.txt','utf-8')
// console.log(d)
// fs.renameSync('Hello/abc.txt' , 'Hello/xyz.txt')
// fs.unlinkSync('Hello/xyz.txt')
// fs.rmdirSync('Hello')
// console.log('Operation done')

// Async

fs.mkdir('Hello',(err)=>{
    if(err) throw err
        fs.writeFile('Hello/abc.txt','Hiiii',(err)=>{
            if(err) throw err
                fs.appendFile('Hello/abc.txt','\nHelloooooo',(err)=>{
                    if(err) throw err
                         fs.readFile('Hello/abc.txt','utf-8',(err,data)=>{
                            if(err) throw err
                            console.log(data)
                                fs.rename('Hello/abc.txt' , 'Hello/xyz.txt',(err)=>{
                                    if(err) throw err
                                        fs.unlink('Hello/xyz.txt' , (err)=>{
                                            if(err) throw err
                                                fs.rmdir('Hello',(err)=>{
                                                    if(err) throw err
                                                    console.log('Operation done')
                                                })
                            
                                        })
                                })

                         })
                })

    })
})