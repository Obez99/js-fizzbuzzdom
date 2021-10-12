const container = document.querySelector(".my_container");
const row = document.createElement("div");

for (let i = 1; i <= 100; i++){
  let col = document.createElement("div");
  col.className = "fizz_container";
  container.append(col);
  col.textContent = i;

  if(i % 3 === 0){
  col.textContent = "fizz";
  col.style.backgroundColor = "rgb(" + 11 + "," + 214 + "," + 161 + ")";
  }

  if(i % 5 === 0){
  col.textContent = "buzz";
  col.style.backgroundColor = "rgb(" + 255 + "," + 209 + "," + 102 + ")";
  }

  if(i % 3 === 0 && i % 5===0){
  col.textContent = "fizzbuzz";
  col.style.backgroundColor = "rgb(" + 240 + "," + 70 + "," + 111 + ")";
  }
}
