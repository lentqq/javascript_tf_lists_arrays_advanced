function arrayManipulations(input) {
    let numbers = input.shift()
        .split(' ')
        .map(Number);

    for (let operation of input) {
        let [comand, firstOperand, secondOperand] = operation.split(' ');
        let firstNumber = Number(firstOperand);
        let secondNumber = Number(secondOperand);

        switch (comand) {
            case 'Add':
                numbers.push(firstNumber);
                break;
            case 'Remove':
                numbers = numbers.filter(x => x !== firstNumber);
                break;
            case 'RemoveAt':
                numbers.splice(firstNumber, 1);
                break;
            case 'Insert':
                numbers.splice(secondNumber, 0, firstNumber);
                break;

        }
    }
    console.log(numbers);
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3',
    'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
