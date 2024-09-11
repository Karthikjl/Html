document.addEventListener("DOMContentLoaded", function () {
  let passshow = document.getElementById("passshow");
  let copyButton = document.getElementById("copybtn");

  function passwordGenerator(
    IncludepasswordLength,
    IncludelowerCase,
    IncludeupperCase,
    Includenumbers,
    Includesymbols
  ) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=";

    let allowedChar = "";
    let Password = "";

    allowedChar += IncludelowerCase ? lowerCase : "";
    allowedChar += IncludeupperCase ? upperCase : "";
    allowedChar += Includenumbers ? numbers : "";
    allowedChar += Includesymbols ? symbols : "";

    if (IncludepasswordLength <= 0) {
      return "Password Length must be at least 1";
    }
    if (allowedChar.length === 0) {
      return "At least one set of characters needs to be selected.";
    }

    for (let counter = 0; counter < IncludepasswordLength; counter++) {
      Password += allowedChar.charAt(
        Math.floor(Math.random() * allowedChar.length)
      );
    }

    return Password;
  }

  document.getElementById("btn").onclick = function () {
    const IncludepasswordLength = Number(
      document.getElementById("length").value
    );
    const IncludelowerCase = document.getElementById("Lowercase").checked;
    const IncludeupperCase = document.getElementById("Uppercase").checked;
    const Includenumbers = document.getElementById("Numbers").checked;
    const Includesymbols = document.getElementById("Symbols").checked;

    const generatedPass = passwordGenerator(
      IncludepasswordLength,
      IncludelowerCase,
      IncludeupperCase,
      Includenumbers,
      Includesymbols
    );

    passshow.textContent = `Generated Password: ${generatedPass}`;

    if (
      generatedPass === "Password Length must be at least 1" ||
      generatedPass === "At least one set of characters needs to be selected."
    ) {
      copyButton.disabled = true;
    } else {
      copyButton.disabled = false;
    }
  };

  document.getElementById("copybtn").onclick = function () {
    copyPassword();
  };

  function copyPassword() {
    const passwordText = passshow.textContent.replace(
      "Generated Password: ",
      ""
    );
    if (
      passwordText !== "Password Length must be at least 1" &&
      passwordText !== "At least one set of characters needs to be selected."
    ) {
      navigator.clipboard.writeText(passwordText).then(
        function () {
          alert("Password copied to clipboard!");
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
    } else {
      alert(
        "Cannot copy invalid password. Please generate a valid password first."
      );
    }
  }
});
