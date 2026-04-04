const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (q.pathname === "/") {
        res.end("Welcome Admin");
    } else if (q.pathname === "/second") {
        res.end("<i>This is second page</i>");
    } else {
        res.end("Page not found");
    }
}).listen(3000);
