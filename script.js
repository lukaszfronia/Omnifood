"use strict";

const header = document.querySelector(".header");
const btnMobile = document.querySelector(".btn-mobile-nav");

const year = document.querySelector(".year");
const currDate = new Date().getFullYear();

const btnsScrollTo = document.querySelectorAll("a:link");
const sectionHero = document.querySelector(".section-hero");

const opnClsMenu = () => header.classList.toggle("nav-open");
btnMobile.addEventListener("click", opnClsMenu);

year.innerHTML = currDate;

btnsScrollTo.forEach((b) =>
  b.addEventListener("click", function (e) {
    console.log(e);
    const href = b.getAttribute("href");
    console.log(href);

    if (href === "#") window.scrollTo({ top: 20, behavior: "smooth" });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (b.classList.contains("main-nav-link")) {
      opnClsMenu();
    }
  })
);

const navHeight = header.getBoundingClientRect().height;

const checkForSticky = (entry) =>
  !entry.isIntersecting
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");

const stickyNav = (entries) => {
  const [entry] = entries;
  checkForSticky(entry);
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

heroObserver.observe(sectionHero);
