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
  if(req.url === '/script.js') {
    res.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=200'
    })
    res.end('console.log("script loaded third")')
  }
})
server.listen(8080)
console.log('server listening on 8080')