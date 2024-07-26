

// *** 1 ***
// function isUnique(string) {
//     return new Set(string).size === string.length;
// }
//
// console.log(isUnique('abcdef'));
// console.log(isUnique('abcdeff'));
// console.log(isUnique('abcdefa'));
// console.log(isUnique('abcdefe'));
// console.log(isUnique('abcdefn'));


// *** 2 ***


// function flatten (arr) {
//     const res = [];
//
//     for (let i = 0; i < arr.length; i ++) {
//         if (Array.isArray(arr[i])) {
//             const flat = flatten(arr[i]);
//             for (let j = 0; j < flat.length; j ++) {
//                 res.push(flat[j]);
//             }
//         } else {
//             res.push(arr[i]);
//         }
//     }
//
//     return res;
// }
//
// console.log(flatten([[1], [[2]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[4]]]]]]]]]]]]]]], 3]]]]]]]]]]]]]]]]]]))


// *********************************
// *** 3 ***
// *********************************


// function removeDupes(str) {
//     return Array.from(new Set(str)).join();
// }
//
// console.log(removeDupes('abcddddddd'))
// console.log(removeDupes('abcddddddd2342'))
// console.log(removeDupes('abcdddddddcccc'))


// *** 4 ***


// function highestFrequency(array) {
//     const uniqValues = Array.from(new Set(array));
//     const obj = {}
//     let max = 0;
//     let str = ''
//
//     uniqValues.forEach(uniq => {
//         obj[uniq] = array.filter(el => el === uniq).length;
//
//         if (obj[uniq] > max) {
//             max = obj[uniq]
//             str = uniq;
//         }
//     })
//
//     return str
// }
//
// console.log(highestFrequency(['a', 'a', 'b', 'c', 'c', 'c', 'd', 'd', 'd', 'd', 'd']))
// console.log(highestFrequency(['a', 'a', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'd', 'd', 'd', 'd', 'd']))


// *** 5 ***


function isStringRotated(str1, str2) {
    return (str1 + str1).includes(str2) && str1.length === str2.length;
}

console.log(isStringRotated('123', '321'));
console.log(isStringRotated('123', '123'));
console.log(isStringRotated('333', '333'));

// *** 6 ***
// *** 7 ***