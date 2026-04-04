fs = require('fs')

fs.writeFile('help.txt' , 'You are creating file' , (err)=>{
    if(err) throw err
    fs.appendFile('help.txt' , '\nYou are appending data' , (err)=>{
        if(err) throw err
        fs.readFile('help.txt','utf-8',(err,data)=>{
            if(err) throw err
            console.log(data)
            console.log('Thanks for using my program')
        })
    })
})

