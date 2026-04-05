// write a node js Asynchronous program to perform CRUD operation of file management 
// which should perform below task in sequence. [Callback Hell]
// 1. Create folder named "hello"
// 2. create a file in it named a.txt and add some data in it. 
// 3.add more data at last in file 
// 4. read data without getting buffer at first
// 5. rename the file 
// 6. delete both the file and folder.

fs  = require('fs')

fs.mkdir('hello',(err)=>{
    if(err) throw err
    fs.writeFile('hello/a.txt' ,'HIIIIIIIIII' , (err)=>{
        if(err) throw err
        fs.appendFile('hello/a.txt' , '\nHelloooooooooo' , (err)=>{
            if(err) throw err
            fs.readFile('hello/a.txt','utf-8',(err,data)=>{
                if(err) throw err
                console.log(data)
                fs.rename('hello/a.txt' , 'hello/b.txt' , (err)=>{
                    if(err) throw err
                    fs.unlink('hello/b.txt' , (err)=>{
                        if(err) throw err
                        fs.rmdir('hello' ,(err)=>{
                            if(err) throw err
                            console.log('Task completed')
                        })
                    })
                })
            })
        })
    })
})

