const nums = [];
let n = Number(prompt("Enter a number (0 to stop):"));

while (n !== 0) {
  nums.push(n);
  n = Number(prompt("Enter a number (0 to stop):"));
}

nums.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
for (let value of nums) {
  console.log(value);
}