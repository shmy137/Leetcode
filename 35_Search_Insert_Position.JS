var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1
    let mid = Math.floor((left + right) / 2)
    console.log("hello")
    if (nums[mid] == target) {
        console.log("hello")
        return mid;
    }
    if (nums[mid] < target) {
        // console.log("hello")
        left = mid + 1;
    }
    else {

        right = mid - 1;
    }
    return left;
};
console.log(searchInsert([1, 3, 5, 6], 132))