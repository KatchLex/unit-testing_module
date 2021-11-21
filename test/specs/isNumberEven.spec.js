const NumbersValidator = require('../../app/numbers_validator');
const {expect} = require('chai');

describe(`isNumberEven positive`, function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`should return true if the number is even`, function() {
    expect(validator.isNumberEven(8)).to.be.equal(true);
  });
  it(`should return false if the number is odd`, function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
  it(`chai test`, function() {
    expect(['a', 'apple', 'b', 17]).to.be.have.lengthOf(4);
  });
});
