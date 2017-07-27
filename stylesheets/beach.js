$(document).ready(function() {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });
    $(window).load(function() {
    $(".loader").fadeOut(2800);
    $(".box").fadeIn(4000);
  });
});
