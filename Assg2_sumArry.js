var array = [1,2,3,4,5];
var sum = 0;
var mult = 1;
for (var i in array){
    sum = sum + array[i];
    mult = mult * array[i];
    
}
console.log("Sum of the elements of array :" + sum);
console.log("Product of the elements of array :" + mult);