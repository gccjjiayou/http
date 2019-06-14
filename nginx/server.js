const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer((req, res) => {
  console.log('req come', req.headers.host)
  if (req.url === '/') {
    const html = fs.readFileSync('test.html')
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.end(html)
  }

}).listen(8888)
console.log('server listening on 8888')