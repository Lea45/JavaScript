/* for single objects */

var person = {
    name: "Lea", age: 22, favColor: "blue"
};


function person(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}


var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");
console.log(p1.age);
console.log(p2.name);


function person (name, age) {
    this.name = name;
    this.age = age;
}
var  John = new person ("John", 25);
var James = new person("James", 21);