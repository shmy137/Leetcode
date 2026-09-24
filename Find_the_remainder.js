var minOperations = function (nums, k) {
  sum = 0;
  rem = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    rem = sum % k;
  }
  return rem;
};

console.log(minOperations([3, 9, 7], 5));

//using array iteration method
var minOperations = function (nums, k) {
  let sum = nums.reduce((total, sum) => total + sum, 0);

  return sum % 5;
};

console.log(minOperations([3, 9, 7], 5));
