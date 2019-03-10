function listOfProducts(stryngArray) {
    stryngArray.sort();

    for (let i = 0; i < stryngArray.length; i++) {
        console.log(`${i + 1}.${stryngArray[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])