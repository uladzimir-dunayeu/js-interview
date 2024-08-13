// function sum(n) {
//     if (n === 1) {
//         return 1;
//     }
//
//     return n + sum(n-1);
// }

// function sum(n) {
//     let result = 0;
//
//     for (let i = 0; i<=n; i++) {
//         result+=i;
//     }
//
//     return result;
// }

function sum(n) {
    return (1 + n)/2*n;
}

console.log(sum(3));
console.log(sum(4));
console.log(sum(5));