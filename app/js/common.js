
//btn menu
window.onload = function menuF() {
    let menu = document.getElementById('my_nav_top');
    menu.onclick = function myFunction() {
     if (menu.className === 'nav_top') {
      menu.className += ' responsive';
     } else {
      menu.className = 'nav_top';
     }
    }
    }

    //slider
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,5000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let circles = document.querySelectorAll('#circles .circle');
let currentCircle = 0;
let circleInterval = setInterval(nextCircle,5000);
 
function nextCircle() {
    circles[currentCircle].className = 'circle';
    currentCircle = (currentCircle+1)%circles.length;
    circles[currentCircle].className = 'circle show';
}
//buttons progects


let a = document.getElementsByClassName('web_btn');
let b = document.getElementsByClassName('mobile_btn');
let c = document.getElementsByClassName('illustration_btn');
let d = document.getElementsByClassName('photografy_btn');

function show_web() {
    for(let i = 0, l = a.length; i < l; i++){
        a[i].style.display = 'block'
    }
    for(let i = 0, l = b.length; i < l; i++){
    b[i].style.display = 'none'
    }
    for(let i = 0, l = c.length; i < l; i++){
    c[i].style.display = 'none'
    }
    for(let i = 0, l = d.length; i < l; i++){
    d[i].style.display = 'none'
    }   
}

function show_mobile() {
    for(let i = 0, l = b.length; i < l; i++){
        b[i].style.display = 'block'
    }
    for(let i = 0, l = a.length; i < l; i++){  
        a[i].style.display = 'none'
    }
    for(let i = 0, l = c.length; i < l; i++){  
        c[i].style.display = 'none'
    }
    for(let i = 0, l = d.length; i < l; i++){
        d[i].style.display = 'none'
    }
}
function show_illustration() {
    for(let i = 0, l = c.length; i < l; i++){
        c[i].style.display = 'block'
    }
    for(let i = 0, l = a.length; i < l; i++){  
        a[i].style.display = 'none'
    }
    for(let i = 0, l = b.length; i < l; i++){  
        b[i].style.display = 'none'
    }
    for(let i = 0, l = d.length; i < l; i++){
        d[i].style.display = 'none'
    }
}
function show_projects() {
    for(let i = 0, l = d.length; i < l; i++){
        d[i].style.display = 'block'
    }
    for(let i = 0, l = a.length; i < l; i++){  
        a[i].style.display = 'none'
    }
    for(let i = 0, l = c.length; i < l; i++){  
        c[i].style.display = 'none'
    }
    for(let i = 0, l = b.length; i < l; i++){
        b[i].style.display = 'none'
    }
}
function show_all() {
    for(let i = 0, l = b.length; i < l; i++){
        b[i].style.display = 'block'
    }
    for(let i = 0, l = a.length; i < l; i++){  
        a[i].style.display = 'block'
    }
    for(let i = 0, l = c.length; i < l; i++){  
        c[i].style.display = 'block'
    }
    for(let i = 0, l = d.length; i < l; i++){
        d[i].style.display = 'block'
    }
}

function downCards(){
    let showCard = document.getElementsByClassName('display_none');
    let btn = document.getElementsByClassName('projects_btn');
    for(let i = 0, l = showCard.length; i < l; i++){
        showCard[i].style.display = 'block'; 
    }  
    for(let i = 0, l = btn.length; i < l; i++){
        btn[i].style.display = 'none'; 
    } 
}

