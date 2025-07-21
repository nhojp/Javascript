//Create an array of 3 car objects. 
// Each car should have properties: brand, model, and year. 
// Use a for loop to display each car's information in a sentence like "The [brand] [model] was made in [year]."

let car = [
    {brand: "yamaha", model: 1, year: 2025},
    {brand: "toyota", model: 2, year: 2024},
    {brand: "kawasaki", model: "abc", year: 2000}
]

for (let i = 0 ; i < car.length; i++){
    console.log("The " + car[i].brand + " " + car[i].model + " was made in " + car[i].year)
}