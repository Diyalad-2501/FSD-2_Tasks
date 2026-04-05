http = require('http')
url = require('url')

http.createServer((req , res)=>{
    if(req.url =='/'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end(`
    <a href="/"> Home Page </a><br>
    <a href="/about"> About Page </a> <br>
    <a href = "/contact"> Contact Us </a><br>
    <h1>Welcome to Home Page</h1>`)
    }
    else if(req.url == '/about'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.write('<a href="/"> Home Page </a> <a href="/about"> About Page </a> <a href = "/contact"> Contact Us </a>')
        res.end('<p style= "color:blue ; font-weight : bold;"> Welcome to LJ University </p>')
    }
    else if(req.url == '/contact'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.write('<a href="/"> Home Page </a> <a href="/about"> About Page </a> <a href = "/contact"> Contact Us </a>')
        res.end('<h1 style= " color:red; font-style : italic; ">Email:abc@ljinstitutes.edu.in </h1>')
    }
    else{
        res.writeHead(404 , 'text/html')
        res.end('Page not Found')
    }
}).listen(5008)