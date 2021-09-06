
window.addEventListener('load', () => {
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('#search-form');
    let searchIcon = document.querySelector('#search-icon');
    let closeIcon = document.querySelector('#close');
  
    menu.addEventListener('click', ()=> {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', ()=> {
        menu.classList.remove('fa-times');
        navbar.classList.toggle('active');
    });

    searchIcon.addEventListener('click', () => {
        searchForm.classList.toggle('active');
    })
    closeIcon.addEventListener('click', () => {
        searchForm.classList.remove('active');
    })
})