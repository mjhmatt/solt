module.exports = function(app) {
  var sales = require('../controllers/salesController');


  /**
 * @api {get} /sales List all sales
 * @apiGroup Sales
 * @apiSuccess {Object[]} sales Sale's list
 * @apiSuccess {String} sales.price Sale's price
 * @apiSuccess {String} sales.city Sale's city
 * @apiSuccess {String} sales.state Sale's state
 * @apiSuccess {String} sales.latitude Sale's lat
 * @apiSuccess {String} sales.longitude Sales's lng
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "price": "1500",
 *      "city": "Leeds",
 *      "state": "Yorkshire"
 *      "latitude": "3.7778162",
 *      "longitude": "2-1.574333"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.route('/sales')
    .get(sales.list_all_sales);


};