/**
 * Compares two strings in lowercase
 *
 * @export
 * @param {string} value the value to be compared
 * @param {string} compareTo whom the value would be compared
 * @return {boolean} true if values are equal
 */
 function isEqualStringValue(value, compareTo) {
     if (typeof value !== 'string' || typeof compareTo !== 'string') {
         throw new TypeError('value and compareTo must be string');
     }
     return value.toLowerCase() === compareTo.toLowerCase();
 }

 function space(node) {
     if (node.data.host) {
         let host = node.data.host;
         return host.getLogicalSpace(node.m.width, node.m.height);
     }

     let measurements = node.children.map(child => space(child)),
         cut = node.children[0].data.cut;
     if (cut === 'h') {
         return {
             width: Math.max(...measurements.map(m => m.width)),
             height: measurements.reduce((carry, val) => carry + val.height, 0)
         };
     }
     return {
         width: measurements.reduce((carry, val) => carry + val.width, 0),
         height: Math.max(...measurements.map(m => m.height))
     };
 }

 function* counter(index) {
     while (index) {
         yield index++;
     }
 }


 export {
  isEqualStringValue,
  space,
  counter
 };
