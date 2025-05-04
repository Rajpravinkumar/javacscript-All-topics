// Switch case condition

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