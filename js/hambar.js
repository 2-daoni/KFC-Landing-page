function clickMenu() {
  const menu = document.querySelector('.menu');
  const menuBtn = document.querySelector('.menuBtn');
  const openBtn = document.querySelector('.open');
  const closeBtn = document.querySelector('.close');

  menu.classList.toggle('clicked');
  openBtn.classList.toggle('clicked');
  closeBtn.classList.toggle('clicked');
}
