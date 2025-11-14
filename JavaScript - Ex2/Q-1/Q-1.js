const numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(Number(prompt(`Enter number ${i+1}/5:`)));
}

console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}