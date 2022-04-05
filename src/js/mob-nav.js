$(document).ready(function () {
  $('.sidebar-btn').on('click', function() {
    $('body').toggleClass('js-no-scroll');
    $('.sidebar').toggleClass('is-open');
    // $('.mob-nav__full-menu').toggleClass('is-open');
  });
});

// window.addEventListener('load', () => {
//   const headerLogo = document.querySelector('.header__logo a');
//   headerLogo.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     console.log('123');
//   });
// });
