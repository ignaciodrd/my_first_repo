// declarar
class User{};
// instancia de una clase:
// const newUser = new user()

class user {
  // metodos
  greeting(){
    return 'hello';
  }
};

const igdrd = new user();
console.log(igdrd.greeting());
const babeloper = new user();
console.log(babeloper.greeting());

// constructur

class user {
  constructor(){
    console.log('Nuevo usuario');
  }
  greeting(){
    return 'hello';
  }
}

const david = new user();

// this 
class user{
  constructor(name){
    this.name = name;
  }
  // metodos
  speak(){
    return 'hello';
  }
  greeting(){
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');
console.log(ana.greeting());

//setter and getter

class user {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  // metodos
  speak(){
    return 'Hello'
  }
  greeting(){
    return `${this.speak()} ${this.name}`;
  }
  get uAge(){
    return this.age;
  }
  set uAge(n){
    this.age = n;
  }
};


const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);