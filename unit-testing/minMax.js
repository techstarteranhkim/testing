function min(a, b) {
  if (a > b) return b;
  else return a;
}

function max(a, b) {
  if (a > b) return a;
  else return b;
}

// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.min = min;
module.exports.max = max;
