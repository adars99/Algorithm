/* input = [1,2,3,2]
   output = [9,1,4,4]
   Time Complexity = O(N^2)
*/
function same(arr1, arr2){

  if(arr1.length !== arr2.length){
   return false;
  }

for(let i=0;i<arr1.length;i++){
 let currentIndex = arr2.indexOf(arr1[i] ** 2);
    if(currentIndex === -1) { return false }
     //remove the array value one by one if found
     arr2.splice(currentIndex, 1);
  }
  return true;
}
alert(same([1,2,3,2],[9,1,4,4]));

/* second O(n), Nested loop is bad than single loop */

function same(arr1, arr2){
 if(arr1.length!==arr2.length){ return false }
 
let exist1 = {};
let exist2 = {};

for(let val of arr1){
     exist1[val] = (exist1[val] || 0) + 1 
     console.log(exist1[val])
}; 
  console.log(exist1)
  
for(let val of arr2){ exist2[val] = (exist2[val] || 0) + 1 };

for(let key in exist1){ 
  if(!(key ** 2 in exist2)) { return false }

  if(exist2[key ** 2] !==exist1[key]) { return false }
}
return true;
}

console.log(same([4,2,3,2],[9,16,4,4]));
