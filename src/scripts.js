const bars = document.getElementsByClassName("bars")[0];
const container = document.getElementsByClassName("container")[0];
const close = document.getElementsByClassName("close")[0];
const overlay = document.getElementsByClassName("overlay")[0];
let isContainerVisible;

bars.onclick = function () {
  container.style.display = "block";
  bars.style.visibility = "hidden";
  overlay.classList.add("overlay-visible");
  // container.style.overflowY ="scroll"
  isContainerVisible = true;
};

close.onclick = function () {
  container.style.display = "none";
  bars.style.visibility = "visible";
  overlay.classList.remove("overlay-visible");
  isContainerVisible = false;
};

window.addEventListener("resize", function () {
  if (window.innerWidth > 992) {
    container.style.display = "block";
    bars.style.visibility = "hidden";
    overlay.classList.remove("overlay-visible");
  } else {
    if (isContainerVisible) {
      container.style.display = "block";
      bars.style.visibility = "hidden";
      overlay.classList.add("overlay-visible");
    } else {
      container.style.display = "none";
      bars.style.visibility = "visible";
      overlay.classList.remove("overlay-visible");
    }
  }
});
