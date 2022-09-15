function newUser(name, age, country){
  var name = name || 'Oscar';
  var age = age || 34;
  var country = country || 'MX';
  console.log(name, age, country)
}

newUser();
newUser('David', 15, 'CO');


function newAdmin (name='Pedro', age=24,contry='CL'){
  console.log(name,age,contry);
}

newAdmin();