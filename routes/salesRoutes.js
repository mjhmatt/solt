module.exports = function(app) {
  var sales = require('../controllers/salesController');


  // sales Routes
  app.route('/sales')
    .get(sales.list_all_sales);


};