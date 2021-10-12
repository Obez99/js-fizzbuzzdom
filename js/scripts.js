const container = document.querySelector(".container");
const row = document.createElement("div");
let col = document.createElement("div");
row.classList.add("row");
col.classList.add("col");
container.append(row);

for (let i = 1; i <= 100; i++){
  row.append(col);

  //col = `<div class="col">${i}</div>`;
  //row.innerHTML += col;
}
