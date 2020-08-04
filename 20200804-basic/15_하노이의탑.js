const route = [];
const log = console.log;
function hanoi(num, start, end, temp) {
  if (num === 1) {
    route.push([start, end]);
    return;
  }
  hanoi(num - 1, start, temp, end);
  route.push([start, end]);
  log(num, "num");
  hanoi(num - 1, temp, end, start);
}

hanoi(3, "A", "C", "B");
log(route);
log(route.length);
