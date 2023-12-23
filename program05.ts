//Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.
//======================================================================================================================================

function funcName(positiveInt: number) {
  for (let i = 1; i <= positiveInt; i++) {
    let x = positiveInt * i;
    console.log(x);
  }
}

funcName(5);
