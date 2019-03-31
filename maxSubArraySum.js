/* find the max sum of given number e.g. we have an array and given number 3 then we need to add max three number

input = [2,6,9,2,1,8,5,6,3], num=3, result = 8,5,6 , total =19 */

function maxSubArraySum(arr, num){
 let maxsum =0;
 let tempSum = 0;
 
 if(arr.length < num) return null;
 
 for(let i=0;i<num;i++){ maxsum += arr[i];}
 //console.log(maxsum)
  tempSum = maxsum;
  
 for(let j=num;j<arr.length;j++){
    tempSum = tempSum - arr[j - num] + arr[j];
   maxsum = Math.max(maxsum,tempSum);
 }
 return maxsum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3));

 
