const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers/burger_controller.js');

const PORT = process.env.PORT || 4000;

const app = express()

app.use(express.static('public'));
app.use(express.static('views/images'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));