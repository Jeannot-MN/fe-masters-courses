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

// JSON type exercise
type JSONPrimitive = number | string | boolean | null
type JSONValue =  JSONPrimitive | JSONArray | JSONObject
type JSONObject = {
    [key: string] : JSONValue
}
type JSONArray = JSONValue[]

type JSON_Clone = JSONObject | JSONArray | JSONValue

let json : JSON_Clone = {
    "name": "JMN",
    "age": 78,
    "merits": [
        {"id": 1, "description": "Some merit"}, 2
    ],
    "active": false,
    "is_sad": null
}


//Type queries
//keyof means from this type make a type out it this type's keys, Object.keys() as types
type _Person = {
    name: string
    age: number
}
type P1 = keyof _Person

//Get type of a given value
let p_: _Person = {
    name: "Person",
    age:34
}
type P2 = typeof p_

// Dictionary map, filter, reduce
const fruits = {
    apple: { color: "red", mass: 100 },
    grape: { color: "red", mass: 5 },
    banana: { color: "yellow", mass: 183 },
    lemon: { color: "yellow", mass: 80 },
    pear: { color: "green", mass: 178 },
    orange: { color: "orange", mass: 262 },
    raspberry: { color: "red", mass: 4 },
    cherry: { color: "red", mass: 5 },
}

interface Dict<T> {
    [k: string]: T
}

function mapDic<T, U>(dict: Dict<T>, callback: (item: T, name: string) => U): Dict<U>{
    let output: Dict<U> = {}
    for(let name in dict){
        output[name] = callback(dict[name], name)
    }
    
    return output
}

const newMap = mapDic(fruits, (fruit, name) => {
    return {
        ...fruit,
        kg: 0.001 * fruit.mass,
        name
    }
})

console.log(newMap)

function filter<T>(dict: Dict<T>, predicate: (fruit: T, name: string) => boolean):Dict<T> {
    let output: Dict<T> ={}
    for (const name in dict) {
        if(predicate(dict[name], name)){
            output[name] = dict[name]
        } 
    }
    return output
}

const filterDict = filter(fruits, (fruit, _) => fruit.mass > 100)
console.log(filterDict)

function reduce<T, U>(dict: Dict<T>, callback: (prev: U, item: T) => U, initialValue: U): U {
    let output = initialValue
    for(const name in dict) {
        output = callback(output, dict[name])
    }
    
    return output
}

const basketMass = reduce(fruits, (prev, item)=>prev + item.mass,0)

console.log({basketMass})