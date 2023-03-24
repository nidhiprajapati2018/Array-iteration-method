// function isBigEnough(value) {
//      return value >= 10;
//   }
  
  const filtered = [12, 5, 8, 130, 44].filter(element => {element >=10}
  );
  console.log(filtered);

  //Ex-2
  function canVote(age) {
    return age >= 18;
}
 var filtered1 = [24, 33, 16, 40].filter(canVote);
    console.log(filtered1);

//Ex-3

function isPositive(value) {
    return value > 0;
  }
   
  var filtered2 = [112, 52, 0, -1, 944].filter(isPositive);
  console.log(filtered);

  //Ex-4

  function isEven(value) {
    return value % 2 == 0;
  }
   
  var filtered3 = [11, 98, 31, 23, 944].filter(isEven);
  console.log(filtered);