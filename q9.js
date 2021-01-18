"use strict";

for (let x = 1 ; x <= 9 ; x++)
{
  for (let y = 0 ; y <= 9 ; y++)
  {
    for (let z = 0 ; z <= 9 ; z++)
    {
      let sumCube = (Math.pow(x,3) + Math.pow(y,3) + Math.pow(z,3));
      let num = (x * 100 + y * 10 +  z);
      if (sumCube === num) {
        console.log(sumCube);  
      }
    }  
  }
}