// Реализуйте функцию для глубокого клонирования объекта, поддерживающую клонирование вложенных объектов и массивов.

// Пример вызова:
const original = {
    name: 'Alice',
    address: {
        city: 'Wonderland',
        coordinates: [123.45, 67.89],
        location: {
            x: 1,
            y: 2,
        }
    }
};

function deepClone(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    let outObj = {};

    if (Array.isArray(value)) {
        outObj = []
    }

    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            outObj[key] = deepClone(value[key])
        }
    }

    return outObj;
}

const copy = deepClone(original);
console.log(copy);
// { name: 'Alice', address: { city: 'Wonderland', coordinates: [123.45, 67.89] } }

original.address.city = 'New Wonderland';
original.address.location.x = '3';
console.log(original.address.city); // 'New Wonderland'
console.log(copy.address.city); // 'Wonderland'
console.log(copy.address.location.x); // 'Wonderland'