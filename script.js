
function toggleMenu() {
 console.log('toggleMenu 함수 실행'); // 디버깅용 로그
 const menuToggle = document.getElementById('menu-toggle');
 const sideMenu = document.getElementById('side-menu');
 
 menuToggle.classList.toggle('active');
 sideMenu.classList.toggle('active');
 
 console.log('메뉴 상태:', sideMenu.classList.contains('active')); // 디버깅용 로그

 // body에 클래스 추가하여 스크롤 제어
 if (sideMenu.classList.contains('active')) {
     document.body.classList.add('nav-open'); // 스크롤 잠금
 } else {
     document.body.classList.remove('nav-open'); // 스크롤 잠금 해제
 }
}

let slideIndex = 1;
let slideInterval;

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    autoSlide();

    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        sideMenu.classList.toggle('active');
    });
});

// 다음/이전 컨트롤
function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    autoSlide();
}

// 현재 슬라이드 컨트롤
function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    autoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoSlide() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // 5초마다 슬라이드 변경
}

// 메뉴 토글 함수
function toggleMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
}