http = require('http')
url = require('url')
fs = require('fs')

abbr = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"

q = url.parse(abbr , true)
console.log(q)
c1 = q.query.c1
c2 = q.query.c2
c3 = q.query.c3

h = q.hash

s = c1+'!\n'+c3+" "+c2+'\n'+h

fs.writeFileSync(`.${q.pathname}` , s)

http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200 , {'Content-Type':'text/plain'})
        d = fs.readFileSync(`.${q.pathname}` , 'utf-8')
        res.end(d)
    }
    else{
        res.writeHead(404 , {'Contant-Type':'text/plain'})
        res.write('Page not found')
        res.end()
    }
}).listen(6008)