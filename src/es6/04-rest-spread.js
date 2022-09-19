// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a,fruits[1]);

// object desrtucturing
let user = {username: 'Oscar', age:34};
let { username, age } = user;
console.log(username)
  

  // spread operator

let person = { name : 'ignacio', age: 28};
let country = 'PY';

let data = {id:1, ...person, country};
console.log(data);

// rest
function sum(num, ...values){
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(7, 1 ,2 ,3)




