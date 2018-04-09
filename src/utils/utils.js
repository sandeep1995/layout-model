/**
 * Compares two strings in lowercase
 *
 * @export
 * @param {string} value the value to be compared
 * @param {string} compareTo whom the value would be compared
 * @return {boolean} true if values are equal
 */
 const isEqualStringValue = (value, compareTo) => {
     if (typeof value !== 'string' || typeof compareTo !== 'string') {
         throw new TypeError('value and compareTo must be string');
     }
     return value.toLowerCase() === compareTo.toLowerCase();
 };

 export {
  isEqualStringValue
 };
