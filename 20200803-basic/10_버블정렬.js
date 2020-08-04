function bubble(input) {
  const arr = input.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const input = "4 2 3 8 5".split(" ").map((n) => parseInt(n, 10));
console.log(bubble(input));
