let counterValue = 0;

const values = document.querySelector("#value");
const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
buttonIncr.addEventListener("click", () => {
  counterValue++;
  values.textContent = counterValue;
});

buttonDecr.addEventListener("click", () => {
  counterValue--;
  values.textContent = counterValue;
});
