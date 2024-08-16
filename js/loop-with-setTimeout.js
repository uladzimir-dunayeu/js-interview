// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         // Q: What would be the output and why?
//         console.log('[Closure]', i + i + '' + i)
//     }, i * 10);
// }


// var o = {
//     x: 10,
//     foo() {
//         for (var i = 0; i< 10; i++) {
//             setTimeout(() => {
//                 (function(count) {
//                     console.log(count);
//                 })(i)
//             }, 0)
//         }
//     }
// }
//
// o.foo();

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    })
}