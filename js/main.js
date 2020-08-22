const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", function () {
  if (menu.classList.contains("header__menu__open")) {
    menu.classList.remove("header__menu__open");
  } else {
    menu.classList.add("header__menu__open");
  }

  if (burger.classList.contains("header__burger__open")) {
    burger.classList.remove("header__burger__open");
  } else {
    burger.classList.add("header__burger__open");
  }
});

/* About */

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    if (question.classList.contains("question--open")) {
      this.classList.remove("question--open");
    } else {
      this.classList.add("question--open");
    }
  });
});
