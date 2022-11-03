/*
The array you are given represents the menu of breakfast options available at the hotel.
The Chef decided to replace one of the options with "Fluffy Pancakes".
Write a program to take the index as input, replace the element with that index with "Fluffy Pancakes", and output the new menu to the console as an array.
*/

function main() {
    var breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
    var index = parseInt(readLine(), 10)
   
    //replace the corresponding element by "Fluffy Pancakes"
    
    //output the menu to the console
    breakfasts[index] = "Fluffy Pancakes";
    
    console.log(breakfasts);
}