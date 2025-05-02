// BitWise Operators


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
 