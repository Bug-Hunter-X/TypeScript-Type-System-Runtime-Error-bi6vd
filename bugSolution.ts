function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Invalid input: both parameters must be numbers");
  }
  return a + b;
}

let result1 = add(1, 2); // Correct usage: Outputs 3
console.log(result1);

try {
  let result2 = add("hello", 2); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message);
}
