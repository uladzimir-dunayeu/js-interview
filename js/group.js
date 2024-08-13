// Пример вызова:
const data = [
    { name: 'Alice', group: 'A' },
    { name: 'Bob', group: 'B' },
    { name: 'Charlie', group: 'A' },
    { name: 'David', group: 'B' }
];

function groupBy(data, str) {
    const obj = {};

    data.forEach(el => {
        const key = el[str];
        if (obj[key]) {
            obj[key].push(el)
        } else {
            obj[key] = [el];
        }
    })

    console.log('obj', obj);
    return obj;
}

console.log(groupBy(data, 'group'));
// { A: [{ name: 'Alice', group: 'A' }, { name: 'Charlie', group: 'A' }],
//   B: [{ name: 'Bob', group: 'B' }, { name: 'David', group: 'B' }] }