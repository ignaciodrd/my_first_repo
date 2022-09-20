
function* iterate(array) {
  for(let value of array){
    yield value;
  }
};

const it = iterate(['oscar', 'pedro', 'ana', 'ulises', 'maria']);
console.log(it.next().value);
console.log(it.next().value);

console.log(it.next().value);
console.log(it.next().value);
