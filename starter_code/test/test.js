var expect = require('chai').expect;
var ex = require('./ex.js').load('./solution.js');

describe('Call 1st Function', function() {
	it('Match Response Message', function() {
	    expect(ex.first()).to.equal('Success: 1st function works!');
	});
});

describe('Call 2nd Function', function() {
	it('Match Response Message', function() {
	    expect(ex.second()).to.equal('Success: 2nd function works!');
	});
});

describe('Call 3rd Function', function() {
	it('Match Response Message', function() {
	    expect(ex.third()).to.equal('Success: 3rd function works!');
	});
});