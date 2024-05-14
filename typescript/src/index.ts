console.log("Hello world")
function add(a: number,b){
    return a + b as number
}

console.log(add(1,2))

class Person {
    
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(){
        return `Hi my name is ${this.name} and I am ${this.age} years old`;
    }
}

let p = new Person("JMN", 40);
console.log(p.greet())


let temperature = 6; // Type Inference

// Non re-assignability from const and non-mutability from 76
const n = 76 //76 is a type in this case, think of types as the allowed set of assignable values

let n2= 76 as 76 // This is litteral type
// n2 = 43 //This Break because 76 is the type of n2 

type PhoneBook = {
    [k: string] : {
        country: string,
        area: string,
        number: string
    }
}

let phoneBook: PhoneBook = {}

phoneBook["JMN"] = {
    country: "SA",
    area: "Gauteng",
    number: "1234567890"
}

phoneBook.john = {
    country: "SA",
    area: "Gauteng",
    number: "1234567890"
}

console.log(phoneBook)