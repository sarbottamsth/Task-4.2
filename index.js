var express = require('express')

var app = express()
var port = process.env.port || 3000;


app.use(express.static('public_html'))

app.listen(port, function () {
  console.log(`Web server running at: http://localhost:${port}`)
})
