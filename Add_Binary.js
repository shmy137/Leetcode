var addBinary = function (a, b) {
  let result = BigInt("0b" + a) + BigInt("0b" + b);
  return result.toString(2);
};

var addBinary = function (a, b) {
  // let result = BigInt("0b" + a) + BigInt("0b" + b);
  let result = parseInt(a, 2) + parseInt(b, 2);
  return result.toString(2);
};
