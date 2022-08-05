// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка "Anonymous".
//
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inp = document.querySelector("#name-input");
const out = document.querySelector("#name-output");

inp.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
   return out.textContent = "Anonymous"; 
  }
  out.textContent = event.currentTarget.value;
});
