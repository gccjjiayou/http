const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Security-Policy': 'default-src http: https:'
    })
    res.end(html)
  } else {
    res.writeHead(200, {
      'Content-Type': 'application/javascript',
      'Content-Security-Policy': 'default-src http: https'
    })
    res.end("console.log('loaded script')")
  }

}).listen(8888)