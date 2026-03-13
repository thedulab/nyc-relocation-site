const elements = document.querySelectorAll("section, .site-header, .site-footer");

const reveal = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(reveal, {
  threshold: 0.2,
});

elements.forEach((element, index) => {
  element.style.transitionDelay = `${index * 80}ms`;
  observer.observe(element);
});

window.addEventListener("load", () => {
  document.body.classList.add("ready");
});
