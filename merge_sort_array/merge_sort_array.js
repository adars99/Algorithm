/*6. merge two sorted array
Question: How would you merge two sorted array?

Answer: I will keep a pointer for each array */

function mergeSortArray(a , b){
var merged = [], aElm = a[0], bElm=b[0], i=1, b=1;

if(a.length ===0){
return b;
}
if(b.length ===0){
return a;
}

while(aElm || bElm){
if((aElm && !bElm) || aElm < bElm){
 merged.push(aElm);
  aElm = a[i+1]
}else{
merged.push(bElm);
  bElm = b[j+1]
}
}
return merged;
}

alert(mergeSortArray([2,5,6,9], [1,2,3,29]);
