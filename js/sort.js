// Напишите функцию byField(fieldName), которая принимает имя свойства и возвращает функцию для сортировки массива объектов по этому свойству.


function byField(fieldName) {
    return function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
    }
    // Ваш код здесь
}

const users = [
    {name: "John", age: 20},
    {name: "Pete", age: 18},
    {name: "Ann", age: 19}
];

users.sort(byField('name'));
console.log(users);
// Ожидаемый результат: [{name: "Ann", age: 19}, {name: "John", age: 20}, {name: "Pete", age: 18}]

users.sort(byField('age'));
console.log(users);
// Ожидаемый результат: [{name: "Pete", age: 18}, {name: "Ann", age: 19}, {name: "John", age: 20}]