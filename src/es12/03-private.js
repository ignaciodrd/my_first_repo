class user {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak(){
    return 'Hello'
  }
  greeting(){
    return `${this.speak()} ${this.name}`;
  }
 
  get #uAge(){
    return this.age;
  }
  set #uAge(n){
    this.age = n;
  }
};


const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);