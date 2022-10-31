var myString ="abcdef";
console.log(myString.length);

function mathCalc(height, weight){
    this.height = height;
    this.weight = weight;
    this.sampleCalc = calculate;
}

/* You are working on a Contact Manager app.
You have created the contact object constructor, which has two arguments, name and number.
You need to add a print() method to the object, which will output the contact data to the console in the following format: name: number
*/
function contact(name, number) 
{
    this.name = name;
    this.number = number;
    this.print = print;
}

function print()
{
    console.log(this.name + ": " + this.number);
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321)
a.print();
b.print();