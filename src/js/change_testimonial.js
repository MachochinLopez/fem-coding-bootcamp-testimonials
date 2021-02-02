const testimonials = document.querySelectorAll(".testimonials__item");
const buttonPrevious = document.querySelector(".testimonials__button--previous");
const buttonNext = document.querySelector(".testimonials__button--next");
let active = document.querySelector(".testimonials__item--active");

buttonPrevious.addEventListener("click", function() {
  const previousElement = active.previousElementSibling;

  if(previousElement !== null) {
    changeActiveElement(active, previousElement);
  }
});

buttonNext.addEventListener("click", function() {
  const nextElement = active.nextElementSibling;
  console.log(nextElement);
  
  if(nextElement !== null) {
    changeActiveElement(active, nextElement);
  }
});

// Le quita la clase activa al elemento activo actual y se la agrega al nuevo elemento.
function changeActiveElement(previousActiveElement, nextActiveElement) {
  previousActiveElement.classList.remove("testimonials__item--active");
  nextActiveElement.classList.add("testimonials__item--active");
  active = nextActiveElement;
}