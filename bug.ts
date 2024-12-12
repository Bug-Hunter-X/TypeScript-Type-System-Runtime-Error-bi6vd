function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 2); // Type error is not thrown at compile time
console.log(result); // Outputs "hello2"