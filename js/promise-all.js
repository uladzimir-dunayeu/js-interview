
// async function promiseAll(promiseArray) {
//     let responses = [];
//
//     for (let i=0; i<promiseArray.length; i++) {
//         const res = await promiseArray[i];
//         responses.push(res);
//     }
//
//     return responses;
// }
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'first promise resolved');
// });
//
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'second promise rejected');
// });
//
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'third promise resolved');
// });
//
// promiseAll(promise1, promise2, promise3).then(array => {
//     console.log('then', array)
//     array.forEach((res) => console.log(res))
// });
