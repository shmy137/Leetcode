var averageValue = function (nums) {
    arr = []
    for (let x of nums) {
        if (x % 3 == 0 && x % 2 == 0) {
            arr.push(x)
        }
    }
    result = 0;
    for (let x of arr) {
        result += x;
    }
    result = result / arr.length 

    return Math.floor(result) || 0
};
// console.log(averageValue([1, 3, 6, 10, 12, 15]))
console.log(averageValue([1,2,4,7,10]))
// console.log(averageValue([43, 9, 75, 76, 25, 96, 46, 85, 19, 29, 88, 2, 5, 24, 60, 26, 76, 24, 96, 82, 97, 97, 72, 35, 21, 77, 82, 30, 94, 55, 76, 94, 51]))

var averageValue = function (nums) {
    let result = 0;
    let count = 0;
    for (let x of nums) {
        if (x % 3 == 0 && x % 2 == 0) {
            result += x;
            count++;
        }
    }
    if (count === 0) {
        return 0
    }
    return Math.floor(result / count)
};