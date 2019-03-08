function firstAndLastKNumbers(arrayNumbers) {
    let k = arrayNumbers[0];
    let firstKElements = [];
    let lastKElements = [];
    firstKElements = arrayNumbers.slice(1, k + 1);
    lastKElements = arrayNumbers.slice(arrayNumbers.length - k);
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

firstAndLastKNumbers([3,6, 7, 8, 9])