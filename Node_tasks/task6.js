// Write node js script to perform tasks as asked.
// 1) Create one page with two links (Home(/) and about(/about)). 
// 2) Both pages must contain HTML type content and add required content on both the 
// pages.
// 3) If user add any other URL path, then he/she will be redirected to page and plain 
// message will be displayed of “Page not found”.

http = require('http')
url = require('url')


http.createServer((req , res )=>{
    if(req.url=="/")
    {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> Home page </h1><div><ul><li><a href='/'>Home</a></li><li><a href='/about'>About</a></li></ul>")
        res.end()
    }
    else if(req.url=="/about"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> About page </h1><div><ul><li><a href='/'>Home</a></li><li><a href='/about'>About</a></li></ul>")
        res.end();
    }
    else {  
        res.writeHead(404,{"content-type":"text/plain"})
        res.write("Page not found")
        res.end("\nPlease check the url")
    }
}).listen(6080)