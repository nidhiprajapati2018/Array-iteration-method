let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
console.log(Object.entries(obj)); // entrie object
console.log(Object.keys(obj));
console.log(Object.values(obj));

//Ex-2
let array1 = ['h', 'e', 'y'];
// Copying array1 to array2 
let array2 = [...array1];
// Printing array2
console.log(array2);

//Ex-3
function multiply(number1, number2, number3) {
    console.log(number1 * number2 * number3);
  }
  let numbers = [1,2,3];
  // Calling multiply function and passing arguments 
  // using spread operator
  multiply(...numbers);

 //Ex-4
 const oldobj = {
    name:'nidhi',
    height: 5
 }

 const newobj = {
    ...oldobj, age: 30
 }

 console.log(newobj);

 //Ex-5

 const msum = (...arg) => {
    let sum = 0;
    for (let i = 0; i < arg.length; i++ ){
        sum += arg[i];
    }
    console.log(sum)
 }

 msum(1,2,3,4,5,6)




