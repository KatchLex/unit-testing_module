/* eslint-disable linebreak-style */
/**
 *
 * A class with methods for class validation.
 * @class NumbersValidator
 */
class NumbersValidator {
  /**
   * Creates an instance of NumbersValidator.
   * @memberof NumbersValidator
   */
  constructor() {
  };

  /**
   *
   *
   * @param {Number} number number to be checked
   * @return {Boolean} true if the number is even
   * @memberof NumbersValidator
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
    // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type 'Number', it is of type '${typeOfVariable}'`);
    } else {
      return number % 2 === 0;
    }
  };

  /**
   *
   *
   * @param {Array<Number>} arrayOfNumbers the numbers to go through
   * @return {Array<Number>} even numbers
   * @memberof NumbersValidator
   */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (this.Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === 'number')) {
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of 'Numbers'`);
    }
  }
}

module.exports = NumbersValidator;
