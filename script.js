const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slides = document.querySelectorAll('.slides');

let i = 0;

function Slide(n) {
  console.log(i);
  for (let slide of slides) {
    slide.classList.remove('active');
    slides[n].classList.add('active');
  }
}

right.addEventListener('click', function () {
  if (i == slides.length - 1) {
    i = 0;
    Slide(i);
  } else {
    i++;
    Slide(i);
  }
});

left.addEventListener('click', function () {
  if (i == 0) {
    i = slides.length - 1;
    Slide(i);
  } else {
    i--;
    Slide(i);
  }
});
