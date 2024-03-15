document.getElementById("marquee-container").classList.add("marquee-animation");

const mobSearch = document.querySelector(".mob-search");
const removeSearch = document.querySelector(".remove");
const searchbar = document.querySelector(".searchbar");


function toggleSearchBar() {
    searchbar.classList.toggle("show");
}

mobSearch.addEventListener("click", toggleSearchBar);
removeSearch.addEventListener("click", toggleSearchBar);

const category = document.querySelector('.category');
const dropdown = document.querySelector('.dropdown-content');

category.addEventListener('click', () => {
    dropdown.classList.toggle('show');
})

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
})

$('.custom-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   responsive: [
      {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
  });



