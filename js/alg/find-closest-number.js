const prices = [100_000, 150_000, 200_000, 250_000, 350_000, 375_000, 500_000, 550_000]

console.log('0', findClosestNumber([100_000, 125_000, 150_000], 115_000)) // 125_000
console.log('1', findClosestNumber(prices, 443_555)) // 500_000
console.log('2', findClosestNumber(prices, -1_000_000)) // 100_000
console.log('3', findClosestNumber(prices, 125_000)) // 150_000
console.log('4', findClosestNumber(prices, 124_999)) // 100_000
console.log('5', findClosestNumber(prices, 1_000_000)) // 550_000

// your solution

function findClosestNumber(arr, target = 0) {
    let left = 0;
    let right = arr.length - 1;
    let closestNumber = arr[0];
    let minDiff = Math.abs(target - closestNumber);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return arr[mid];
        }

        if ((arr[mid] - target) < minDiff) {
            closestNumber = arr[mid];
            minDiff = arr[mid] - target;
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }

    return closestNumber;
}
