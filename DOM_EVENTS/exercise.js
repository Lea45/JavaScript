// change the content of all paragraph tags of the page to "Sololearn"
var arr = document.getElementsByTagName("p");
for(var x = 0; x<arr.length; x++) {
    arr[x].innerHTML="Sololearn";
}

// change the color of the paragraph with id="p2" to red
var d = document.getElementById("p2");
d.style.color="red";

// alert the message when the button is clicked
function msg() {
    alert("Hi");
}