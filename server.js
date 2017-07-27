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

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port);

console.log('API running on port ' + port);

module.exports = app; // for testing
