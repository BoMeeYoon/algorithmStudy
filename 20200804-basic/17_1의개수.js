function counter(input = null) {
  let result = 0;
  if (!input) {
    for (let i = 0; i < 1000; i++) {
      input += `${i + 1}`;
    }
  }
  result = input.match(/1/g).length;
  return result;
}

console.log(counter());
