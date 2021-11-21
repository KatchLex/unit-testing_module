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
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
});
