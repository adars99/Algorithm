function binarySearch(arr, val){
var start = 0;
var end = arr.length - 1;
var middle = Math.floor((start + end) / 2);

while(start <= end && arr[middle] !== val) {
 if(val < arr[middle]){
   end = middle - 1;
 } else{
   start = middle + 1;
 }
 middle = Math.floor((start + end) / 2);
}

  if(arr[middle] === val){
     return middle;
  }
  return -1;
}
console.log(binarySearch([34,51,1,2,3,45,56,687], 56));
