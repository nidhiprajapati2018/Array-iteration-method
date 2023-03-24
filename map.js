let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function({firstName, lastName}){
     return `${firstName} ${lastName}`                   //return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(userFullnames);

  //ex-2

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);

//ex-3
let name = 'Nidhi';
let arrayName = [...name];
 
let newName = arrayName.map( element => {
    return element + 's'
})
console.log(newName);

//ex-4
var my_array = [1,3,5,2,4];

my_array.map(function(item,index,arr) {
  console.log("item: " + item + " at index: " + index + " in the array: " + arr);
});
