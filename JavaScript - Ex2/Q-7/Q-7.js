const sides = Number(prompt("Enter number of sides:"));

function roll(s) {
  return Math.floor(Math.random() * s) + 1;
}

const ul = document.getElementById("list");

let r = 0;
while (r !== sides) {
  r = roll(sides);
  const li = document.createElement("li");
  li.textContent = r;
  ul.appendChild(li);
}