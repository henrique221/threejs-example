const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('html', swig.renderFile);

router.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});

app.use('/', router);
