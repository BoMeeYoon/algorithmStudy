function diff(nationWidth) {
  const korea = nationWidth.korea;
  delete nationWidth.korea;

  const entries = Object.entries(nationWidth);
  const values = Object.values(nationWidth);
  let diff = Math.max.apply(null, values);
  let min = [];
  for (const index in entries) {
    if (Math.abs(values[index] - korea) < diff) {
      min = entries[index];
    }
    diff = Math.abs(values[index]);
  }
  return `가장 면적 차가 작은 나라는 ${min[0]}이고, 차이는 ${Math.abs(
    min[1] - korea
  )}입니다`;
}

const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

console.log(diff(nationWidth));
