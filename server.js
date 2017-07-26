var express = require('express');
var app = express();
app.use(express.static('public'));

var router = express.Router(); // get an instance of the express Router


var port = process.env.PORT || 8080;        // set port

var router = require('./routes/salesRoutes');
router(app);

/*
* Middleware if link isn't found or bad request
*/
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.use(function(req, res) {
  res.status(500).send({url: req.originalUrl + ' bad request'})
});

app.listen(port);

console.log('API running on port ' + port);
