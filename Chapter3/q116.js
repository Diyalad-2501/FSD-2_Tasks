d = {name :'Rahul' , course :'Node.js' , status : 'Entrolled'}

http = require('http')
url = require('url')

http.createServer((req,res)=>{
    if(req.url =='/'){
        res.writeHead(200 , {'Content-Type':'text/plain'})
        res.end('Welcome Home')
    }
    else if(req.url == '/api'){
        res.writeHead(200 , {'Content-Type':'application/json'})
        res.end(JSON.stringify(d))
    }
    else{
        res.writeHead(200 , {'Content-Type':'text/plain'})
        res.end('Page Not Found')
    }
}).listen(3006)