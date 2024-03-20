const fibonacci = function (input) {
    let cleanedInput = +input;
    let fibPrevious = 0;
    let fibCurrent = 1;
    let sum = 1;
    if (cleanedInput === 0) {
        return 0;
    } else if (Math.sign(cleanedInput) === -1) {
        return "OOPS";
    } else {
        for (i = 1; i < cleanedInput; i++) {
            sum = fibPrevious + fibCurrent;
            fibPrevious = fibCurrent;
            fibCurrent = sum;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
