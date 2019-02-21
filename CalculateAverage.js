// Create a calculator that calculate the mean/average of the given array input using recursion
/*Given an array, the task is to find average of that array. 
Average is the sum of array elements divided by the number of elements. Examples : Input : arr[] = {1, 2, 3, 4, 5} Output : 3 
Sum of the elements is 1+2+3+4+5 = 15 and total number of elements is 5.*/

//Without Recursion
function CalculateAverage(arr){    
       let sum = 0, average;  
      for(let i =0; i < arr.length;i++){
        sum+=arr[i] 
      }
      average = sum / arr.length; 
      alert(average);
}
CalculateAverage([1,2,3,10,4,5])

// With Recursive
 function CalculateAverageWithRecursion(arr){ 
      const arrNum = arr;
      const len = arr.length;   
        return function execute(){
        return !arrNum.length ?0 : (arrNum.pop() / len) + execute()
        }();
      
    }
