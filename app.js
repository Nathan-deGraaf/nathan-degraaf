const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');
require('dotenv').config();

const app = express();

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname + '/assets')));

app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.render('index', {
  });
});


app.get('/:page', (req, res) => {
  res.render(req.params.page, {
  });
});

app.use((err, req, res, next) => {
  return res.status(500).render('error');
});
app.use((err, req, res, next) => {
  return res.status(404).render('error');
});

const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


