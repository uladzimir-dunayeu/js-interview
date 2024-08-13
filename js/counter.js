// Реализуйте счетчик, который позволяет задать начальное значение и шаг инкремента/декремента. Счетчик должен поддерживать метод reset для сброса значения к начальному.


function createCounter(start, inc) {
    let count = start;

    return {
        increment() {
            return count += inc;
        },
        decrement() {
            return count -= inc;
        },
        value() {
            return count;
        },
        reset() {
            count = start;
        }
    }
}

// Пример вызова:
const counter = createCounter(10, 2);
console.log(counter.increment()); // 12
console.log(counter.increment()); // 14
console.log(counter.decrement()); // 12
console.log(counter.value()); // 12
counter.reset();
console.log(counter.value()); // 10