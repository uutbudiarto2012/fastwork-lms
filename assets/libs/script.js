const text = document.getElementById("article").innerText;
function readingTime(text) {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time;
}
readingTime(text);
