const testimonials = document.querySelectorAll(".testimonials__item");
const buttonPrevious = document.querySelector(".testimonials__button--previous");
const buttonNext = document.querySelector(".testimonials__button--next");
let active = document.querySelector(".testimonials__item--active");

// Cambia al testimonial anterior.
buttonPrevious.addEventListener("click", function() {
  const previousElement = 
        active.previousElementSibling !== null 
          ? active.previousElementSibling 
          : testimonials[testimonials.length - 1];

  changeActiveElement(active, previousElement, false);
});

// Cambia al testimonial siguiente.
buttonNext.addEventListener("click", function() {
  const nextElement = 
        active.nextElementSibling !== null 
          ? active.nextElementSibling 
          : testimonials[0];

  changeActiveElement(active, nextElement, true);
});

// Le quita la clase activa al elemento activo actual y se la agrega al nuevo elemento.
// previousActiveElement: Elemento que estaba activo.
// nextActiveElement:     Elemento que será el testimonio activo.
// isNext:                Dirección a la que va a girar el container. true=next, false=previous.
function changeActiveElement(previousActiveElement, nextActiveElement, isNext) {
  // Remueve todas las clases de animación.
  const allItems = document.querySelectorAll(".testimonials__item");

  for (const item of allItems) {
    item.classList.remove("testimonials__item--exit-left");
    item.classList.remove("testimonials__item--exit-right");
    item.classList.remove("testimonials__item--enter-left");
    item.classList.remove("testimonials__item--enter-right");
  }

  // Agrega las nuevas clases de animación.
  if(isNext) {
    previousActiveElement.classList.add("testimonials__item--exit-right");
    nextActiveElement.classList.add("testimonials__item--enter-left");
  } else {
    previousActiveElement.classList.add("testimonials__item--exit-left");
    nextActiveElement.classList.add("testimonials__item--enter-right");
  }

  // Cambia cuál es el elemento activo.
  previousActiveElement.classList.remove("testimonials__item--active");
  nextActiveElement.classList.add("testimonials__item--active");
  active = nextActiveElement;
}