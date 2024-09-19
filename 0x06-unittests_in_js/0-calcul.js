/**
 * Calculates the sum of two rounded numbers
 * @param {number} a - The first number
 */
function calculateNumber(a, b) {
  // Round the first nearest integer
  const roundedA = Math.round(a);
  // Round the second nearest integer
  const roundedB = Math.round(b);
  // Add the two and return the result
  return roundedA + roundedB;
}

// Export the calculateNumber other files
module.exports = calculateNumber;
