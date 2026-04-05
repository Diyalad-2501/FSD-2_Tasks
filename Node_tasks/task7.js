// Create http webpage and display message “Welcome to Priyen sir's class” in h1 tag after 
// 10 seconds.

http = require('http')
url = require('url')

http.createServer((req , res)=>{
    res.writeHead(200 , {"Content-Type":'text/html'})
    res.write(`
        <p id="demo"></p>
        <script>
        setTimeout(()=>{
            document.getElementById('demo').innerHTML ="<h2 style='color:red'> Welcome to Priyen's class </h2>"
            },1000)
            </script>`)
    res.end()
}).listen(6080)