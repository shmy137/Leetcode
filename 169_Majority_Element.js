var majorityElement = function (nums) {
    count = {

    }
    for (let x of nums) {
        count[x] = (count[x] || 0) + 1
    }
    // console.log(count)
    highest = 0;
    let mostoccuring;

    for (let x in count) {
        if (count[x] > highest) {
            highest = count[x]
            mostoccuring = x
        }
    }
    return mostoccuring

};
console.log(majorityElement([3,2,3]))