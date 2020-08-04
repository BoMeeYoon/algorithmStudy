function checkNumber(num) {
  // 10 => 2
  const result = [];

  while (num) {
    result.push(num % 2);
    num = parseInt(num / 2, 10);
  }

  return console.log(`10진수: ${num} -> 2진수: ${result.reverse().join("")}`);
}

checkNumber(6);
