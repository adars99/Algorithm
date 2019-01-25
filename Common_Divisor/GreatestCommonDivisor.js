function greatestCommonDivisor(num1, num2){
 var divisor = 2, greatestDivisor = 1;
 if(num1 < 2 || num2 < 2){ return 1; }
 while( num1 >= divisor && num >=divisor){
 if(num1 % divisor === 0 && num2 % divisor === 0){
   greatestDivisor = divisor;
  }
   divisor++;
  }
  return greatestDivisor;
}

function greatestDivisor(num1, num2){
 if(num2 === 0){
   return num1;
 }else
 return greatestDivisor(num2, num1 % num2);
}
