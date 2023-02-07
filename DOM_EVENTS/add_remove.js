var node = document.createTextNode("Some new text");

<div id="demo">
    some content
</div>

// CREATING A NEW PARAGRAPH
var p = document.createElement("p");
var node = document.createTextNode("Some new text");
//ADDING THE TEXT TO THE PARAGRAPH
p.appendChild(node);
var div = document.getElementById("demo");
//ADDING THE PARAGRAPH TO THE DIV
div.appendChild(p);


// EXERCISE: add a  new li element to the unordered list with id="list"
var el = document.createElement("li");
var txt = document.createTextNode("B");
el.appendChild(txt);
var ul = document.getElementById("list");
ul.appendChild(el);


// REMOVING ELEMENTS
var parent = 
document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);


// EXERCISE: remove the node element from the page (par is node's parent)
var par = document.getElementById("par");
var node = document.getElementById("node");
par.removeChild(node);


// REPLACING ELEMENTS
var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);
var parent =
document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);