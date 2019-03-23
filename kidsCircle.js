// n kids are settings in a circle
// k toys available to distribute
// i position to start from 
 // 3, 5, 7 => 2

function getLK(n, k, i){
 if(k > n ){ // more toys than kids
  return i + (k % n) -1;
 } else {
   return i + n - 1; 
 }
}
alert(getLK(3, 7, 2));
