function primeFactor(n){
 var divisor = 2, factor = []
 while(n > 2){
  if(n % divisor === 0) {
   n = n / divisor
   factor.push(divisor)
  }else{ divisor ++ }
 }
 return factor
}

alert(primeFactor(121))
