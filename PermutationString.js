/*
Refer: https://initjs.org/all-permutations-of-a-set-f1be174c79f8

Implement a function that gets all permutations or orderings of a given string. 
For example if the input is ‘abc’, the output should be [‘abc’, ‘acb’, ‘cab’, ‘cba’, ‘bca’, ‘bac’]

Complexity
The time and space complexity of the above algorithm should be the same as
the number of items produced. The number of unique permutations of any set of size n is n!, 
therefore the time and space complexity of our algorithm is O(n!).
*/

function permutationString(str){
 var result = [];
 
 if(str.length ===1){
    results.push(str);
    return results;
 }
 
 for(let i=0;i<str.length;i++){
  let firstChar = str[i];
  let leftChar =  str.substring(0, i) + str.substring(i + 1);
  
  let innerPermutations = permutationString(leftChar);
  for(let j=0;j<innerPermutation.length;j++){
    result.push(firstChar + innerPermutation[j]);
  }
  
 }
 return result;
 
}

alert(permutationString('abc'));
