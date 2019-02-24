/*You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
Reference : https://wsvincent.com/javascript-two-sum-find-all-pairs-match-target-value/
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8*/

// O(n^2) time
const twoSum = (arr, target) => {
  let results = [];
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        results.push([arr[i], arr[j]])
      }
    }
  }
  return results;
}

This solution works but at O(n^2) time complexity we can do much better.
which has a time complexity of O(n)

const twoSum = (nums, target)=>{

let results = [], maps = {};

 for (let i=0;i<nums.length; i++){
   if(maps[nums[i]] !== undefined){
     results.push([maps[nums[i]], nums[i]])
   } else{
     maps[target - nums[i]] = nums[i];
   }
 }
 return results;
}
const arr = [7, 0, -4, 5, 2, 3];

alert(twoSum(arr, 5)); 
