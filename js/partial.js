// Напишите функцию partial(func, ...args), которая позволяет зафиксировать некоторое количество начальных аргументов функции func.


function partial(func, ...args) {
    return function (...innerArgs) {
        return func(...args, ...innerArgs);
    }
    // Ваш код здесь
    const s = 'ss';
    const obj = {};
}

function add(a, b) {
    return a + b;
}

const add5 = partial(add, 5);
console.log(add5(10)); // Ожидаемый результат: 15