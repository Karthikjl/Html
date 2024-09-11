function RollDice() {
  const inputnum = document.getElementById("inputnum").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];
  for (let i = 0; i < inputnum; i++) {
    const Randvalue = Math.floor(Math.random() * 6) + 1;
    values.push(Randvalue);
    images.push(
      `<img src ="Dice_Images/${Randvalue}.jpg" alt="Dice${Randvalue}""/>`
    );
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(" ");
}
