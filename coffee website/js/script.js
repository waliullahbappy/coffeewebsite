
let navBar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.toggle('active');
}

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.toggle('active');
}

document.querySelector("#cart-btn").onclick=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}