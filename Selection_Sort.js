function selection_sort(arr){
 for(let i=0;i<arr.length;i++){
  var lowest = i;
  
  for(let j=i+1; j < arr.length;j++){
   if(arr[j] < arr[lowest]) {
    lowest = j
   }
 }
 
 if(i !==lowest){
    var temp = arr[i];
     arr[i] = arr[lowest];
     arr[lowest] = temp;
   }
  }
 return arr;
}
console.log(selection_sort([8, 1, 2, 3, 4, 6, 7]));
