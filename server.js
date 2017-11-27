const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const controller = require('./controllers/burgers_controller');
const PORT = process.env.PORT || 3000;

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', controller);

app.listen(PORT);

console.log(`Connection started on port: ${PORT}`);