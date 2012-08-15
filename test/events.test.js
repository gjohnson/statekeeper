
var should = require('should')
  , states = require('../')
  , EE = require('events').EventEmitter;


describe('emitter', function(){

  var obj = new EE();

  beforeEach(function(){
    states(obj);
  });

  it('should emit an event w/ no args', function(done){
    obj.on('ready', function(){
      obj.state().should.equal('ready');
      done();
    });
    obj.state('ready');
  });

  it('should emit an event w/ args', function(done){
    obj.on('foo', function(bar){
      obj.state().should.equal('foo');
      bar.should.equal('hey bar');
      done();
    });
    obj.state('foo', 'hey bar');
  });

});