const expect =require('chai').expect;
const request =require('request');

const url = 'http://localhost:8080/book';
describe('Book', function () {

	it('Create a book', function (done) {
		request.post({
			'url':url
		},function(err,res,body){
			expect(res.statusCode).to.equal(200);
			done();
		})
	});

	it('Get detail a book', function (done) {
		request(url+'/589302896c1c58430ac4d95b',function(err,res,body){
			expect(res.statusCode).to.equal(200);
			done();
		})
	});

	it('Get list lasted book', function (done) {
		// do something
	})
});
