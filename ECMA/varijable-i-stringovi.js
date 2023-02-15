// VAR I LET
var a = 10;
const b = 'hello';
let c = true;

if(true) {
    let name = 'Jack';
}
alert(name); //generates an error


function letItBe() {
    let v = 2;
    if(true) {
        let v = 4;
        console.log(v);
    }
    console.log(v);
}
letItBe();


// CONST
const a = 'Hello';
a = 'Bye';

// Make a constant named total and the variable i that is only accessible inside the loop
const total = 100;
let sum = 0;
for(let i = 0; i<total; i++){
    sum +=i;
}


// TEMPLATE LITERALS
let name = 'David';
let msg = 'Welcome ' + name + '!'; // ${name}!
console.log(msg);

