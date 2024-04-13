const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#9BF6FF", "#D5D8DC", "#CD5C5C", "#76D7C4", "#FF7F50", "#6495ED", "#ADFF2F", "#FFD700", "#00FF00"];

const btn = document.getElementById('btn');
const colorText = document.getElementById('color');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorText.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
