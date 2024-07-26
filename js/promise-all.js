
async function promiseAll(promiseArray) {
    const response = [];

    for (let i = 0; i < promiseArray.length; i++) {
        const res = await promiseArray[i];
        response.push(res);
    }

    return response;
}

const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'first promise resolved');
});

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 200, 'second promise rejected');
});

const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 300, 'third promise resolved');
});

promiseAll([promise1, promise2, promise3]).then(array => {
    array.forEach((res) => console.log(res))
});
