var merge = function (nums1, m, nums2, n) {
    newnum1 = nums1.slice(0, m)
    let nums = [...newnum1, ...nums2]
    nums.sort((a, b) => a - b)

    for (i = 0; i < nums.length; i++) {
        nums1[i] = nums[i]
    }
    return nums1
};