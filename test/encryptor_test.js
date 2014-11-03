var expect = require('chai').expect;
describe('Encryptor', function(){

  var encryptor = require('../js/encryptor')

  it('Has an encrypt function', function(){
    expect(encryptor.encrypt).to.equal('function')
  });

});
