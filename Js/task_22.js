// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output : [4, 5, 8, 10, 12, 13]
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
const add1 = [array1[0] + array2[0]];
const add2 = [array1[1] + array2[1]];
const add3 = [array1[2] + array2[2]];
const add4 = [array1[3] + array2[3]];
const add5 = [array1[4] + array2[4]];
const add6 = [array2[5]];
const join = add1.concat(add2, add3, add4, add5, add6);
console.log(join);