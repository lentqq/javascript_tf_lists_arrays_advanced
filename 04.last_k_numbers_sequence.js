function lastKNmubersSequence(sequenceLength, k) {
    let resultArray = [1];

    for (let i = 1; i < sequenceLength; i ++) {
        let indexPreviousKElements = Math.max( i - k, 0);
        let subArray = resultArray.slice(indexPreviousKElements);
        let sum = subArray.reduce((a, b) => a +b);
        resultArray.push(sum);
    }

    console.log(resultArray.join(' '));
}

lastKNmubersSequence(8, 2)