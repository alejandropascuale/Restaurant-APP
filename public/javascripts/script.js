let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('#search-form');
let searchIcon = document.querySelector('#search-icon');
let closeIcon = document.querySelector('#close');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

menu.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

searchIcon.onclick = () => {
  searchForm.classList.toggle('active');
};
closeIcon.onclick = () => {
  searchForm.classList.remove('active');
};

let swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  brakpoints: {
    0: {
      slidesPerView:1,
    },
    640: {
      slidesPerView:2,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  },
});


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = ()=> {
  menu.classList.remove('fa-times');
  navbar.classList.toggle('active');

  section.forEach(sec => {
    let top = sec.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offser + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      })
    }

  })

};


function loader () {
  document.querySelector('.loader-container').classList.add('fade-out');
}
function FadeOut () {
  setInterval(loader, 1000);
}

window.onload = FadeOut;