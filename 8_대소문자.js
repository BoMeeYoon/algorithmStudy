const input = "AAABBBcccddd";

function changeChar(input) {
  
  const arr = input.split("");
  const change = arr.reduce(
    (acc, curr) =>
      (acc +=
        curr === curr.toUpperCase() ? curr.toLowerCase() : curr.toUpperCase()),
    ""
  );
  return console.log(change);
}

changeChar(input);
