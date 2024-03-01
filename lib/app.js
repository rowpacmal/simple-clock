const clockDisplay = document.querySelector('#clock');
const dateDisplay = document.querySelector('#date');
const date = new Date();

clockDisplay.innerText = date.toLocaleTimeString('sv-SE');
dateDisplay.innerText = date.toLocaleDateString('sv-SE');

setInterval(
  () => (clockDisplay.innerText = new Date().toLocaleTimeString('sv-SE')),
  1000
);
