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
const item ={
    title: 'name',
    logTitle: function() {
        setTimeout(function() {
            console.log(this.title);
        }, 2000);
    }
}

item.logTitle();
