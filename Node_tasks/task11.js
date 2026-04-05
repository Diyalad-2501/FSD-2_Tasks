http = require('http')
url = require('url')
fs = require('fs')

addr = "http://localhost:5051/login.html"
q = url.parse(addr , true)
http.createServer((req , res)=>{
    if(req.url == '/'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end('<h1 style="color : blue; font-size : 32px" >Welcome to login page</h1>')
    }
    else if(req.url == '/login'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        r = fs.readFileSync("."+q.pathname)
        res.end(r)
    }
    else if(req.url == '/gallery'){
        res.writeHead(200 , {'Content-Type':'image/png'})
        res.end(fs.readFileSync('hello.png'))
    }
    else{
        res.writeHead(404 , 'text/html')
        res.end('Page not Found')
    }
}).listen(5002)