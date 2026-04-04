http = require('http')
url = require('url')

http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end('<h1 style="color:red"> Home Page </h1>')
    }
    else if(req.url == '/about'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end('<h1 style="color:red"> About Page </h1>')
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('Page not found')
    }
}).listen(5000)