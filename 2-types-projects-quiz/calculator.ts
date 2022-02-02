/**
 * Let's make a calculator 🧮
 */
type operatorType = "add" | "substract" | "multiply" | "divide" | "remainder";
const calculate = (operator: operatorType, num1: number, num2: number) => {
  // if (operator === "add") {
  //   return num1 + num2;
  // } else if (operator === "substract") {
  //   return num1 - num2;
  // } else if (operator === "multiply") {
  //   return num1 * num2;
  // } else if (operator === "divide") {
  //   return num1 / num2;
  // } else if (operator === "remainder") {
  //   return num1 % num2;
  // }

  switch (operator) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 % num2;
    default:
      throw Error("unknown operator");
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
