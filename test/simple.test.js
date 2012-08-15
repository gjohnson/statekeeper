
var should = require('should')
  , states = require('../');


describe('plain object', function(){

  var simple = {};

  beforeEach(function(){
    states(simple);
  });

  it('should add a _state property', function(){
    simple.should.have.property('_state', null);
  });

  it('should switch states', function(){
    simple.state('happy');
    simple.state().should.equal('happy');
    simple.happyAt.should.be.ok;

    simple.state('sad');
    simple.state().should.equal('sad');
    simple.sadAt.should.be.ok;
  });

});