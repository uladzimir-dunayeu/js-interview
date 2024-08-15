function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n-1) + fib(n-2)
}

const cachedFactorial = createCachedFunction(fib);

function createCachedFunction(fn) {
    const map = {};

    return function (...args) {
        const key = args.join(',');
        if (map[key]) {
            return map[key];
        } else {
            map[key] = fn(...args);

            return map[key];
        }
    }
}

console.log(cachedFactorial(5));  // Вычисляет и возвращает 120
console.log(cachedFactorial(20));  // Возвращает результат из кэша, 120
console.log(cachedFactorial(20));  // Возвращает результат из кэша, 120
console.log(cachedFactorial(40));  // Вычисляет и возвращает 720
console.log(cachedFactorial(40));  // Вычисляет и возвращает 720