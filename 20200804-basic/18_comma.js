function comma(input) {
  let result = [];

  function inner(input) {
    if (input.length < 3) return result.unshift(input);

    const target = input.split(input.length - 3);

    result.unshift("," + target[1]);

    inner(target[0]);

    return result.join("");
  }
  return inner(input);
}

const input = "123456789";
console.log(comma(input));
