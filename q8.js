let limit = 5;

for (let i = 1 ; limit ; i++){
    let temp = i;
    const history = [];
    while(!history.includes(temp)) {
        history.push(temp);
        let sum = 0;
        // console.log(temp);

        // calculate sum of  square of digits
        while(temp > 0) {
            const digit = temp%10;
            sum += digit**2;
            temp = (temp-digit)/10;
        }
        temp = sum;
    }
   if (temp === 1){
       console.log(i + " is a happy number");
       limit--;
   }
}