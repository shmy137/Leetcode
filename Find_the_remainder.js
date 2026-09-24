var minOperations = function (nums, k) {
    sum = 0;
    rem = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        rem = sum % k
    }
    return rem

};

console.log(minOperations([3, 9, 7], 5))
