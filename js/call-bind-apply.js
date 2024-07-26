// Нужно написать функцию strjoin, которая склеивает строки через разделитель

// strjoin('.', 'a', 'b', 'c') //'a.b.c'
// strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f') //'a-b-c-d-e-f'

// this[0]+symbol+this[1]+symbol

// function strjoin() {
//     return [].join.call([].slice.call(arguments, 1), arguments[0])
// }
//
// console.log(strjoin('.', 'a', 'b', 'c'));
// console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f'));


// *********************************


// const user = {
//     pro: 1,
//     say: function ( ) {
//         return this.pro;
//     }
// }
//
// const sayNN = user.say;
//
// console.log('sayNN', sayNN())
//
// var a = {
//     name: 'a',
//     foo: function () {
//         console.log(this.name);
//     }
//
// };
//
// a.foo(); // - ? 'a'
//
// var bar = a.foo;
// bar(); // - 'undefined
//
// var b = {
//     name: 'b'
// };
// b.foo = a.foo;
// b.foo(); // - 'b''
//
// var c = {
//     name: 'c'
// };
//
// bar.call(c); // - 'c'
// a.foo.apply(b); // - b
// a.foo.bind(b).call(c); // - 'b'
// a.foo.bind(b).bind(c)(); // - 'b'
