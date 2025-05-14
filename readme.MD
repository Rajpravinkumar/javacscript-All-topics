
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

# Adding element to an JavaScript Array

const number = ["apple ", "Lemon", "Grapes"];
//push , unshift , splice 
number.push("Oragne", "Strawberries");
number.unshift("gauva")
number.splice(3 , 0 , "Watermelons", "Bananas")
console.log(number);

# Finding  element to an JavaScript Array [Primitives]

const items = ["apple ", "Lemon", "Grapes"];

console.log(items.includes('Lemon'));

# Finding  element to an JavaScript Array (references)



const orders = [
    
    {id:1 , item:"Apple", quantity: 3},
    {id:2, item:"Carrot", quantity: 6},
    {id:3 , item:"onion", quantity: 10},
]

let result = orders.find(function (order) {
   return order.item === "Carrot"
}) 

console.log(result);

#  Arrow function



const orders = [
    
    {id:1 , item:"Apple", quantity: 3},
    {id:2, item:"Carrot", quantity: 6},
    {id:3 , item:"onion", quantity: 10},
]

let result = orders.find( (order) => order.item === "Carrot")
console.log(result);

# Removing an Elemrnt in Array 

const number = [1, 2, 3, 4];

//push(end) - (pop) , 
number.pop()
//unshift(start) - shift
number.shift()
//middile(splice)
number.splice(1,2)

console.log(number);

# Emptying an javaScript Array 

let  numbers = [1, 2, 3, 4,];

let another_numbers = numbers;
//solution 1 
numbers = [];

//solution 2 
numbers.length = 0;

//solution 3 
numbers.splice(0, numbers.length);

//solution 4 
while (numbers.length) numbers.pop();

console.log(numbers);

# Combining & Etracting elements Array 

const shopping_cart = [ {item: "Magi"}];
const additional_cart = ["Macthbox", "Salt", "Beans", "Masala"];
// Combine
let recipe = shopping_cart.concat(additional_cart);
shopping_cart[0].item = "Noodles";

// Extract
let extractedInfo = recipe.slice(1, 3);

console.log(extractedInfo);

console.log(recipe);

#  Spread operator
const shopping_cart = [ {item: "Magi"}];
const additional_cart = ["Macthbox", "Salt", "Beans", "Masala"];
// spread opeartor(...)
let recipe = [...shopping_cart, 45 , {name:"raj"}, ...additional_cart]
shopping_cart[0].item = "Noodles";




console.log(recipe);

# Iterating Elements 

const dailyRoutine = ["Wakeup", "Eat", "Sleep"];

//ForEach method 
dailyRoutine.forEach(routine => console.log(routine));

# Join and Split 

let postTittle = "This is my post!".toLowerCase;

let postSlug = postTittle.split(" ");

let finalSlug = postSlug.join('_');

//console.log(postSlug);
console.log(finalSlug);


# sorting an Array 

const student = [
  { id: 3, name: "Senthil" },
  { id: 8, name: "Guna" },
  { id: 1, name: "Anbu" },
]

student.sort((a, b) => {
    nameA = a.name.toLowerCase();
    nameB = b.name.toLowerCase();

    // a < b => -1
    if (nameA < nameB); return -1;

    // a> b => 1
    if (nameA > nameB); return 1;
    // a === b => 0 
    return 0;
})

console.log(student);

# (Primitives) Testing Java Script Array

// Testing is it Odd or Even 

const numbers = [1, 2, 3, 4, 5];

// two type of method (every() , some())

let isEven = numbers.every(function (value){

    return value % 2 === 0;
});
console.log("isEven:", isEven);

let isOdd = numbers.some(function (value) {
    return value % 2 === 1;
});
console.log("isOdd:" , isOdd);

# Testing elements in javascript Array (Reference types )
const items = [
    { id: 1, name: "Mobiles", isDeliverable: true },
    { id: 2, name: "Accessories", isDeliverable: true },
    { id: 3, name: "Laptop", isDeliverable: false },
    { id: 4, name: "AC", isDeliverable: true },
    { id: 5, name: "T.V", isDeliverable: false },
    
]
 //every () - method
let allDeliverables = items.every(function (value) {
    return value.isDeliverable == true;
});

console.log(allDeliverables);

// some () - method  
let notDeliverables = items.some(function (value) {
  return value.isDeliverable == false;
});

console.log(notDeliverables);

# filtering a javascript Array  method

const cart_items = [
    { id: 1, items: "Android Mobile", cost: "6500" },
    { id: 2, items: "I Phone Mobile", cost: "25000" },
    { id: 3, items: "Windows Mobile", cost: "8500" },
    
]

let affortable_phones = cart_items.filter((Value) => Value.cost < 10000)
console.log("Affortable Phone:" , affortable_phones);

# filtering a javascript Array 

const cart_items = [
    { id: 1, items: "Android Mobile", cost: 6500 },
    { id: 2, items: "I Phone Mobile", cost: 25000 },
    { id: 3, items: "Windows Mobile", cost: 8500 },
    
]

let affortable_phones = cart_items.findIndex((Value) => Value.cost > 10000)
//let affortable_phones = cart_items.find((Value) => Value.cost > 10000); 
console.log("Affortable Phone:" , affortable_phones);


# Mapping a javascript Array

