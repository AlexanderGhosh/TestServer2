const http = require('http');
const express = require('express');
const config = require('./config');
const {getAll, getID} = require('./database/querys');
const startDB = require('./database/mongo').startDatabase;
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const index = require('./view/index.html');
// const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');

var app = express();
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

const HTTP_PORT = config.httpPort;

app.get('/', async (req, res) => {
  res.send(index);
});
app.get('/all', async (req, res) => {
  let t = await getAll();
  //t = [{name: 'Alex'}, {name: 'John'}];
  console.log(t);
  res.send(t);
});
app.get('/:id', async (req, res) => {
  console.log(req.params.id);//60539b4b87756631bea44ff8
  let t = await getID(req.params.id);
  console.log(t);
  res.send(t);
});

var httpServer = http.createServer(app, function(){
  console.log('HTTP Server created');
});



httpServer.listen(HTTP_PORT, () => {
  startDB().then(() => {
    console.log('--------------Database Connection Created--------------');
  });
  console.log('HTTP listening on %s', HTTP_PORT);
});
