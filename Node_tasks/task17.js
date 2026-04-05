http = require('http')
url = require('url')
fs  = require('fs')

http.createServer((req , res)=>{
    if(req.url == '/'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end(
        `<head>
        <link rel="stylesheet" href="style.css"></link>
        </head>
        <body>
        <h1>Welcome to Home Page</h1>
        </body>`)
    }
    else if(req.url == '/style.css'){
        res.writeHead(200 , {'Content-Type':'text/css'})
        res.end(fs.readFileSync('style.css'))
    }
    else{
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end('Page not Found')
    }
}).listen(5000)