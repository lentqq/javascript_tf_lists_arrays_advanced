function smallestTwoNumbers (arrayNumbers){
    arrayNumbers.sort((x,y) => x - y);
    let result  = arrayNumbers.slice(0,2);
    console.log(result.join(' '));

}

smallestTwoNumbers ([3,0,10,4,7,3])