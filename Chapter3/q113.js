http = require('http')
url = require('url')
fs = require('fs')
abbr = 'http://localhost:5000/login'
q = url.parse(abbr)
console.log(q.pathname)

http.createServer((req,res)=>{

    if(req.url == '/'){
        res.writeHead(200 , {'Conten-Type':'text/html'})
        d=fs.readFileSync('home.html' ,'utf-8')
        res.end(d)
    }
    else if(req.url == '/login'){
         res.writeHead(200 , {'Conten-Type':'text/html'})
         d = fs.readFileSync(`.${q.pathname}.html` , 'utf-8')
         res.end(d)
    }
    else if(req.url == '/gallery'){
        res.writeHead(200 , {'Content-Type':'image/jpg'})
        d = fs.readFileSync('hello.jpg')
        res.end(d)
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.write('Page Not Found')
        res.end()
    }

}).listen(5000)