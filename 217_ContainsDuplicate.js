
// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

var containsDuplicate = function(nums) {
    count = {

    }
    for(let x of nums){
        count[x] = (count[x] || 0)+1
    }
    for(let x in count){
        if(count[x] >= 2){
            return true;
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3]))