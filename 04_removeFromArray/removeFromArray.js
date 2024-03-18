const removeFromArray = function() {
    let modifiedArray = arguments[0];
    for (let i = 1; i <= arguments.length - 1; i++) {
        modifiedArray = modifiedArray.filter((element) => element !== arguments[i])
    }
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
