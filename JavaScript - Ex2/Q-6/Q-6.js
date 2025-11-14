function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const ul = document.getElementById("list");
let r = 0;

while (r !== 6) {
  r = rollDice();
  const li = document.createElement("li");
  li.textContent = r;
  ul.appendChild(li);
}