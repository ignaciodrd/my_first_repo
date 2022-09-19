// enhanced object literals\

function newUser(user, age, country, uID) {
  return{
    user,
    age,
    country,
    id: uID
  }
}

console.log(newUser("igdrd", 28, 'Py', 1))