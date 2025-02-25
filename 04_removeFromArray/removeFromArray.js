const removeFromArray = function(array, ...elements) {
    let newArray = array.filter(item => !elements.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
