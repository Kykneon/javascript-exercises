const sumAll = function (num1, num2) {
    let lowNum = 0;
    let highNum = 0;
    let sum = 0;

    if (Math.sign(num1) === -1 || Math.sign(num1) === -1 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    else if (num1 < num2) {
        lowNum = num1;
        highNum = num2;
    } else {
        lowNum = num2;
        highNum = num1;
    }

    for (let i = lowNum; i <= highNum; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
