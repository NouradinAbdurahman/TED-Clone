console.log("TED Clone!");

/*
    // NOTE:
            
    - Please use before every begining of section comment like:
        < start "name of the section">

        < end "name of the section">

    *feel free to remove this comment. 
*/

//
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
