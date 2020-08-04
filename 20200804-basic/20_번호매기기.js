function binding(students) {
  let result = [];
  students.sort();
  for (const index in students) {
    result.push({ 번호: parseInt(index, 10) + 1, 이름: students[index] });
    console.log(`번호: ${parseInt(index, 10) + 1}, 이름: ${students[index]}`)
  }
  return result;
}

const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];

console.log(binding(students));
