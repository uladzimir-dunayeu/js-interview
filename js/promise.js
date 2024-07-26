console.log('start');

const promise = new Promise((resolve) => {
    console.log('create promise');
    setTimeout(() => {
       resolve('foo');
    }, 300);
});

promise.then((value) => {
    console.log('then', value);
});

console.log('promise initialized');
