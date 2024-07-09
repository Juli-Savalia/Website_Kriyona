import $ from "jquery";
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 40) {
      $(".header").addClass("scrolled");
      $(".header").removeClass("main-header");
    } else {
      $(".header").removeClass("scrolled");
      $(".header").removeClass("main-header");
    }

    if ($(window).scrollTop() > 300) {
      $(".topbtn").fadeIn(1000);
    } else {
      $(".topbtn").fadeOut(1000);
    }
  });
});
