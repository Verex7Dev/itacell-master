"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(800).fadeOut("slow");
  });

  /*------------------
		Navigation
	--------------------*/
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("show-menu");
  });
})(jQuery);

