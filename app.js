const random = function () {
  return Math.trunc(Math.random() * 5) + 1;
}
// const random2 = function () {
//     return Math.trunc(Math.random() * 255) + 1;
// }
const img = document.querySelector('.img');

const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const images = document.querySelectorAll('.images');
const section1 = document.querySelector('.section--0');
const header = document.querySelector('.header');
const mainImage = document.querySelector('.mainImage');
const sections = document.querySelectorAll('.section');
const home = document.querySelector('.home');
home.addEventListener('click', function () {
  mainImage.scrollIntoView({ behavior: 'smooth' })
});
let current = 0;
let maxslide = images.length
const nxt = function () {

  if (current === max-slide - 1)
      current = 0;
  else
      current++;
  images.forEach((CurSlide, i) => {

      CurSlide.style.transform = `translateX(${100 * (i - current)}%)`;
  });
}
const Pre = function () {
  console.log(current);
  if (current === 0)
      current = max-slide - 1;
  else
      current--;
  images.forEach((CurSlide, i) => {

      CurSlide.style.transform = `translateX(${100 * (i - current)}%)`;
  });
}

setInterval(nxt, 4000)

btnRight.addEventListener('click', nxt)
btnLeft.addEventListener('click', Pre)

// sections.forEach(function (El) {

// })

const Observer = new IntersectionObserver(function (entries, Observer) {
  const [entry] = entries;
  if (entry.isIntersecting === false) return;

  entry.target.classList.remove('section--hidden');
  Observer.unobserve(entry.target);
}, {
  root: null,
  threshold: 0.15
})
sections.forEach((El) => {
  Observer.observe(El);
});
const hamburger = document.querySelector('.hamburger');
const displayOptions = document.querySelector('.btns--header');
hamburger.addEventListener('click', () => {
  if (displayOptions.style.display == 'none')
      displayOptions.style.display = 'block';
  else
      displayOptions.style.display = 'none'
})
setInterval(() => {
  if (getComputedStyle(hamburger).display == 'none') {
      displayOptions.style.display = 'block';
  }
  else {

  }
}, 1000)