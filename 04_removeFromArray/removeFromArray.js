const removeFromArray = function(numArray, removedNum, ...others) {

    for (let i = numArray.length - 1; i >= 0; i--) {
        if (numArray[i] === removedNum || others.includes(numArray[i])) {
            numArray.splice(i, 1);
        }
    }
    return (numArray);
};

// Do not edit below this line
module.exports = removeFromArray;
