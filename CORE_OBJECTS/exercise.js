// Create a function that returns the century depending on the year given as a parameter.
function main() {
    var year = parseInt(readLine(), 10)
    
    //the output
    console.log(calcCent(year));
    
    function calcCent(){   
        var calculation = year / 100;
        return Math.ceil(calculation);
    }
}