let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
formBtn.addEventListener('click',() =>{
    window.alert("Hello Word");
    loginForm.classList.add('active');
});
formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});
window.onscroll=()=>{
    menu.classList.remove('fa.xmark');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});






