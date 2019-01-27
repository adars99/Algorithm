## 8. string reverse
Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string

function reverseString(str){
  var revstr = '', i;
  for(i=str.length - 1; i>=0; i--){
   revstr += str[i]
  }
return revstr;
}

alert(reverseString('Hi Adarsh'));

Interviewer: You know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there any different way, you can reverse a string?
Answer: sure. i can use an array and also add some checking. if string is null or other than string this will fail. let me do some type check as well. Using this array is like using string buffer in some server side languages.

function reverseString(str){
var revstr = [], i;
  if(!str || typeof str !=='string' || str.length <2) { return str}
  for(i=str.length - 1; i>=0; i--){
   revstr.push(str[i])
  }
return revstr.join('');
}

alert(reverseString('Hi Adarsh'));

Interviewer: What is the run time complexity?

You: O(n)

Interviewer: Can you make this better?

You: I can loop through half of the index and it will save little bit.
(this is kind of useless, might not impress interviewer)

function reverse(str) {
  str = str.split('');
  var len = str.length,
      halfIndex = Math.floor(len / 2) - 1,
      revStr;
  for (var i = 0; i <= halfIndex; i++) {
    revStr = str[len - i - 1];
    str[len - i - 1] = str[i];
    str[i] = revStr;
  }
  return str.join('');
}
alert(reverseString('Hi Adarsh'));

