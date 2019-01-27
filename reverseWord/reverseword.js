9. reverse words
Question: How would you reverse words in a sentence?

Answer: You have to check for white space and walk through the string. Ask is there could be multiple whitespace.

function reverseWord(str){
var result = "";
        var wordArray = str.split(" ");
        for(var i = wordArray.length - 1; i >= 0; i--) {
            result += wordArray[i] + " ";
        }
        return result.trim();

}

alert(reverseWord("Hi Adarsh"))
