console.log("TED Clone!");
// start open search
const openSearch = document.querySelector(".open-search");
const closeSearch = document.querySelector(".close-search");
const searchContainer = document.querySelector(".search-container");

openSearch.addEventListener("click", () => {
  searchContainer.classList.add("active");
});
closeSearch.addEventListener("click", () => {
  searchContainer.classList.remove("active");
});
// end open search

// start opne menu
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector(".nav");

openMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  closeMenu.classList.add("active");
  openMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
  openMenu.classList.remove("active");
  closeMenu.classList.remove("active");
});
// end opne menu

// start Swiper
//
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 820px
    820: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const swiper2 = new Swiper("#mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
//
// end Swiper
//
