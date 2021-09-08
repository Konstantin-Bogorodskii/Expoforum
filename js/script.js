document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.menu-btn');
  const headerContent = document.querySelector('.header__content');
  burgerBtn.addEventListener('click', () => {
    headerContent.classList.toggle('menu--active');
  });
});
