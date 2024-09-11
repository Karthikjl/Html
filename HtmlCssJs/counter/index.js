var num = document.getElementById("num").textContent;
num = Number(num);
document.getElementById("Decrease").onclick = function () {
  num = --num;
  document.getElementById("num").textContent = num;
};

document.getElementById("Reset").onclick = function () {
  num = 0;
  document.getElementById("num").textContent = num;
};

document.getElementById("Increase").onclick = function () {
  num = ++num;
  document.getElementById("num").textContent = num;
};
