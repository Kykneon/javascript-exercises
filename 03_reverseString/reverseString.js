const reverseString = function(string) {
    let reversedString = string.split('').reverse().join();
    return reversedString.replaceAll(',', '');
};

// Do not edit below this line
module.exports = reverseString;
