const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 6060;

app.use('/static', express.static('public'));

app.use('/stati', express.static('assets'))


app.use('/all',express.static(__dirname + '/assets/all'));



app.use('/got',express.static(__dirname + '/assets/got'));

app.use('/temp1',express.static(__dirname + '/gotss/temps1/temp1.html'  ));
app.use('/temp2',express.static(__dirname + '/gotss/temps2'));
app.use('/temp3',express.static(__dirname + '/gotss/temps3'));
app.use('/temp4',express.static(__dirname + '/gotss/temps4'));
app.use('/temp5',express.static(__dirname + '/gotss/temps5'));
app.use('/temp6',express.static(__dirname + '/gotss/temps6'));
app.use('/temp7',express.static(__dirname + '/gotss/temps7'));
app.use('/temp8',express.static(__dirname + '/gotss/temps8'));








app.use('/perfil01',express.static(__dirname + '/assets'));





app.use('/logintoken',express.static(__dirname + '/loginuser'));




app.use(express.static(__dirname + '/login'));

app.listen(port);
console.log('Server started at http://localhost:' + port);
