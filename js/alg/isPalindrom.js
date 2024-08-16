// Условие
// Необходимо реализовать функцию isPalindrome, которая принимает на вход строку и возвращает true либо false. Если переданная строка является палиндромом, то возращаем true, иначе false.
// Палиндром - строка, которая одинаково читается слева напрово и справа налево. Примеры: madam, aba, civic.
// Палиндромом также является следующая строка: "A man, a plan, a canal: Panama". Она читается одинаково в обоих направлениях, если не учитывать пробелы и знаки препинания.
// Ограничение: нужно решить задачу за O(1) по памяти. Это значит, нельзя выделять память под новые массивы и объекты.

console.log(isPalindrome('madam')) // true
console.log(isPalindrome('hello')) // false
console.log(isPalindrome('civic')) // true
console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('A man, a plan, a canal: Ranama')) // false

function isPalindrome(str) {
    const modifiedStr = str.toLowerCase().replace(/\W|_/g, '');

    return modifiedStr === modifiedStr.split('').reverse().join('');
}