//현재연도 출력하기

function getFullYear() {
  const today = new Date();
  return console.log(
    Math.floor(today.getTime() / (60 * 60 * 24 * 365 * 1000)) + 1970
  );
  // console.log(today.getFullYear());
}

getFullYear();
