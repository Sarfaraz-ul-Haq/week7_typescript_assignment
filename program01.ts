//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function arrayFunc(arr: string[], index: number, value: string) {
  arr.splice(index, 0, value);
  return arr;
}

//Now using this function
let fruits = ["guava", "mango", "lychee", "strawberries", "apple"];
console.log(arrayFunc(fruits, 2, "peach")); //peach inserted in 2nd index
                                            //and elements starting from 
                                            //2nd index are shifted to one
                                            //index higher






