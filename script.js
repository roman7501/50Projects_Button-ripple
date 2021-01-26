const btn = document.querySelector("button");
const ripple = document.getElementById("ripple");

btn.addEventListener("click", (e) => {
  console.log(e.offsetX);
  ripple.classList.add("active");
  ripple.style.left = `${e.offsetX}px`;
  ripple.style.top = `${e.offsetY}px`;
  setTimeout(() => {
    ripple.classList.remove("active");
  }, 500);
});
