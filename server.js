const http = require('http')
const fs = require('fs')

var server = http.createServer(function (req, res) {
  console.log('request come', req.url)
  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html)
  }
  if (req.url === '/script.js') {
    const ifNoneMatch = req.headers['if-none-match']
    if (ifNoneMatch === 'signature') {
      res.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2',
        'Last-Modified': '123',
        'Etag': 'signature'
      })
      res.end('123')
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Cotrol': 'max-age=2',
        'Last-Modified': '123',
        'Etag': 'signature'
      })
      res.end('console.log("script loaded")')
    }
  }
})
server.listen(8080)
console.log('server listening on 8080')