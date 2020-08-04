const log = console.log;

function checkPrime(num) {
  if (num < 1) return log(`0보다 큰 숫자를 대입하세요`);
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return log(`${num}은 소수가 아닙니다`);
  }
  num === 1 ? log(`${num}은 소수가 아닙니다`) : log(`${num}은 소수입니다`);
  return this;
}

checkPrime(10);
