// ************* 1 **************
// Сюда всплывут a, c, d
// var a = 1;
//
// // console.log('b out function', b);
// function x() {
//     // Сюда всплывёт b
//     if (true) {
//         var b = 2;
//     }
// }
//
// var c = 3;
//
// if (true) {
//     var d = 4;
// }

// ************* 2 **************
// HOISTING
let a = "hello";

if (true) {
    console.log(a); // Что выведет этот консоль лог и почему?
    let a = "world";
}