//Pre-Next
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", function () {
  prevSlide();
});
nextBtn.addEventListener("click", function () {
  nextSlide();
});

let slideNumber = 0;
const prevSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName("current");
  currentSlide[0].classList.remove("current");
  if (slideNumber == 0) {
    slideNumber = slides.length - 1;
  } else {
    slideNumber = slideNumber - 1;
  }
  slides[slideNumber].classList.add("current");
};
const nextSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName("current");
  currentSlide[0].classList.remove("current");
  if (slideNumber == slides.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber = slideNumber + 1;
  }
  slides[slideNumber].classList.add("current");
};

//dropdown buttons
const dropdownBtn = document.querySelectorAll(".dropdown-button"); //all buttons including dropdown 2
const menu = document.querySelectorAll(".nav-item"); //all menu
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", () => {
        for (let j = 0; j < dropdownBtn.length; j++){
            dropdownBtn[j].nextElementSibling.style.display = "none";
        }
        menu[i].lastElementChild.style.display = "block";
  });
}
