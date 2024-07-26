// ****************************************
// Prototype есть только у function и class
// __proto__ у класса и фукнции ссылаются на Function.prototype

// OBJECT
let obj = {};
console.log('obj.__proto__ === Object.prototype', obj.__proto__ === Object.prototype, '\n\n');

// STRING
let string = 'string';
console.log('string.__proto__ === String.prototype', string.__proto__ === String.prototype, '\n\n');

// CLASS
class Car {
    name = 'BMW';
}

console.log('Car.__proto__ === Function.prototype', Car.__proto__ === Function.prototype);

const bmw3 = new Car();
console.log('bmw3.__proto__ === Car.prototype', bmw3.__proto__ === Car.prototype, '\n\n');
console.log('Car.__proto__ === Function.prototype', Car.__proto__ === Function.prototype, '\n\n');

// ARROW FUNCTION
const logger = (name) => {console.log(name)};
console.log('logger.__proto__ === Function.prototype', logger.__proto__ === Function.prototype, '\n\n');

// FUNCTION DECLARATION
function PrototypeExample() {}
console.log('PrototypeExample.__proto__ === Function.prototype', PrototypeExample.__proto__ === Function.prototype);

// EXTRA
class Samurai {
    constructor(name) {
        this.name = name;
    }

    hello() {console.log('Hello ', this.name)};
}
const shogun = new Samurai('Dimon');
shogun.hello();
console.log('shogun.__proto__.__proto__ === Function.prototype', shogun.__proto__.__proto__ === Function.prototype);
console.log('shogun.__proto__.constructor.__proto__ === Function.prototype', shogun.__proto__.constructor.__proto__ === Function.prototype);
console.log('shogun.__proto__.__proto__.__proto__ === null);', shogun.__proto__.__proto__.__proto__ === null);