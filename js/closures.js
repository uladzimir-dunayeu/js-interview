// *********** 1 ***************
// function makeCounter(count) {
//     return function() {
//         console.log(count++);
//         return count;
//     }
// }
//
// const counter1 = makeCounter(10);
// const counter2 = makeCounter(100);
//
// count = 10000;
//
// counter1();
// counter1();
//
// counter2();
// counter2();

// *********** 2 ***************

function user(name) {
    let _name = name;

    return {
        getName() {
            return _name
        },
        setName(n) {
            _name = n;
        }
    }
}

const vova = user('Vova');

console.log(vova.getName());
// vova.setName('Vova D');
vova['_name'] = 'cheater';
console.log(vova.getName());
console.log('vova', vova);


// *********************************


// Нужно написать функцию, которая принимает число N и возвращает функцию,
// вызов которой первые N раз возвращает 'yes', а потом – 'no'.

//
// function sayN(count) {
//     let limit = 0;
//
//     return function () {
//         if (limit++ >= count) {
//             return 'no'
//         }
//         return 'yes'
//     }
// }
//
// const say = sayN(2);
// console.log(say())
// console.log(say())
// console.log(say())
// console.log(say())
