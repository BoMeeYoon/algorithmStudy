const log = console.log;

function check(input) {
  const arr = input.slice().sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) return false;
  }
  return true;
}

const input = "1 2 3 4 5".split(" ").map((n) => parseInt(n, 10));
const input2 = "1 4 2 6 3".split(" ").map((n) => parseInt(n, 10));

console.log("input", check(input));
console.log("input2", check(input2));
