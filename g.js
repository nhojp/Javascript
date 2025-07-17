//Create a function called checkAge that takes one parameter called age.
//If the age is 18 or older, return "You are an adult". 
// If younger than 18, return "You are a minor". 
// Then test it with different ages and display the results.

function checkAge(age){
    if (age >= 18){
        return "You are an adult."
    } else {
        return "You are a minor."
    }
}

let yourAge = checkAge(18);
console.log(yourAge)