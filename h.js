//Create a function called checkTemperature that takes one parameter called temp. 
// Return "Hot" if temp is above 30, 
// "Warm" if temp is between 20-30, and 
// "Cold" if temp is below 20.


function checkTemperature(temp){
    if (temp > 30){
        return "Hot"
    } else if (temp > 20) {
        return "Warm"
    } else {
        return "Cold"
    }
}

let temperature = checkTemperature(30)
console.log(temperature)