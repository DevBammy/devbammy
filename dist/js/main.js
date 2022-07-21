// Preloader Script
const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

// Scroll Top Top
const scrollToTop = document.getElementById("scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Modal Script
const modal = document.getElementById("modal");
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");
const modalLinks = document.querySelectorAll(".modalLinks");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("showModal");
  hideModal();
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("showModal");
});

// Function to hide modal after 5 seconds
function hideModal() {
  setTimeout(() => {
    modal.classList.remove("showModal");
  }, 5000);
}

// Dark Theme Toggler
const themeToggle = document.getElementById("theme-toggler");
const moon = document.querySelector(".fa-moon");
const body = document.querySelector("body");

themeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("e don click me ooooo");
  body.classList.toggle("dark");
  moon.classList.toggle("fa-sun");
});

// View More Button
const viewCol = document.querySelectorAll(".hide");
const viewMoreBtn = document.getElementById("viewMore");

viewCol.forEach((card) => {
  viewMoreBtn.addEventListener("click", () => {
    card.classList.add("show");
    hideBtn();
  });
});

// Function to hide the Btn after viewMore
function hideBtn() {
  viewMoreBtn.style.display = "none";
}

// Mobile Responsive Navigation
const navToggle = document.getElementById("toggle");
const slideNav = document.querySelector("nav");
const toggleIcon = document.querySelector(".fa-bars");

// Function to hide Responsive Nav after 5 Secs

navToggle.addEventListener("click", () => {
  slideNav.classList.toggle("slideNavIn");
  changeToggleColor();
  changeToggleIcon();
  hideNav();
});

// Function to change Toggle Color
function changeToggleColor() {
  navToggle.classList.toggle("showNav");
}

// Function to change Toggle Icon
function changeToggleIcon() {
  toggleIcon.classList.toggle("fa-times");
}

function hideNav() {
  setTimeout(() => {
    slideNav.classList.remove("slideNavIn");
    toggleIcon.classList.remove("fa-times");
    navToggle.classList.remove("showNav");
  }, 7000);
}
