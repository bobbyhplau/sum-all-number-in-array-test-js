function sumItems(array) {
    // Sum all the numbers in the array

    if (array.length === 0) {
        return 0;
    }

    let popped = array.pop();

    if (Array.isArray(popped)) {
        return sumItems(popped) + sumItems(array);
    } else {
        return popped + sumItems(array);
    }
}

module.exports = sumItems;