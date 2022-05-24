const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;


/*app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});*/

app.use('/perfil01',express.static(__dirname + '/assets'));

app.use('/logintoken',express.static(__dirname + '/loginuser'));

app.use(express.static(__dirname + '/login'));

app.listen(port);
console.log('Server started at http://localhost:' + port);
