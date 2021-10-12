const container = document.querySelector(".my_container");
const row = document.createElement("div");

for (let i = 1; i <= 100; i++){
  let col = document.createElement("div");
  col.className = "fizz_container";
  container.append(col);

}
