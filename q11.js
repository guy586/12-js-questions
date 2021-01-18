"use strict";

let num1 = 2154;
let num2 = 458;
let answer = 1;
for (let i = 1 ; i < num1 && i < num2 ; i++) {
  if (num1 % i === 0 && num2 % i === 0){
      answer = i;
  }
    
}
console.log(answer);