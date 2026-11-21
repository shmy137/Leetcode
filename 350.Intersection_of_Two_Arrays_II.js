var intersect = function (nums1, nums2) {
let result = [];

for(let num of nums1){
    let index = nums2.indexOf(num)

    if(index !== -1){
        result.push(num)
        nums2.splice(index,1)
    }
}
return result
}