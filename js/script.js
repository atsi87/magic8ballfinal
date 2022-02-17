const answer = document.getElementById("answer");
const questionButton = document.getElementById("questionButton");

questionButton.addEventListener("click", function () {
  const ask = prompt("ask me anything");
  const magicball = magic8(1, 20);
  console.log(magicball);
  answer.src = `../img/magic8ball_${magicball}.png`;
});

function magic8(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 2));
}
