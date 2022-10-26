function test(number){
    while(number < 5){
        number ++;
    }
    return number;
}
console.log(test(2));


function multNmbrs(a, b){
    var c = a * b;
}
console.log(multNmbrs(2, 6));


function max(a, b){
    if(a >= b){
        return a;
    }
    else{
        return b;
    }
}
console.log(max(3, 7));


function test(a, b){
    if(a > b){
        return a * b;
    }
    else {
        return b / a;
    }
}
console.log(test(5, 15));


//PROJECT
/* 
You are making a currency converter app.
Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount.
*/

function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);

    function convert(amount, rate) {
        return amount*rate;
    }
    
    console.log(convert(amount, rate));
}