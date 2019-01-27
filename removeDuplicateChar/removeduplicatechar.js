12. remove duplicate char
Question: How will you remove duplicate characters from a sting?

You: This is very similar to first non repeating char. You will asks similar question. Is it case sensitive.

If interviewer says, this is case sensitive then life become easier you. If he says no. you can either use string.toLowercase() to make whole string lower. he might not like it. because return string will not posses the same case. So

function removeDuplicateChar(str){
var char, charCount ={}, newStr = [];

for(var i=0;i<str.length;i++){
 char = str[i];
 if(charCount[char]){
 charCount[char]++;
 }else
 charCount = 1;
}
for (var j in charCount){
if(charCount[j]==1){
  newStr.push(j);
}
newStr.join(' ');
}
removeDuplicateChar('Learn more javascript dude');
