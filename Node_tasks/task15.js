fs = require('fs')

fs.mkdir('tempReports' ,(err)=>{
    if(err) throw err
    console.log('Folder created')
    fs.writeFile('tempReports/daily.txt' , 'Report Start' , (err)=>{
        if(err) throw err
        console.log('File created')
        fs.appendFile('tempReports/daily.txt' , '\nEntry1 : Success , Entry2:Warning . Entry3:Success',(err)=>{
            if(err) throw err
            console.log('File appended')
            fs.readFile('tempReports/daily.txt','utf-8',(err,data)=>{
                if(err)  throw err
                count = data.split('Success').length - 1
                console.log(count)
                console.log('File readed')
                if(count>=3){
                    fs.unlink('tempReports/daily.txt' , (err)=>{
                        if(err) throw err
                        console.log('File deleted')

                        fs.rmdir('tempReports' , (err)=>{
                            if(err) throw err

                            console.log('Folder deleted')
                        })
                    })
                }
            })
        })

    })
})