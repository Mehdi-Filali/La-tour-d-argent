            // scroll event

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 250) {
      $("nav").addClass("header-nav");
    } else {
      $("nav").removeClass("header-nav");
    }
  });
});
