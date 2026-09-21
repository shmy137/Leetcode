
var addBinary = function (a, b) {
    let result = BigInt("0b" + a) + BigInt("0b" + b);
    return result.toString(2);
};
