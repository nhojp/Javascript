//Create a function called describe that takes THREE parameters: 
// name, age, and hobby. The function should return a sentence like 
// "My name is [name], I am [age] years old, and I like [hobby]."

function describe(name, age, hobby){
    return "My name is " + name + " I am " + age + " years old, and I like " + hobby +"." 
}

let described = describe("Paul", 22, "Basketball")
console.log(described)