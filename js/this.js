// ******** 1 *************

// for (var i = 0; i < 5; i++) {
//     (function (index) {
//         setTimeout(function() {
//             console.log(index);
//         }, 500);
//     })(i)
// }

// ******** 2 *************

// function Counter(start) {
//     this.count = start;
//
//     this.inc = function () {
//         this.count += 1;
//     }
//
//     this.dec = function () {
//         this.count -= 1;
//     }
//
//     this.show = function() {
//         console.log('count', this.count)
//     }
// }
//
// const counter = new Counter(10);
// counter.inc();
// counter.inc();
// counter.inc();
// counter.dec();
// counter.dec();
// counter.show();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// ******** 3 *************
// const item = {
//     price: 1000,
//     calculatePrice() {
//         console.log('this1', this);
//         return (function() {
//             console.log('this2', this);
//             console.log(this.price);
//         }).bind(this);
//     }
// }
//
// calc = item.calculatePrice();
// calc();

// ******** 4 *************
// 'use strict'
// const users = {
//     lastName: 'Ivanov',
//     firstNames: ['Petr', 'Ivan'],
//     logFullNames1: function() {
//         this.firstNames.forEach(function(name) {
//             console.log(`${this.lastName} ${name}`);
//         }, this)
//     },
//     logFullNames2: function() {
//         this.firstNames.forEach((name) => {
//             console.log(`${this.lastName} ${name}`);
//         })
//     }
// }
//
// users.logFullNames1();
// users.logFullNames2();

// ******** 5 *************
// const item ={
//     title: 'name',
//     logTitle: function() {
//         setTimeout(function() {
//             console.log(this.title);
//         }, 2000);
//     }
// }
//
// item.logTitle();

// const obj = {
//     name: 'Alice',
//     greet: function() {
//         return `Hello, ${this.name}!`;
//     },
//     greetArrow: () => {
//         return `Hello, ${this.name}!`;
//     },
//     delayedGreet: function() {
//         setTimeout(function() {
//             console.log(`Hello, ${this.name}!`);
//         }, 1000);
//     },
//     delayedGreetArrow: function() {
//         setTimeout(() => {
//             console.log(`Hello, ${this.name}!`);
//         }, 1000);
//     }
// };
//
// console.log(obj.greet());              // Что будет выведено? Hello Alice
// console.log(obj.greetArrow());         // Что будет выведено? Hello undefined
// obj.delayedGreet();                    // Что будет выведено через 1 секунду? Hello undefined
// obj.delayedGreetArrow();               // Что будет выведено через 1 секунду? Hello Alice
// 'use strict'
// var name = "Go to Bar"; // global
//
// var myObject = {
//     getName: function () {
//         var name = "Bar Foo";
//         return this.name;
//     },
//     name: "Foo Bar"
// };
//
// var getNameFunc = myObject.getName;
//
// // window.name
//
// // Q: What would be the output and why?
// // Q: What is "strict mode" and how does it affect the result?
// console.log('[Context]', myObject.getName()); // ? FOO BAR
// console.log('[Context]', getNameFunc()); // ? Go to Bar

// Number.prototype.plus = function(num) {
//     return this + num;
// }
// Number.prototype.minus = function(num) {
//     return this - num;
// }
//
// (2).plus(5).minus(1)

// Math.universalMax = function (...args) {
//
// }
//
// Math.universalMax() // null
// Math.universalMax(1, 4) // 4
// Math.universalMax([11, 33], 24, [2, -3, 99]) // 9
// Math.universalMax([43], [44], [103]) // 103

//i = 5
//
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         // Q: What would be the output and why?
//         console.log('[Closure]', i + i + '' + i)
//     }, i * 10);
// }


var o = {
    x: 10,
    foo() {
        for (var i = 0; i< 10; i++) {
            setTimeout(() => {
                (function(count) {
                    console.log(count);
                })(i)
            }, 0)
        }
    }
}

o.foo();
