const reverseString = function(str) {
    let stringArray = str.split('');
    let reversedString = '';
    for (i = stringArray.length -1; i >= 0; i--) {
        reversedString += stringArray[i];
    }
    return(reversedString);
};

// Do not edit below this line
module.exports = reverseString;
