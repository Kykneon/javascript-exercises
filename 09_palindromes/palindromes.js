const palindromes = function (input) {
    let string = input.toLowerCase().replaceAll(/[\.,?!\s]/g, '')
    let reversedString = string.split('').reverse().join('');
    if (string === reversedString) return true; 
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
