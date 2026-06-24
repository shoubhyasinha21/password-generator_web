function generatePassword() {
  const length = document.getElementById("length").value;
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const passwordBox = document.getElementById("password");
  const message = document.getElementById("message");

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = "";

  if (useUppercase) characters += uppercase;
  if (useLowercase) characters += lowercase;
  if (useNumbers) characters += numbers;
  if (useSymbols) characters += symbols;

  if (length < 4 || length > 30) {
    message.style.color = "red";
    message.innerText = "Password length must be between 4 and 30.";
    passwordBox.value = "";
    return;
  }

  if (characters === "") {
    message.style.color = "red";
    message.innerText = "Please select at least one option.";
    passwordBox.value = "";
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordBox.value = password;
  message.style.color = "green";
  message.innerText = "Password generated successfully!";
}

function copyPassword() {
  const passwordBox = document.getElementById("password");
  const message = document.getElementById("message");

  if (passwordBox.value === "") {
    message.style.color = "red";
    message.innerText = "Generate a password first.";
    return;
  }

  navigator.clipboard.writeText(passwordBox.value);

  message.style.color = "green";
  message.innerText = "Password copied to clipboard!";
}