
# object 

let person = {
    name: "priya Shankar",
    age: "25",
    gender: "Female",
    address: "Chennai, Tamil Nadu India",
    sibling: {
        brother: " abishek Shankar",
        sister: "Trisha Shankar"
    }
    
}
//Dot Notation

console.log(person.sibling['sister']);
console.log(person.sibling.brother);

//bracket Notation
console.log(person['gender'])

# Araary 
let favColor = ["white", "red", "black"
]

favColor[4] = "green"
    
console.log(favColor.length);

# Function 

function greetUser(firstName, lastName) {
    let msg = "Hello " + firstName + " " + lastName + " I'm learning JavaScript!"
    console.log(msg)
    
}
greetUser("Anbu", "Selvan")
greetUser("priya", "Darshini")

function add(num1, num2) {
    console.log(num1 + num2);

}
add(45, 55)
# Assignment operators 
let x = 5;
x+=2
console.log(x);

( = is called Assigment )

# Arithmetic Operators

let number1 = 5;
let number2 = 20;

console.log(++number1);
console.log(number1);
console.log(number1--);
console.log(number1);

## relational opaerators 
let x = 5;

console.log(x < 5);
console.log(x <= 5);

console.log(x > 5)
console.log(x <= 5)

# Equality Operators 
let x = 5;

console.log(x !== 5);

# String Operators 

console.log('alen' > 'anbu')

# compration of different operators 

console.log ('1' < 5 ) // true
console.log ('1' !== 5) // true

console.log (true > 5) // false

#  Strict Equality Operators 

console.log(1 === 1); // num === num //true

console.log('1' === 1); // string === num //false

#  Lose Equality Operators 
console.log(1 == 1) // num == num //true
console.log('1' == 1) // string == num //true
console.log(true == '1') // boolen == string

# Ternary Operator 

let age = 48;

 let type = age > 18 ? "Adult Ticket" : "child Ticket"
console.log(type); 

# Logical Operators 

console.log(true && true )
console.log(true && false )
console.log(false && false )
console.log(true || true )
console.log(false || true)
console.log(false || false)
console.log(!true)
console.log(!false)


//highIncome, CIBILScore -> Loan Eligible, Ineligible

let highIncome = true;
let CIBILScore = false;

let eligiblePerson = highIncome || CIBILScore;

let applicationStatus = eligiblePerson

console.log("Status : " + eligiblePerson)
console.log("Application Status: " + applicationStatus)

# Non Boolen Opeartors 

let userColor = null;
let defaultColor = "bule";
let currnetColor = userColor || defaultColor;
console.log(currnetColor);

# BitWise Operators


//Human code -> Machine code (0,1)

// 1 -> 00000001 -> 1
// 2 -> 00000002 -> 2
// 3 -> 00000011 -> 3
//console.log(1 | 2) // bitwise OR
//console.log(1 & 1) // bitwise AND

// example 
// R -> 00000100 -> Read
// w -> 00000010 -> Write
// E -> 00000001 -> Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | writePermission | readPermission;
// use Ternary operator
let message = (myPermission & readPermission) ? "yes" : "No";
console.log(message);

# Operators Precedence 
// refer Precedence Operators  in google 
let x = (2 + 5) * 10;  // 70
let y = 2 + 5 * 10; // 52 precedence type
console.log(y);
console.log(x);

# If  else 
# Conditional Statements (two Types)
//if else condition
//Switch case condition

// 1 to 6 is Good morning , 10 to 17 is Good Afternoon, 18 to 24 is Goog Evening

let hour = new Date().getHours;

if (hour >= 1 && hour <= 9) {
    console.log("Good morning")
} else if (hour >= 10 && hour <= 17) {
    console.log("Good AfterNoon")
} else {
    console.log("Good Evening")
}

# Switch case condition

let amount = 6000;

switch (true) {
  case amount >= 60000:
    console.log("I phone ");
    break;
  case amount >=10000:
    console.log("Android MObile");
    break;
  
  case amount >= 5000 && amount < 10000:
    console.log("Basic mobile");
  default:
    console.log("You can't afford mobile phone now ");
}

# Foor loop


// for (initialExpress; condition; step ) {
    console.log("Number #1")
}
// for loop
for (let i = 0; i <= 10; i++){
    if (i % 2 !== 0) {
        console.log("Add number #" + i);
        
    }
}

# While Loop
let i = 1;
while (i <= 20) {
    if (i %2 == 0) {
        console.log("even Number #" + i);
        
    }
    i++;
}

# do while loop 
let i = 0;
do {
    if (i % 2 !== 0) {
        console.log("Odd number D0-while #" + i);
    }
i++
} while (i <= 10  )

# for - in 
//use in object 
const person = {
    name: "anbu",
    age: 24,
    sex: "male"

}

for (let key in person) {
    console.log(key + " :" , person[key]);
    
}

// use in array 
let array = ["red", "blue", "green "]

for (let key in array) {
    console.log(array[key])
}

# For of loop

