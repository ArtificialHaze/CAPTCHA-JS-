const output = document.querySelector(".output");

const myInput = document.createElement("input");
const btn = document.createElement("button");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

const options = {
  len: 5,
  characters: "0123456789abcdreftgyhujikolpmnbq",
  caption: [],
};

output.append(myInput);
output.append(btn);
output.append(canvas);

myInput.style.display = "block";
canvas.width = 100;
canvas.height = 30;

btn.textContent = "CHECK";
myInput.setAttribute("placeholder", "Captcha...");
myInput.setAttribute("maxlength", options.len);
myInput.style.width = "80px";

const addToCanvas = () => {
  const value = options.caption.join("");

  ctx.font = "20px monospace";
  ctx.strokeText(value, 10, 20);
};

const randomCharacter = () => {
  const index = Math.floor(Math.random() * options.characters.length);
  let character = options.characters[index];
  if (!options.caption.includes(character)) {
    return character;
  }
  return randomCharacter();
};

const initializeApp = () => {
  for (let i = 0; i < options.len; i++) {
    let characterOne = randomCharacter();
    options.caption.push(characterOne);
  }
  addToCanvas();
};

const checkValidation = () => {
  const captionCode = options.caption.join("");

  if (myInput.value == captionCode) {
    console.log(first);
  } else {
    myInput.style.borderColor = "crimson";
    myInput.value = "";
  }
};

window.addEventListener("DOMContentLoaded", initializeApp);
btn.addEventListener("click", checkValidation);
myInput.addEventListener("focus", () => {
  myInput.style.borderColor = "#000";
});
