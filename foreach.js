//The forEach() method calls a function (a callback function) once for each array element.

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];


   staffsDetails.forEach((staffDetail) => {
    let sentence = `I am ${staffDetail.name}, ${staffDetail.age} year old a staff of Royal Suites.`;
    console.log(sentence);
  });
  //By using destructuring with index argument 
 staffsDetails.forEach(({name,salary, currency}, index) => {
  let sentence = `Index ${index}: I am ${name} earn ${salary} in ${currency}`
   console.log(sentence)

 })
 // use the third argument
 let num = [12, 55, 70];

 num.forEach((score, index, array) => {
  console.log(array);
});


 //ex-2
  const scores = [12, 55, 70, 50];
  let total = 0;
  scores.forEach((num) => {
     total += num;
  });

  //console.log(total); 

  //ex-3
  //conditinal in a foreach() callback function
  //showing the people whose salary greater then or equal 4000 in staffdetails array
  
  staffsDetails.forEach(({name,salary}) => {
    if(salary >= 4000){
      console.log(name)
    } 
    })

    //break and continue instruction in forEach

    // scores.forEach((score) => {
    //   console.log(score);
    
    //   if (score === 70){} 
    //     //break;
    // })
//throwing the Illegal break statement and similarly in continue instruction for avoiding this error use traditional for loop for iterate the erray 

for(i=0; i< scores.length; i++){
  console.log(scores[i]);
 if (scores[i] === 70)
  break;
} 

//array with missing elements

const studentsScores = [70, , 12, 55, , 70, 47];

//using traditional for loop
for (i = 0; i < studentsScores.length; i++) {
  console.log(studentsScores[i]);     // showing undefine in place of missing elements
}

//using forEach loop

studentsScores.forEach((stundentScore) => {
  console.log(stundentScore);        // skiping the missing place
});