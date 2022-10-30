$(".owl-carousel").owlCarousel({
  items: 4,
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>',
  ],
  dots: false,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 480 up
    576: {
      items: 1,
    },
    // breakpoint from 768 up
    768: {
      items: 4,
    },
    992: {
      items: 4,
    },
  },
});
