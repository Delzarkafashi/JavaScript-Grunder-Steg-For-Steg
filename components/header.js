class HeaderIntro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="header">
  <div class="header-grid">
    <a class="logo" href="/">
      <img src="assets/images/shoplogo.png" alt="Strongheart" class="logo-img">
    </a>

    <form class="search" role="search">
      <input type="search" class="search-input" placeholder="Sök produkter…">
      <button class="search-btn" type="submit">Sök</button>
    </form>

    <button class="darkmod" type="button" aria-label="Växla tema">🌓</button>

    <div class="LogSingIn">
      <button class="logsingin">LogSingIn</button>
    </div>

    <button class="hamburger" aria-label="Meny">☰</button>

    <div class="menu-links">
      <a href="./index.html">Home</a>
      <a href="./produkter.html">Produkter</a>
      <a href="./kontakt.html">Kontakt</a>
      <a href="./todolist.html">To do list</a>
    </div>

  </div>
</header>
    `;

// inne i connectedCallback(), efter att du selektat elementen:
const header = this.querySelector('.header');
const button = header.querySelector('.hamburger');
const menu   = header.querySelector('.menu-links');

function setOpen(isOpen){
  menu.classList.toggle('open', isOpen);
  button.classList.toggle('is-open', isOpen);
  button.setAttribute('aria-expanded', String(isOpen));
  button.textContent = isOpen ? '×' : '☰';  // växla ikon
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
  if (!this.contains(e.target)) setOpen(false);
});

  }
}

customElements.define('header-intro-cmp', HeaderIntro);
