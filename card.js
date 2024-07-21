document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');

  menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      sideMenu.classList.toggle('active');
      document.body.classList.toggle('nav-open'); // 스크롤 잠금
  });
});

function openModal(cardId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modal.style.display = 'block';

  if (cardId === 1) {
      modalBody.innerHTML = `
          <h2>팀 소개</h2>
          <p>예시로 만든거임.</p>
          <img src="/team/team_image/001.png" alt="Card News 1" style="width:100%">
          <img src="/team/team_image/002.png" alt="Card News 1" style="width:100%">
          <img src="/team/team_image/003.png" alt="Card News 1" style="width:100%">
          <img src="/team/team_image/004.png" alt="Card News 1" style="width:100%">
          <img src="/team/team_image/005.png" alt="Card News 1" style="width:100%">
          <img src="/team/team_image/006.png" alt="Card News 1" style="width:100%">
          <img src="/team/team_image/007.png" alt="Card News 1" style="width:100%">

      `;
  } else if (cardId === 2) {
      modalBody.innerHTML = `
          <h2>Card News 2</h2>
          <p>Detailed information about card news 2.</p>
          <img src="/cardnews_image/2.png" alt="Card News 2" style="width:100%">
      `;
  } else if (cardId === 3) {
      modalBody.innerHTML = `
          <h2>Card News 3</h2>
          <p>Detailed information about card news 3.</p>
          <img src="/cardnews_image/3.png" alt="Card News 3" style="width:100%">
      `;
  } else if (cardId === 4) {
    modalBody.innerHTML = `
        <h2>Card News 3</h2>
        <p>Detailed information about card news 3.</p>
        <img src="/cardnews_image/3.png" alt="Card News 3" style="width:100%">
    `;
} else if (cardId === 5) {
  modalBody.innerHTML = `
      <h2>Card News 3</h2>
      <p>Detailed information about card news 3.</p>
      <img src="/cardnews_image/3.png" alt="Card News 3" style="width:100%">
  `;
}
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
}
