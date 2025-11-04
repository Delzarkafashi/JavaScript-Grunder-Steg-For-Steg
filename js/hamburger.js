// components/header.js
function initHeaderMenu() {
  const header  = document.querySelector('.header');
  if (!header) return;

  const button  = header.querySelector('.hamburger');
  const menu    = header.querySelector('.menu-links');
  if (!button || !menu) return;

  function setOpen(isOpen) {
    menu.classList.toggle('open', isOpen);
    button.classList.toggle('is-open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    button.textContent = isOpen ? '×' : '☰';
  }

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!menu.classList.contains('open'));
  });

  // stäng vid klick på länk
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // stäng vid klick utanför
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) setOpen(false);
  });
}

// Kör när DOM är redo
document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', initHeaderMenu)
  : initHeaderMenu();
