11. First non repeating char
Question: How could you find the first non repeating char in a string?

Answer: You must ask follow up questions.

Clarification: Is it case sensitive?

Interviewer: interviewer might say no.

Clarification: is it very long string or couple hundred?

Interviewer: Why does that matter

you: for example, if it is a very long string say a million characters and i want to check whether 26 English characters are repeating. I might check whether all characters are duplicated in every 200 letters (for example) other than looping through the whole string. this will save computation time.

Interviewer: For simplicity, you string is "the quick brown fox jumps then quickly blow air"

Clarification: (silly question) ascii or unicode.

function firstNonRepeatedChar(str){
 var char, countChar = {};
 
 for(var i = 0; i< str.length; i++){
   char = str[i];
  if(countChar[char]){
  countChar++;
    }else
  countChar = 1;
 }

for(var j in charCount){
if(charCount[j] === 1){
return j
}
}
}
firstNonRepeatedChar(''the quick brown fox jumps then quickly blow air'');
