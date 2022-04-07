const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const glightbox = GLightbox({
  openEffect: 'zoom',
  closeEffect: 'fade',
});
