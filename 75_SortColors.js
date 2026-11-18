
var sortColors = function (nums) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums
};