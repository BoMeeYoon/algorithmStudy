function quickSort(input) {
  if (input.length <= 1) return input;
  const arr = input.slice();
  const pivot = arr.splice(Math.floor(arr.length / 2), 1);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const input = [1, 3, 2, 7, 5, 6, 4, 8, 9, 10];
console.log(quickSort(input));

