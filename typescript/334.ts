

function increasingTriplet(nums: number[]): boolean {
    let p1 = Number.MAX_SAFE_INTEGER, p2 = Number.MAX_SAFE_INTEGER;
    for (const num of nums) {
        if(num <= p1) p1 = num;
        else if (num <= p2) p2 = num;
        else return true;
    }
    return false
};


// console.log(increasingTriplet([1,2,3,4,5]))
// console.log(increasingTriplet([5,4,3,2,1]))
// console.log(increasingTriplet([2,1,5,0,4,6]))
// console.log(increasingTriplet([1,0,0,1]))
console.log(increasingTriplet([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]))
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]))
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))
console.log(increasingTriplet([1]))
console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]))
console.log(increasingTriplet([1, 2, 1, 3]))