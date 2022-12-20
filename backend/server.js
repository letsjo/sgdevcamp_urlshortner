const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect('mongodb+srv://gusdh2:1q2w3e4r!!@cluster0.hrpfadx.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(error => console.error(error));

// Static File Service
app.use(express.static('public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTERS
app.use('/urls', require('./routes/urls'));

app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) =>  {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('*', (req, res) =>  {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(8080, () =>  {
  console.log('Listening on port 8080');
});
