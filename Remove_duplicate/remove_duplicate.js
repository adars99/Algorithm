function removeDuplicate(arr){
 var exist ={}, outArr=[], elm;
 for(var i=0; i < arr.length; i++){
  elm = arr[i];
  if(!exist[elm]){
   outArr.push(elm);
    exist[elm] = true;
  }
 }
 return outArr;
}

alert(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));
