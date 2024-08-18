// Найти два числа из массива, чтобы их сумма была равна target

function sumFromArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return true;
        }

        if (sum > target) {
            right -= 1;
        } else {
            left += 1;
        }
    }

    return false
}


console.log(sumFromArray([1,2,4,5,6,7], 5)) // true
console.log(sumFromArray([1,2,4,5,6,7], 30)) // false