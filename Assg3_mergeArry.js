let array1 = [1,2,3];
let array2 = [2,30,1];
let array3 = array1.concat(array2);
console.log(array3);

let array4 = array3.filter((c, index) => {
    return array3.indexOf(c) === index;
});

console.log(array4);
