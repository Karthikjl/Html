let mybtn = document.getElementById("mybtn");
let myh1 = document.getElementById("myh1");
const min = 1;
const max = 100;
let attemps = 0;
let randnum = Number(Math.floor(Math.random() * max) + min);
mybtn.onclick = function Guessnumber() {
  let myinput = Number(document.getElementById("myinput").value);

  if (isNaN(myinput) || myinput < min || myinput > max) {
    myh1.textContent = `Enter only number between ${min} to ${max}`;
  } else if (myinput === randnum) {
    attemps++;
    myh1.textContent = `You guessed the number correctly! It's ${randnum} it took ${attemps} attempts,
    Try Again`;
    attemps = 0;
    randnum = Number(Math.floor(Math.random() * max) + min);
  } else if (myinput > randnum) {
    attemps++;
    myh1.textContent = `Guess Lower`;
  } else if (myinput < randnum) {
    attemps++;
    myh1.textContent = `Guess Higher`;
  }
};
