const input = 18234;
//output = 18;
const input2 = 3849;
//output = 24

function sum(num) {
  const numbers = [];
  while (num) {
    numbers.push(num % 10);
    num = parseInt(num / 10, 10);
  }
  return console.log(numbers.reduce((acc, curr) => (acc += curr)));
}

sum(input2);
