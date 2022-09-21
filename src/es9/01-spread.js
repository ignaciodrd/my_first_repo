const user = { username: 'ignadrd', age: 28, country: 'PY' };
const { username, ...values} = user;
console.log(username);
console.log(values);