const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2020-12-15');
console.table(matchers);