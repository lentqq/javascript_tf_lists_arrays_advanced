function negativePositiveNumbers(arrayNumbers) {
    let arrayResult  = [];

    for (let i = 0; i < arrayNumbers.length; i ++) {
        if (arrayNumbers[i] < 0) {
            arrayResult.unshift(arrayNumbers[i]);
        }
        
        if (arrayNumbers[i] > 0 || arrayNumbers[i] === 0) {
            arrayResult.push(arrayNumbers[i]);
        }
    }

    for (let number of arrayResult) {
        console.log(number);
    }
}

negativePositiveNumbers([3, -2, 0, -1])