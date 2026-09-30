var singleNumber = function (nums) {

    count = {

    }
    for (let x of nums) {
        count[x] = (count[x] || 0) + 1
    }
    for (let x in count) {
        if (count[x] == 1) {
            return Number(x)
        }
    }

};
console.log(singleNumber([2,2,1]))