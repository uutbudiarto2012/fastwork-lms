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

const el = document.querySelector("article");
if (el) {
  const text = el && el.innerText;
  function readingTime(text) {
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  }
  readingTime(text);
}

// SCROLL INDICATOR
const scrollIndicator = document.querySelector(".scroll-bar-indicator");
function scrollProgress() {
  const totalHeight = document.body.scrollHeight;
  const currentDistance = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;
  const percentScrolled =
    (currentDistance / (totalHeight - windowHeight)) * 100;
  scrollIndicator.style.width = Math.round(percentScrolled) + "%";
}
document.addEventListener("scroll", scrollProgress);
