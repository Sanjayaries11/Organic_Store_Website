//active nav
//  document.addEventListener('DOMContentLoaded', function(){
//   var navItems = document.querySelectorAll('.nav-links');

//   navItems.forEach(function(item){
//     item.addEventListener('click',function(){

//       navItems.forEach(function(){
//         navItems.classList.remove('active');
//       });

//       //add 'active' class to the clicked nav item
//       item.classList.add('active');
//     });
//   });
//  }) ;


//active nav
$(document).ready(function () {
  // Get the current URL
  var currentUrl = window.location.href;


  // Select all the navigation links
  var navLinks = document.querySelectorAll('.nav-link');

  // Loop through each navigation link
  navLinks.forEach(function (link) {
    // If the link's href matches the current URL
    if (('http://127.0.0.1:5500/' + link.getAttribute('href')) === currentUrl) {

      // Add a class to indicate it's the active link
      link.classList.add('active');
    }
  });
});

// JavaScript to handle opening and closing of the popup
document.addEventListener('DOMContentLoaded', function () {
  var openPopupButton = document.getElementById('openPopup');
  var closePopupButton = document.getElementById('closePopup');
  var closePopupButtonFooter = document.getElementById('closePopupButton');
  var popup = document.getElementById('myPopup');


  openPopupButton.addEventListener('click', function () {
    popup.classList.add('open');

  });

  function closePopup() {
    popup.classList.remove('open');

  }

  closePopupButton.addEventListener('click', closePopup);
  closePopupButtonFooter.addEventListener('click', closePopup);
});

//DROPDOWN TOGGLE
$(document).ready(function () {
  $(".nav-link").click(function () {
    $(this).next(".dropdown-menu").toggle();
  });
});


//BRAND SLIDE SHOW
$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

//ACCORDION ON ABOUTuS PAGE
$(document).ready(function () {
  // Hide all panels by default
  $(".panel").hide();

  // Add click event to accordion buttons
  $(".accordion-btn").click(function () {
    // Toggle the panel visibility with a slow animation when clicked
    $(this).siblings(".panel").slideToggle("slow");
    // Toggle the caret icon
    $(this).find(".fa-caret-right").toggleClass("rotate");
  });
});


//for slider on aboutUs
$(document).ready(function () {
  showSlides();
});

let slideIndex = 0;


function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}