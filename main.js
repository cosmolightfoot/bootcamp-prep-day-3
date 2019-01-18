
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
function evenOrOdd() {
    
    var input = document.getElementById('number').value;
    var output = document.getElementById('results');
    input.innerHTML = output;
}


/*
function evenOrOdd() {
    var isItEvenOrOdd;
    var input = document.getElementById('number');
    var output = document.getElementById('results')
    var y = input.value;
    if(y % 2 === 0) {
        console.log('even');
        isItEvenOrOdd = 'even'
    }
    else {
        console.log('odd');
        isItEvenOrOdd = 'odd'
    }
    output.innerHTML = isItEvenOrOdd;
   */
    //window.alert(isItEvenOrOdd);
    //document.getElementById('results').innerHTML = isItEvenOrOdd);
    
}