$(document).ready(function () {
    var menuLink = $("#mobile-menu");
    var spinner = '<div class="modal-backdrop fade in"></div>' + '<div class="spinner">' + '<div class="spinner-circle"></div>' + '<div class="spinner-heart"></div>' + '</div>';
 
    menuLink.on("click", "a", function () {
      $('#portalPageLoadSpinner').show();
    });
 
 
    /* ==============================================
    Sticky Navbar
    =============================================== */
    var hero = $('#hero');
    var win = $(window);
    var navbar = $('.sticky-main');
 
 
    function stickyNav() {
      var heroHeight = hero.height();
      var winTop = win.scrollTop();
 
      if (winTop > heroHeight) {
        navbar.addClass('is-sticky');
      } else {
        navbar.removeClass('is-sticky');
      };
    }
 
    stickyNav();
 
    win.scroll(function () {
      stickyNav();
    });
 
  }); // End document.ready