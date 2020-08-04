const log = console.log;

function check(input) {
  let result = false;
  let counter = 0;
  for (let index in input) {
    switch (input[index]) {
      case "(":
      case "{":
      case "[":
        counter++;
        break;
      case ")":
      case "}":
      case "]":
        counter--;
        break;
    }
/*
  input[index] === "("
    ? counter++
    : input[index] === "{"
    ? counter++
    : input[index] === "["
    ? counter++
    : counter--;
*/
  }
  if (counter !== 0) return result;

  const arr = [];
  for (let index in input) {
    switch(input[index]) {
      case "(":
      case "{":
      case "[":
        arr.push(input[index]);
        break;
      case ")":
      case "}":
      case "]":
        arr.splice(arr.indexOf(input[index]), 1);
        break;
    }
  }
/*    if (input[index] === "(") {
      arr.push("(");
    }
    if (input[index] === ")") {
      if (!arr.length) return result;
      arr.splice(arr.indexOf("("), 1);
    }
    if (input[index] === "{") {
      arr.push("(");
    }
    if (input[index] === "}") {
      if (!arr.length) return result;
      arr.splice(arr.indexOf("{"), 1);
    }
    if (input[index] === "[") {
      arr.push("(");
    }
    if (input[index] === "]") {
      if (!arr.length) return result;
      arr.splice(arr.indexOf("["), 1);
    }
  }
*/
  return (result = true);
}

const input = "( ( ) )".split(" ");
log(check(input));
