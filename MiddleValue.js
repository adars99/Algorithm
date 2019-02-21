//Finding the most middle value in an array

function MiddleValue(arr){
 if(arr > 1){ 
  const middleArrayIndex = Math.floor((arr.length -1) /2);
  console.log(arr[middleArrayIndex]);
 }
}
MiddleValue([1,2,3,4,5]);
