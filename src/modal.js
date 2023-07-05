(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    openSecMenuBtn: document.querySelector('[data-menu-open-2]'),
    openThirdMenuBtn: document.querySelector('[data-menu-open-3]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  if (document.documentElement.scrollWidth <= 767) {
    const addBtn = document.querySelector('[data-menu-modal-open]');
    addBtn.addEventListener('click', toggleMenu);
  }
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.openSecMenuBtn.addEventListener('click', toggleMenu);
  refs.openThirdMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu(e) {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
