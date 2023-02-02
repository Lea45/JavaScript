// Select all images of the page and change their src attribute
var arr = document
getElementsByTagName("img");
for(var x = 0; x<arr.length; x++) {
    arr[x].src = "demo.jpg"
}

// Change the background color of all span elements of the page
var s = documentgetElementsByTagName("span");
for(var x=0; x<s.length; x++) {
    s[x].style.backgroundColor = '#33EA73'
}