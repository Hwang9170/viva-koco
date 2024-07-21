document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');

  menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      sideMenu.classList.toggle('active');
      document.body.classList.toggle('nav-open'); // 스크롤 잠금
  });
});
