var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
  if(true){
    var fruit1 = 'Apple'; // existe global, function scope
    let fruit2 = 'Kiwi'; // solo puede ser accedida dentro del bloque, block scope
    const fruit3 = 'Banana'; // solo puede ser accedida dentro del bloque, block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();