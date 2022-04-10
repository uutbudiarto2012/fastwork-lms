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
  openEffect: "zoom",
  closeEffect: "fade",
});

const text = document.querySelector("article").innerText;
function readingTime(text) {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time;
}
readingTime(text);
