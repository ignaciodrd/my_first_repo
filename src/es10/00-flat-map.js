//  flat
const array = [1,1,2,5,4,7,8,3,[100,500,600,[33,55]]];
console.log(array.flat(2));

// flatmap

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v*2]));