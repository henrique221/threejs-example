const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const swig = require('swig');
const router = express.Router();

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', path.join(__dirname, '/test/'));
app.use('/static', express.static(path.join(__dirname, '../public/')));

router.get(
    'index',
    (req, res, next) => res.render("index.html")
);

app.use('/', router);