const pepole = [
  { id: 1, first_name: "Ajith", last_name: "kumar" },
  { id: 2, first_name: "Anbu", last_name: "Selvan" },
  { id: 3, first_name: "Trisha", last_name: "Grace" },
  { id: 4, first_name: "Seetha", last_name: "Raman" },
];

let final = pepole.map((val) => {
    let fullName = [val.id , val.first_name, val.last_name].join(" ");
    let obj = { id: val.id , fullName}
    return obj;
});
console.log(final);

# JavaScript Chaining Methods

let products = [
  { id: 1, tittle: "Android Phone", cost: 7500 },
  { id: 2, tittle: "Gaming Computer", cost: 90500 },
  { id: 3, tittle: "HeadPhone", cost: 2400 },
];

//sorting it using lowest price.
let lowest_price = products.sort(function (a, b) {
    // a - b (ascending) ,  b - a (descending)
    return a.cost - b.cost;
})


// sort it by tittle ascending 

let sortByTittle = lowest_price.sort(function (a, b)
{
    // a < b = -1
    if (a.tittle < b.tittle) return -1;

    // a > b = 1
    if (a.tittle > b.tittle) return 1;

    return 1;
}) 


//filter it by products less than 8000 

let filtered = sortByTittle.filter(function (val) {
    return val.cost <= 8000
});


// map it like this : // Android phone -7500 

let final = filtered.map(function (val) {
    return val.tittle + " - $" + val.cost;
        
});
console.log(final);

#  JavaScript arrays - reduce method


// reduce method in references
const shoppingCart = [
  { id: 1, item: "Organic Milk", cost: 45 },
  { id: 2, item: "Bread", cost: 20 },
  { id: 3, item: "Maagi", cost: 12 },
];

const addCost = (accumlator, currentval) => accumlator + currentval.cost;


let totalaCost = shoppingCart.reduce( addCost, 10 )

console.log("Total values : ", totalaCost);

//reduce method in primitives 

const donation = [323, 324, 554, 412, 543];

let totalDonation = donation.reduce(function (previousVal, currentval) {
    return previousVal + currentval;
});
console.log("TotalDonations:" , totalDonation);

# JavaScript arrays - reduce method


// reduce method in references
const shoppingCart = [
  { id: 1, item: "Organic Milk", cost: 45 },
  { id: 2, item: "Bread", cost: 20 },
  { id: 3, item: "Maagi", cost: 12 },
];

const addCost = (accumlator, currentval) => accumlator + currentval.cost;


let totalaCost = shoppingCart.reduce( addCost, 10 )

console.log("Total values : ", totalaCost);

//reduce method in primitives 

const donation = [323, 324, 554, 412, 543];

let totalDonation = donation.reduce(function (previousVal, currentval) {
    return previousVal + currentval;
});
console.log("TotalDonations:" , totalDonation);

# JavaScript :
# sort(), find(), vs filter vs map () vs reduce
const numbers = [34, 4, 65, 12, 78];
//sort
/* let result = numbers.sort(); */

//find
/* let result = numbers.find((value) => value > 50 ) */
//filter
/* let result = numbers.filter((value) => value > 50); */
//map
/* let result = numbers.map((value) => {
    return  "#" + value
}) */
//reduce
 let result = numbers.reduce((acc, val ) => {
  return acc + val;
});
 
console.log(result);

## Javascript Arrays Interview
#  -> 1) Create an Array object
//method 1 
var products = ["Apple", "Notebook"];
console.log(products); // (2) ['Apple', 'Notebook']
//method 2
var msgArray = [];
msgArray[0] = "Hello";
console.log(msgArray); //['Hello']
//method 3
var array = new Array("Hello");
console.log(array); // ['Hello']
//method 4 
var another = Array.of(1, 2, 3);
console.log(another); // (3) [1, 2, 3]

# -> 2) Take the below array and copy it using the slice method and the for loop method.

var array = [1, 2, 3, 4, 5];
//slice
let result = array.slice();
console.log(result);

//for lop method

let tempArray = [];
for (let i = 0; i < array.length; i++) {
    tempArray[i] = array[i];
}

console.log(tempArray);

// spread operators 

let spread = [...array]
console.log(spread);

# -> 3) Empty this array:
var array = [1, 2, 3, 4, 5];
//method 1
array = [];

//method 2
array.length = 0;
 //method 3
while (array.length) {
  array.pop();
}

//method 4 
array.splice(0, array.length);

console.log(array);

# -> 4) What type is an Array set to?
var array = [1, 2, 3, 4, 5];

console.log(typeof array);

# -> 5) How can you check if something is an Array?

var array = [1, 2, 3, 4, 5];
// method 1

let obj = { id: 1 };
let other = undefined;
let string = "Anbu";

let result = Array.isArray(array);
console.log(result);

// method 2 
function checkIfArray(val) {
    if (typeof val == "string") {
         console.log("It is a an string ");
         
    } else if (typeof val == "number") {
        console.log("It is an number");
        
    } else if (typeof val == "undefined") {
        console.log("It is an undefined ");
        
    } else if (typeof val == "object") {
        console.log("It is an object ");
    }
        
    else {
        console.log("It is an array");
        
    }
}
checkIfArray(other);

# 6)Add an item to the end of an array.

var array = [1, 2, 3, 4, 5];
//method 1
array.push("Apple")
console.log(array);

// method 2 
array[array.length] = "Biscuit"
console.log(array);