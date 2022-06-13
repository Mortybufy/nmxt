const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 6060;

app.use('/static', express.static('public'));




app.use('/all',express.static(__dirname + '/assets/all'));



app.use('/got',express.static(__dirname + '/assets/got'));
server.get("/temp1", (req, res)=>{
  res.sendFile("/app/assets/got/temps1/temp1.html")
})
app.use('/tem1',express.static(__dirname + '/assets/got/temps1'));
app.use('/temp2',express.static(__dirname + '/assets/got/temps2'));
app.use('/temp3',express.static(__dirname + '/assets/got/temps3'));
app.use('/temp4',express.static(__dirname + '/assets/got/temps4'));
app.use('/temp5',express.static(__dirname + '/assets/got/temps5'));
app.use('/temp6',express.static(__dirname + '/assets/got/temps6'));
app.use('/temp7',express.static(__dirname + '/assets/got/temps7'));
app.use('/temp8',express.static(__dirname + '/assets/got/temps8'));








app.use('/perfil01',express.static(__dirname + '/assets'));





app.use('/logintoken',express.static(__dirname + '/loginuser'));




app.use(express.static(__dirname + '/login'));

app.listen(port);
console.log('Server started at http://localhost:' + port);
