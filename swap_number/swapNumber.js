/*7. swap number without temp
Question: How would you swap two numbers without using a temporary variable?*/

function swapNumber(a,b){
 a = a + b; //3 + 4 = 7
 b = a - b;  // 7 - 4 = 3 
 a = a - b; // 7 - 3 = 4 

alert(a)
alert(b)
}

swapNumber(3,4);
