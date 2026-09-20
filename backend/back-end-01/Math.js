function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
module.exports = { add, sub };

// this is not a good aproach because it overites the first method
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
