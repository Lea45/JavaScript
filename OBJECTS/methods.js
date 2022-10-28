/* methodName = function() { code lines } 
objectName.methodName()
*/

function person(name, age){
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}

function bornYear(){
    return 2022 - this.age;
}
console.log(bornYear(2000));

var p = new person("A", 22);
console.log(p.yearOfBirth());