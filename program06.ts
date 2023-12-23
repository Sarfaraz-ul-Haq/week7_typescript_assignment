//Write a program having an array of numbers. If the number is negative it should remove the negative number from the array.
//=========================================================================================================================

let numArray = [-3, -2, -1, 0, 1, 2, 3];
numArray = numArray.reverse(); //reversed the array so that when I pop out a value, the index of other values doesn't change [3, 2, 1, 0, -1, -2, -3]

//Now looping through the reversed array in reverse order to check if a negative value is present. If there is a negative value then it will be popped out without changing the index of other values.
for (let i = numArray.length - 1; i >= 0; i--) {
  if (numArray[i] < 0) {
    numArray.pop();
  }
}

console.log(numArray); //prints [3, 2, 1, 0]
