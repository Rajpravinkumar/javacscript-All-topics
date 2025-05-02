
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