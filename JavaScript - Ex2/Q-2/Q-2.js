const amount = Number(prompt("How many participants?"));
const names = [];

for (let i = 0; i < amount; i++) {
  names.push(prompt(`Enter name for participant ${i+1}:`));
}

names.sort();

const list = document.getElementById("list");

for (let name of names) {
  const li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);
}