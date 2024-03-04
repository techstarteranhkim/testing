function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

// Im Browser: export default sum
module.exports.sum = sum;
module.exports.divide = divide;
