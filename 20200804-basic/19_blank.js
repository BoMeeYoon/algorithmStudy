function blank(input) {
  let result = "";
  const limit = 50;
  const mid = Math.floor((limit - input.length) / 2);
  const str = input.padStart(mid, "=");
  result = str.padEnd(limit, "=");
  return result;
}

const input = "hi";
console.log(blank(input));
