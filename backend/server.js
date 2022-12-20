const express = require('express');
const app = express();
const path = require('path');


app.listen(8080, function(){
    console.log('Listening on port 8080')
});

app.use(express.json());
var cors = require('cors');
app.use(cors());


app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/build/index.html'))
})


app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/build/index.html'))
})