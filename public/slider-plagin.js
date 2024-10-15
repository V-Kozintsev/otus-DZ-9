(function Carousel() {
  const carouselItems = document.querySelectorAll(".carusel-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  const updateCarousel = () => {
    carouselItems.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
  };

  prevButton.addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  updateCarousel(); // Обновляем карусель при инициализации
})();
