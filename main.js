
// 1. Initialize
// 2. Condition
// 3. Post Loop Action
// Example of a "For Loop" below

/*for(var i = 0; i < x; i++) {
    if(i % 2 === 0, i > 1) {
        console.log(i);
    }
}
*/
var isItEvenOrOdd;

function evenOrOdd() {
    var input = document.getElementById('number');
    
    var y = input.value;
    if(y % 2 === 0) {
        console.log('even');
        isItEvenOrOdd = 'even'
    }
    else {
        console.log('odd');
        isItEvenOrOdd = 'odd'
    }
    document.write(isItEvenOrOdd);
}