// Math Object in js provides built-in mathematical constant & function - No need to create a new instance ('Its static)

/* 1. 
Common Math Properties
Property | 	Description	 | Value
Math.PI  |	π (Pi)	|3.14159...
Math.E	Euler's number	2.71828...
Math.LN2	Natural log of 2	0.693...
Math.SQRT2	Square root of 2	1.414... */

/* 2. 
Useful Math Methods

Method	Description	Example
Math.round(x)	Rounds to nearest integer	Math.round(4.7) → 5
Math.floor(x)	Rounds down to nearest integer	Math.floor(4.9) → 4
Math.ceil(x)	Rounds up to nearest integer	Math.ceil(4.1) → 5
Math.trunc(x)	Removes decimal part	Math.trunc(4.9) → 4 */

/*
 Arithmetic & Roots
Method	Description	Example
Math.pow(x, y)	x to the power of y	Math.pow(2, 3) → 8
Math.sqrt(x)	Square root of x	Math.sqrt(16) → 4
Math.abs(x)	Absolute value	Math.abs(-7) → 7 */

/* 
Random & Min/Max
Method	Description	Example
Math.random()	Random number between 0 and 1	Math.random() → 0.28 (example)
Math.min(...x)	Minimum of values	Math.min(3, 1, 4) → 1
Math.max(...x)	Maximum of values	Math.max(3, 1, 4) → 4 */
let x = 7;
let y = 2;
let math = Math.abs(x);
console.log(math);

//Random interger Between Two Values

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) ;
}
console.log(getRandomInt(1,10));
