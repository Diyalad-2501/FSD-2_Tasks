http = require('http')
fs = require('fs')
url = require('url')

addr = "http://localhost:8000/default.html?year=1900&month=march#warupdate"
    q = url.parse(addr , true)
    d = q.query
    console.log(d)

http.createServer((req,res)=>{
    res.writeHead(200 , {'Content-Type':'application/json'})
    res.end(JSON.stringify(d))
}).listen(5000)