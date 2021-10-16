const express = require('express');
const path = require('path');
const app = express();
const port = 6969;
const handlebars  = require('express-handlebars');
const morgan = require('morgan');

// server log
app.use(morgan('combined'))

// static path
app.use(express.static(path.join(__dirname, 'public')))

// using express handlebars
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => res.render('home'));
app.get('/infor', (req, res) => res.render('infor'));
app.get('/search', (req, res) => {
  res.render('search');
  // console.log(req.query);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})