const themeButton = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("mehaa-theme");
if (savedTheme === "dark") document.body.classList.add("dark-theme");
if (themeButton) {
  themeButton.setAttribute("aria-label", document.body.classList.contains("dark-theme") ? "Switch to light theme" : "Switch to dark theme");
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const dark = document.body.classList.contains("dark-theme");
    localStorage.setItem("mehaa-theme", dark ? "dark" : "light");
    themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  });
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add("is-visible"));

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.querySelector("span").textContent = open ? "＋" : "−";
    panel.style.maxHeight = open ? "0px" : `${panel.scrollHeight}px`;
  });
});

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();
