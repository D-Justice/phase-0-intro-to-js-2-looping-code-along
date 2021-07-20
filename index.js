let test = ['john', 'jenny', 'jimmy'];
function writeCards(cardsNames, event) {
    let newArray = [];
    for (let i = 0; i < cardsNames.length; i++) {
        let message = `Thank you, ${cardsNames[i]}, for the wonderful ${event} gift!`
        console.log(message);
        newArray.push(message);
        
    }
    return newArray;
}



function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}