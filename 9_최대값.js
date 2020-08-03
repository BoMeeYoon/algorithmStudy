const input = "10 9 8 7 6 20 4 3 2 1";

function getMaxNumber(input) {
  const target = input.split(" ").map((n) => parseInt(n, 10));
  target.sort((a, b) => a - b);
  return console.log(target[target.length - 1]);

  // console.log(Math.max.apply(null, target));
}

getMaxNumber(input);
