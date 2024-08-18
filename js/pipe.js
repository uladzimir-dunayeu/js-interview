const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;

// const pipe = (arr) => (initialValue) =>
//     arr.reduce((acc, fn) => fn(acc), initialValue);

const pipe = function(arr) {
    return function(initialValue) {
        return arr.reduce(function(acc, fn) {
            return fn(acc);
        }, initialValue);
    };
};

console.log(pipe([times(2), times(3)])
    (2)); // 12

console.log(pipe([times(2), plus(3), times(3)])
    (2)); // 28