let colors = ["red", "blue", "green"];
for (let color of colors) {
    console.log("color: " + color);
    
}

# java Script Object & OOP 
# (Object Oriented Programming)

let person = {
    name: "raj",
    age: 24,
    sex: "male",
    interest: ['Creating , teaching new things.'],
    isAlive: true,
    address: {
        city: "chennai",
        state: "TamilNadu"
    },
    greeting: function(){
        let msg = `my Name is ${this.name}, I love ${this.interest}`;
        console.log(msg)
    }
    
    
}
person.greeting();

# Factory Function 
function createPerson(name) {
    return {
        name,
        greeting() {
            let msg = `my name is ${this.name}`;
            console.log(msg);
        }
    };
}

let anbu = createPerson("anbu");
anbu.greeting();
let anu = createPerson("anu")
anu.greeting();

#  constructor funcation / class function
/* function Person(name) {
  this.name = name;
  this.greerting = function () {
    console.log(`My name is ${name}`);
  };
}
let person = new Person("anbu");
person.greerting(); */

class Person {
    constructor(name) {
        this.name = name;
        this.greerting = function () {
            console.log(`My name is ${name}`);

        };
    }
}
let person = new Person("anbu");
person.greerting()

# Dynamic Obejects 

const person = {
    name: "raj",
    
}
person.age = 24;
person.gender = "male"
person.greeting - function () { }
delete person.greeting;
delete person.gender;
console.log(person);

# constructor Property
/* 
let name = "anbu"; // -> new String ("Anbu")
let age = 24; // NumberLiterals -> new NUmber ()
let isAlive = true; // BooleanLiterals -> new Boolean()
 
console.log(name , age , isAlive);
 */

let name = new String("Anbu");
let age = new Number(3);
let isAlive = new  Boolean(true);
console.log(name, age, isAlive);

# function are objects

function Person(name, age) {
    this.name = name;
    this.greeting = function () {
        console.log(`My name is ${name}`);
        
    }
}

Person.call({}, "priya", "38")
Person.apply({} , ["pavi", "23"])
let person = new Person("anbu");

# Enumerating Properties of an Obejct 
// primitive type vs Reference type 

let cartObj = {
    value: 5
};

function updateCart(cart) {
    cart.value++;

}
updateCart(cartObj);
console.log("Cart available:", cartObj);

# Cloning an JavaScript Object 

let user = {
    name: "anbu ",
    getFullName() {
        console.log(`My name is ${this.name}`)
    }

}
//Spread operators 
let anotherName = {...user}
/* let anotherName = Object.assign({age : 23}, user);
console.log(anotherName);
 */
console.log(anotherName)

# Math Object / Inbuild Objects 

let marks = [55, 65, 75, 85, 95];
let result = Math.max(...marks);

console.log("Maximum value : " +  result);

console.log(Math.abs(-3));
console.log(Math.round(2.4));
console.log(Math.ceil(2.9));
console.log(Math.PI / 120);
console.log(Math.SQRT2);
console.log(Math.floor(2.9));

//console.log(Math.random());




console.log(Math.random() * (100 -1 ) + 1);


# String Objects 
let firstName = "Anbu";
let lastName = "selvan";

let firstName2 = new String("Anbu");

console.log(firstName);
console.log(lastName);
//properties 
console.log(firstName.length);

//methods 
console.log(firstName.concat(" ", lastName));
console.log(firstName.includes("bu"));
console.log(firstName.includes("an"));
console.log(firstName.startsWith("an"));
console.log(firstName.startsWith("An"));
console.log(firstName.endsWith("bu"))
console.log(firstName.endsWith("u"));
console.log(firstName.indexOf("b"));
console.log(firstName.repeat(10));
console.log(firstName.replace("Anbu", "Rocky"));
console.log(firstName.slice(2));


let para = "some text";
console.log(para.split(" ", 2));

console.log(para.substring(5));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

let message = " This is some text you doing good!  ";
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());


//Escap Notation 
let hello_message = "This is my Fifth\" message, please replay."

# Template Literials 
// string primitives 
const name = "Trisha";
//old type
const message = "Thank you" + name + 'for reading \n"programing" ';
// new types  template literials
const message2 = `Hello ${name} , Thank you for reading this "programing" `

console.log(message)
console.log(message2);

# DSA data structure and algorithms
Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.

# Date Object
const ddate = Date();

const now = new Date();
const anotherDate = new Date('july 6 1996')
console.log(ddate);
console.log(now.getFullYear());
console.log(anotherDate.getFullYear())
// odject destructing 
let [month, date, year] = new Date().toLocaleDateString("en-us").split("/");

// other type 
console.log( new Date().toLocaleDateString("en-us").split("/"));

console.log(month , date ,year);

# Adding elemrnt to an JavaScript Array

const number = ["apple ", "Lemon", "Grapes"];
//push , unshift , splice 
number.push("Oragne", "Strawberries");
number.unshift("gauva")
number.splice(3 , 0 , "Watermelons", "Bananas")
console.log(number);