http = require('http')
url = require('url')

http.createServer((req,res)=>{
    if(req.url == '/'){
        const data = {'name':'Diya' , 'age':19}
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.end(JSON.stringify(data))
    }
    else if(req.url == '/about'){
        res.writeHead(200,{'Content-Head':'text/html'})
        res.end(`
            <style>
                body{
                    background-color : cyan;
                    text-align : center;
                }
                    p{
                    color : red;}
            </style>

            <body>
            <p id="demo">Hello From class</p></body>
            `)
    }
    else{
        res.writeHead(404 , 'text/html')
        res.end('Page not Found')
    }
}).listen(6008)