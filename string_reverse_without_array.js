// Reverse a string

let str = process.argv[2]
let res = '';
for (let i = 0; i < str.length; i++) {
  res = str[i] + res;
}
console.log(res)