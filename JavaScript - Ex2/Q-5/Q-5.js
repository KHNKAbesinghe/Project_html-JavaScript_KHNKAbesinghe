const numbers = [];

while (true) {
  const n = Number(prompt("Enter a number:"));

  if (numbers.includes(n)) {
    console.log("Duplicate entered. Stopping.");
    break;
  }

  numbers.push(n);
}

numbers.sort((a, b) => a - b);

console.log("Numbers in ascending order:");
for (let num of numbers) {
  console.log(num);
}