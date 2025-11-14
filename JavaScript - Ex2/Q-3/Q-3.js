const dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt(`Enter dog name ${i+1}:`));
}

dogs.sort().reverse();

const ul = document.getElementById("list");

for (let dog of dogs) {
  const li = document.createElement("li");
  li.textContent = dog;
  ul.appendChild(li);
}