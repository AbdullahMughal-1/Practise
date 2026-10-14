const answer = document.querySelectorAll(".answer");
const minusicon = document.querySelectorAll(".minusicon");
const question = document.querySelectorAll(".question");
const plusicon = document.querySelectorAll(".plusicon");

answer.forEach(function (elem) {
  elem.style.display = "none";
});

minusicon.forEach(function (elem) {
  elem.style.display = "none";
});

question.forEach(function (elem) {
  elem.addEventListener("click", function () {

    const parent = this.parentElement;

    const currentAnswer = parent.querySelector(".answer");

    const currentplusicon = this.querySelector(".plusicon");
    const currentMinusicon = this.querySelector(".minusicon");

    if (currentAnswer.style.display === "flex") {
      currentAnswer.style.display = "none";
      currentplusicon.style.display = "flex";
      currentMinusicon.style.display = "none";
    } else {
      currentAnswer.style.display = "flex";
      currentplusicon.style.display = "none";
      currentMinusicon.style.display = "flex";
    }
  });
});
