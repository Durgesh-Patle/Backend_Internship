// let arr1=[1,2,3,4,5];
// let arr2=[1,2,3,4,5];

// arr1.hey=()=>{
//     console.log("Hello");
// }
// arr2.hey=()=>{
//     console.log("Hello World");
// }

// // console.log(arr1==arr2);
// console.log(arr1.hey()===arr2.hey());


// Function Factory.

// function createPerson(name) {
//     return {
//         sayHello: function() {
//             console.log('Hello, my name is ' + name);
//         }
//     };
// }
// const person1 = createPerson('John');
// const person2 = createPerson('Jane');

// person1.sayHello(); // Output: Hello, my name is John
// person2.sayHello(); // Output: Hello, my name is Jane



// 2....

// const person = {
//     name: 'Durgesh',
//     sr: 'Patle',
//     greet: function() {
//             console.log('Hello, ' + this.name+" "+ this.sr);
//     }
// };

// person.greet();



// 3....

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// console.log(Person);
const person1 = new Person('Durgesh', 20);
const person2 = new Person('Bhane', 21);
const person3 = new Person('Abhay', 23);

person1.sayHello(); 
person2.sayHello();

