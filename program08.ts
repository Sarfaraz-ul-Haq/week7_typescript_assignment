//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
//=====================================================================================================================================================================================================================================================================================

//User input (list of temperatures in C)
let userInputCelcius = [1, 10, 24, 30, 45];

//Function to convert temperature in F to C
function convertToFahrenheit(tempInCelcius: number) {
  let F = (tempInCelcius * 9) / 5 + 32;
  return F;
}

//New array for the fahrenheit values
let arrF = [];

//Looping through the "userInputCelcius" array to perform conversion from C to F of each value by using above written function
for (let i = 0; i < userInputCelcius.length; i++) {
  arrF.push(convertToFahrenheit(userInputCelcius[i]));
}

console.log(arrF);
