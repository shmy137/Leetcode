
var intersection = function (nums1, nums2) {
    let result = []
    for (i = 0; i < nums1.length; i++) {
        for (j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
                result.push(nums1[i])
                // break;
            }
        }
    }
    return result
};