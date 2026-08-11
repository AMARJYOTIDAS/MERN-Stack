const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const counterValue = document.getElementById('counter-value');
 let count = 0;

incrementBtn.addEventListener('click', () => {
  let current = parseInt(counterValue.value);
  const max = parseInt(counterValue.max);
  
  if (current < max) {
    counterValue.value = current + 1;
  }
});

decrementBtn.addEventListener('click', () => {
  let current = parseInt(counterValue.value);
  const min = parseInt(counterValue.min);
  
  if (current > min) {
    counterValue.value = current - 1;
  }
});
