const answer = document.getElementById("answer");
const questionButton = document.getElementById("questionButton");

questionButton.addEventListener("click", function () {
  const ask = prompt("ask me anything");
  const magicball = getRandomIntInclusive(1, 20);
  console.log(magicball);
  answer.src = `../img/magic8ball_${magicball}.png`;
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

