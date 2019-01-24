function isPrime(n){
 var divisor = 2;
 
 while(n > divisor){
  if(n % divisor === 0 ) { return false; }
  else { divisor++}
 }
 return true;
}
alert(isPrime(137));
alert(isPrime(121));
