http = require('http')

http.createServer((req,res)=>{
    if(req.url == '/api'){
        data =  {
            name: "Rahul",
            course: "NodeJS",
            status: "Enrolled"
        }
    res.writeHead(200 , {'Content-Type':'application/json'})
    res.end(JSON.stringify(data))
    }

    else{
        res.writeHead(404 , {'Content-Type':'text/html'})
        res.end('Page not Found')
    }
}).listen(5000)