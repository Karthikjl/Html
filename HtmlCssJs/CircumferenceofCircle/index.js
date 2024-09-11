const PI = 3.14159;
var radius;
var circumference;

document.getElementById("btncir").onclick = function showCir() {
  radius = Number(document.getElementById("Radius").value);

  circumference = 2 * PI * radius;

  document.getElementById("ShowCir").textContent = `Circumference of the circle is ${circumference}cm`;
};
