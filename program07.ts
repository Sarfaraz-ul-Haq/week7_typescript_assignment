//Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.
//==============================================================================================================================================

function arrFunc(array: number[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let numArray = [1, 2, 3, 4, 5];
console.log(arrFunc(numArray)); //calling the function then logging the returned value
