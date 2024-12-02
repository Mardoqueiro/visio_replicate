$(document).ready(function() {
    // Toggle navigation menu on hamburger click
    $(".hamburger").click(function() {
      $(".nav-links").toggleClass("show");
    });
  
    // Slide functionality for hero image
    var heroImages = $(".hero img");
    var currentIndex = 0;
  
    function slideHero() {
      heroImages.eq(currentIndex).fadeOut(1000);
      currentIndex = (currentIndex + 1) % heroImages.length;
      heroImages.eq(currentIndex).fadeIn(1000);
    }
  
    setInterval(slideHero, 5000);
  });