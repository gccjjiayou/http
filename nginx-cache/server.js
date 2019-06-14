const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

http.createServer((req, res) => {
  console.log('request come', req.headers.host)
  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html)
  }
  if(req.url === '/data') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age=2, s-maxage=20'
    })
    wait(2).then(() => {
      res.end('success')
    })
  }
}).listen(8888)