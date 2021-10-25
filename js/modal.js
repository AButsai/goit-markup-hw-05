(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  console.log(toggleModal);
})();

// const openBtn = document.querySelector('.hero-btn');
// const closeBtn = document.querySelector('.close-btn');
// const modal = document.querySelector('.backdrop');

// const open = openBtn.addEventListener('click', toggle);

// const close = closeBtn.addEventListener('click', toggle);

// function toggle() {
//   modal.classList.toggle('is-hidden');
// }
