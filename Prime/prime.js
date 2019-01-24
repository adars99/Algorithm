function(n){
 var divisor = 2;
 
 while(n > divisor){
  if(n / divisor) { return false; }
  else { divisor++}
 }
 return true;
}
