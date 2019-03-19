/* Lets say you have two strings:
'the' and 'The cop has a  nice little hat.'
Write a function that will check each character from first string and count the same in the second string.
Return the total count. For example, character 't' occurred 3 times 
(case sensitive), character 'h' occurred 3 times and character 'e' occurred 3 times in 
the second string. Total count = 9. */

function findCount(str1, str2){
 var charMap = {};
 var count = 0;
 for(var i=0;i<str1.length;i++){
   var charLen = str2.match(new RegExp(str1[i], 'g')).length;
   if(charLen < 0 ){ continue;}
   if(!charMap[str1[i]]) {
     charMap[str1[i]] = str1[i];
     count += charLen;
   }
 }
 return count;
}

console.log(findCount('the', 'The cop has a nice little hat.')); 
