const config = require('./config/main.json')

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')

process.on('uncaughtException', function (err) {
  console.error(err);
});

const app = express()


const port = process.env.PORT || config.port;

var rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}
app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: function () { return true } }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({info:"yo!"})
})


app.get('/getPlayers', db.getPlayers)
app.get('/getWonderpotByAgent/:agentId', db.getWonderpotByAgent)
app.put('/addWonderpotByAgent/:agentId', db.addWonderpotByAgent)


app.use(function(error, req, res, next) {
  // Will get here
  res.json({ message: error.message });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
