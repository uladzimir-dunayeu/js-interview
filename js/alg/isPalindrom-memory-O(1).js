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

function isNotChar(char) {
    return /\W|_/.test(char);
}

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        if (isNotChar(str[left])) {
            left += 1;
            continue;
        }

        if (isNotChar(str[right])) {
            right -= 1;
            continue;
        }

        if (str[left].toLowerCase() === str[right].toLowerCase()) {
            left += 1;
            right -= 1;

            continue;
        }

        return false;
    }

    return true;
}