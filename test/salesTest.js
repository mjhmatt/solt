var Sales = require('../controllers/salesController');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /GET route
  */
  describe('/GET sales', () => {
      it('it should GET all the sales', (done) => {
        chai.request(server)
            .get('/sales')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
              done();
            });
      });
  });

/*
  * Test the /POST route
  */
  describe('/POST sales', () => {
      it('it should return a 404', (done) => {
        chai.request(server)
            .post('/sales')
            .end((err, res) => {
                res.should.have.status(404);
              done();
            });
      });
  });