function linear_search(arr, val) {
  for(let i=0;i<arr.length;i++){
  if(arr[i] === val) return i
  }
  return -1;
}

console.log(linear_search([34,51,1,2,3,45,56,687], 56));
