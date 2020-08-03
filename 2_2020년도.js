function checkDay(month, date) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const targetDate = new Date(`2020-${month}-${date}`);
  return days[targetDate.getDay()];
}

console.log(checkDay(8, 5));
