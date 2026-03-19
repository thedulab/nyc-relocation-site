const links = document.querySelectorAll("a[href]");
const duration = 200;

const isSameOrigin = (href) => {
  try {
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin;
  } catch {
    return false;
  }
};

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    if (!isSameOrigin(href)) return;

    event.preventDefault();
    document.body.classList.add("fade-out");
    window.setTimeout(() => {
      window.location.href = href;
    }, duration);
  });
});

const revealItems = document.querySelectorAll(".reveal-item");
if (revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
