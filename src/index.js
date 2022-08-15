const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger.
app.use(morgan('combined'));

// Templete Engine.
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources\\views'));

// Route init.
route(app);

// 127.0.0.1 - localhost.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})