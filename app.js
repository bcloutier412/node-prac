const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/hello') {
        console.log('connecting')
        res.write('hello world')
        res.end();
    }
    if (req.url === '/iwantstuff') {
        res.write(JSON.stringify(['beans', 'meat', 'chicken']))
        res.end();
    }

});

server.listen(3003);

console.log('listening on port 3003');