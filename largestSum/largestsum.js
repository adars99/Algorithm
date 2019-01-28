/*17. Largest Sum
Question: How would you find the largest sum of any two elements?

Answer: this is actually very simple and straight forward. Just find the two largest number and return sum of them*/

function largestSum(arr){
 var largest, secondlargest;
 
 if(arr.lendth <2) return null;
 
  largest = arr[0];
  secondLargest = arr[1];
  
  if(largest < secondLargest){
   largest = arr[1];
   secondLargest = arr[0];
  }
  
  for(var i=2; i < arr.length ; i++){
   if(arr[i] > largest){
   secondLargest = largest;
    largest = arr[i];
   } else if (arr[i] > secondLargest){
   secondLargest = arr[i]
   }
  }
  return largest + secondLargest;
}

alert(largestSum([3,5,6,7,3,5]));

