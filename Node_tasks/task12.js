addr = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"

http = require('http')
url = require('url')
fs = require('fs')
q = url.parse(addr ,  true)

s = q.query.c1 +"!\n" + q.query.c3 +" "+ q.query.c2 +"\n" + q.hash
console.log(s)

fs.writeFileSync('exam.txt' , s)

http.createServer((req , res)=>{
    if(req.url == '/'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end(`<h1 style="color:red"> <pre>${s}</pre> </h1>`)
    }
    else{
        res.writeHead(404 , {'Content-Type':'text/html'})
        res.end('Page not found')
    }
}).listen(5000)