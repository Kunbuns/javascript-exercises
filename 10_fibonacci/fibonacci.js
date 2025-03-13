const fibonacci = function(number) {
    let array = [1, 1];

    if (typeof number === "string") {number = +number}; //string check
    if (number === 0) {return 0}; //0 check
    if (number < 0) {return "OOPS"}; //negative check


    while (array.length < number) {
        let nextValue = array[array.length - 1] + array[array.length - 2];
        array.push(nextValue);
    }

    return array[number - 1];
}

// Do not edit below this line
module.exports = fibonacci;
