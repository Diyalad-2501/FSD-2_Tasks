http = require('http')
url = require('url')

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200 , {'Content-type':'text/html'})
        res.write(`<html>
        <body>
         <div>
        <a href="/home">Home</a>
       <a href="/about">About</a>    
        <a href="/contact">Contact</a>
        </div>
             </body>
    </html>`)
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('This is About Page')
        res.end()
    }
    else if(req.url=='/home'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('This is Home Page')
        res.end()
    }
    else if(req.url=='/contact')
    {
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('This is Contact Page')
        res.end()
    }
    else{
        res.write('Page not Found')
        res.end()
    }
}).listen(5000)
