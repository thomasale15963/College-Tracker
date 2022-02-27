let x = {
  name: "one",
};

let y = {
  age: 32,
};

let z = {
  ...x,
  ...y,
};

console.log(z);
