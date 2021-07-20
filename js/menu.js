(() => {
  const refs = {
    openMenuBtn: document.querySelector('#menu-open'),
    closeMenuBtn: document.querySelector('.btn-close'),
   menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    document.body.classList.toggle('hidden')
    refs.menu.classList.toggle('is-hidden');
  }
})();