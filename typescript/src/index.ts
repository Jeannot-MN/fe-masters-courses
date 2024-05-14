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