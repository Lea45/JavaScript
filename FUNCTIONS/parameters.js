/* 
functionName(param1, param2, param3){
    some code
}
*/

function sayHello(name){
    console.log("Hello, " + name); // alert
}

sayHello("Lea");
sayHello("Ivan");
sayHello("Adrijana");


function myAlert(txt){
    console.log("Yo, " + txt);
}

myAlert("Test");


/* 
Sometimes it’s very useful to set reminder to help you accomplish all of your tasks.
Make the function-reminder to take that event as argument and output the corresponding message.
*/
function main() {
    var eventExample = readLine();
    setReminder(eventExample)
}

function setReminder(event) {
    console.log('You set a reminder about ' + event);
};