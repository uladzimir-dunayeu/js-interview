// Array.prototype.customMap = function(callback) {
//     const arr = [];
//
//     for (let i=0; i<this.length; i++) {
//         if (this.hasOwnProperty(i)) {
//             arr.push(callback.call(null, this[i]));
//         }
//     }
//
//     return arr;
// }
//
// console.log([1,2,3,4].customMap((el) => el*2));
// console.log([1,2,3,4].customMap((el) => el*3));

// Array.prototype.customReduce = function(callback, initialValue) {
//     let acc = initialValue !== undefined ? initialValue : this[0];
//     const startIndex = initialValue !== undefined ? 0 : 1;
//
//     for (let i = startIndex; i < this.length; i++) {
//         if (this.hasOwnProperty(i)) {
//             acc = callback(acc, this[i], i, this);
//         }
//     }
//
//     return acc;
// }
//
// console.log([1,2,3,4].customReduce((el, acc) => acc + el, 10));
// console.log([1,2,3,4].customReduce((el, acc) => acc + el));

// Array.prototype.customSort = function(compareFunction) {
//     let arr = this;
//     let len = arr.length;
//
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - i - 1; j++) {
//             if (arr.hasOwnProperty(j) && arr.hasOwnProperty(j + 1)) {
//                 if (compareFunction ? compareFunction(arr[j], arr[j + 1]) > 0 : String(arr[j]) > String(arr[j + 1])) {
//                     let temp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                 }
//             }
//         }
//     }
//     return arr;
// }
//
// console.log([5, 3, 8, 1, 2].customSort((a, b) => a - b));
// console.log([5, 3, 8, 1, 2].customSort((a, b) => b - a));

Array.prototype.customFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

console.log([1, 2, 3, 4, 5].customFilter(x => x > 2));
console.log([1, 2, 3, 4, 5].customFilter(x => x % 2 === 0));
