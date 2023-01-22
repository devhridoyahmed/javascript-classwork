// 15. Less Than 100?

function lessThan100(firstNum, secondNum){
   return (firstNum + secondNum < 100);
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

// another solution

function lessThan100(firstNum, secondNum){
   if (firstNum + secondNum < 100){
      return "true";
   } else {
      return "false";
   }
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));