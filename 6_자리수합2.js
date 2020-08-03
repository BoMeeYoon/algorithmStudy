function sum(targetNum) {
  const numbers = [];
  let sumNumber = 0;

  for (let i = 0; i < targetNum; i++) {
    numbers[i] = i + 1;
  }
  numbers.forEach((num) => {
    while (num) {
      sumNumber += num % 10;
      num = parseInt(num / 10, 10);
    }
  });
  return console.log(sumNumber);
  // const arr = number.split("");
  // return console.log(arr.reduce((acc, curr) => (acc += parseInt(curr, 10)), 0));
}
sum(20);
