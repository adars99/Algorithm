// Longest Substring Without Repeating Characters
// O(n) time, O(1) space
const lengthOfLongestSubString = (str)=> {
 let results = {}, maxresult = 0;

 for(let i=0;i < str.length; i++){
   if(!results.includes(str[i])){
    results.push(str[i])
    }else{
    maxresult = i;
    }
  }
  return maxresult;
}

function lengthOfLongestSubstring(str) {
      let maxLen = 0
      let res = []
      for(let s of str) {
        if(res.includes(s)) {
          if(res.length > maxLen) {
            maxLen = res.length
          }
          res.push(s)
          let idx = res.indexOf(s)
          res = res.slice(idx + 1)
        } else {
          res.push(s)
        }
      }
      if(res.length > maxLen) {
        maxLen = res.length
      }
      return maxLen
    }
