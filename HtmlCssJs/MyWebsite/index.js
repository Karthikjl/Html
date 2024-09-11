// var x= 10;
// var y = 20;

// document.getElementById("myH1").textContent = x;

// document.getElementById("myPhara").textContent = y;
// alert(`the total is ${x+y}`);

document.getElementById("changeName").onclick = changeName;

function changeName() {
  var name = document.getElementById("myinput").value;
  if (name != "") {
    document.getElementById("textofname").textContent = `Hello ${name}`;
  }
}

// let numbers = [1, 2, 3, 4, 5];

// function display(numbers) {
//   console.log(numbers);
// }

// numbers.forEach(display);

// Arrow function
// const helo = (hello) => {
//   console.log(hello);
// };
// const hello = "karthik";
// helo(hello);

// static keyword

// class MathUtil {
//   static pi = 3.14159;
//   static getDiameter(radius) {
//     let diameter = radius * 2;
//     return diameter;
//   }
// }
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getDiameter(50));

// let num1 = 1;
// let num2 = 2;
// let num3;

// num3 = num1;
// num1 = num2;
// num2 = num3;

// console.log(`${num1},${num2}`);

// const date = new Date();
// const day = date.getDay();
// const year = date.getFullYear();
// const month = date.getMonth();

// console.log(`${day}-${month}-${year}`);
