let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let posts = require('./routes/posts')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
/* route default: home*/
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})
app.get('/404', (req, res) => {
  res.writeHead(404)
  res.write('Token not found')
  return res.end()
})

/* middle ware router */
app.use('/posts', posts)

app.listen(8001, function (req, res) {
  console.log('Server litening...')
})
