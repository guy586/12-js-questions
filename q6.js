"use strict";

let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;
let avgMark = (David + Vinoth + Divya + Ishitha + Thomas) / 5;
if (avgMark < 60){
  console.log("Average grade: F");
} else if (avgMark < 70){
    console.log("Average grade: D");
} else if (avgMark < 80){
    console.log("Average grade: C");
} else if (avgMark < 90){
    console.log("Average grade: B");
} else if (avgMark < 100){
    console.log("Average grade: A");
}