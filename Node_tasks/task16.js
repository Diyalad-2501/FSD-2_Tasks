http = require('http')

quantity = 100
buy = 50
sell = 60

investment = quantity * buy
returnAmount = quantity * sell
result = returnAmount - investment

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let message = ''
    let color = ''
    if (result > 0) {
        message = `You made a profit of Rs.${result}`
        color = 'green'
    }
    else if (result < 0) {
        message = `You incurred a loss of Rs.${Math.abs(result)}`
        color = 'red'
    } 
    else {
        message = 'No profit, no loss.'
        color = 'black'
    }
    res.write(`<h1 style="color: ${color};">${message}</h1>`)
    res.end()
}).listen(5000)
