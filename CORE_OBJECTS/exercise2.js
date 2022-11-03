/*
The player receives points after passing each level of a game.
The program given takes the number of passed levels as input, followed by the points gained for each level, and creates the corresponding array of points.
Complete the program to calculate and output to the console the sum of all gained points.
*/
function main() {
    //take the number of passed levels
    var levels = parseInt(readLine(),10);
    var points = new Array();
    
    var count = 0;
    while(count<levels){
        var elem = parseInt(readLine(),10);
        points[count] = elem;
        count++;
        
    }
    
    var sum = points[0];
    //calculate the sum of points 
    for (i=1;i< points.length ;i++){
        sum = sum + points[i];
    }

    //output
   console.log(sum);
}