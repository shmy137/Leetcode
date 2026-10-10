var missingNumber = function (nums) {

    numss = []
    for (i = 0; i <= nums.length; i++) {
        numss.push(i)
    }
    for (let x of numss) {
        if (!nums.includes(x)) {
            return x
        }
    }
}

console.log(missingNumber([3, 0, 1]))
// missingNumber([3, 0, 1])