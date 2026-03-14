const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const panel = document.querySelector(".about-panel");

const openPanel = () => {
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
};

const closePanel = () => {
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
};

menuButton.addEventListener("click", openPanel);
closeButton.addEventListener("click", closePanel);
panel.addEventListener("click", (event) => {
  if (event.target === panel) {
    closePanel();
  }
});
