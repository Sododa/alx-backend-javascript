/**
 * Performs a mathematical operation on two rounded numbers
 * @param {string} type - The type of operation to perform (SUM, SUBTRACT,
 * or DIVIDE)
 * @param {number} a - The first number to be rounded and used in the
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;

    default:
      throw new Error(`Invalid type: ${type}`);
  }
}

module.exports = calculateNumber;
