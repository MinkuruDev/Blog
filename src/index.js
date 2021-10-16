const express = require('express');
const path = require('path');
const app = express();
const port = 6969;
const handlebars  = require('express-handlebars');
const morgan = require('morgan');
const { url } = require('inspector');
const route = require('./routes');

// server log
// app.use(morgan('combined'))

// static path
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// using express handlebars
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// init routes
route(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})