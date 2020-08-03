function quickSort(input) {
  if (input.length <= 1) return input;
  const pivot = input.splice(Math.floor(input.length / 2), 1);
  const left = [];
  const right = [];

  for (let i = 0; i < input.length; i++) {
    input[i] < pivot ? left.push(input[i]) : right.push(input[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const input = [1, 3, 2, 7, 5, 6, 4, 8, 9, 10];
console.log(quickSort(input));
