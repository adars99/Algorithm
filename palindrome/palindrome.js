13. check palindrome
Question: How will you verify a word as palindrome?

Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.

function isPalinDrome(str){
var len = str.length;
for(var i=0;i<len/2;i++){
  if(str[i] !== str[len - 1 -i])
    return false;
  else
    return true;
  } 
}
alert(isPalinDrome('madam'));
