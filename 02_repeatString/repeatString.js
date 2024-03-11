const repeatString = function (string, num) {
    let isString = '';
    let numSign = Math.sign(num);

    if (numSign === -1) {
        isString = "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            isString += string;
        }
    }

    return isString;
};

// Do not edit below this line
module.exports = repeatString;
