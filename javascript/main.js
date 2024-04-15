import '../scss/style.scss';
import toggleNavMenu from './components/navMenu';

toggleNavMenu();

console.log('bajs');

const reviewCarouselCardContainer = document.querySelector('#reviewCarouselCardContainer');
const reviewCarouselCards = document.querySelectorAll('.reviewCarouselCard');

let currentIndex = 1;
let prevIndex;
let totalCards = Object.keys(reviewCarouselCards).length;
console.log(totalCards);

const cardWidth = 234;

function sliiiiide() {
  setTimeout(() => {
    let carouselBottomDotsContainer = document.querySelector('.carouselBottomDotsContainer');

    let style = window.getComputedStyle(carouselBottomDotsContainer);

    if (style.getPropertyValue('opacity') === '1') {
      reviewCarouselCardContainer.classList.add('sliding-transition');
      prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % totalCards;

      reviewCarouselCardContainer.style.transform = `translateX(-${cardWidth}px)`;

      setTimeout(() => {
        reviewCarouselCardContainer.appendChild(reviewCarouselCards[prevIndex]);
        reviewCarouselCardContainer.classList.remove('sliding-transition');
        reviewCarouselCardContainer.style.transform = '';
      }, 500);
    }

    setTimeout(() => {
      callSlide();
    }, 500);
  }, 1000);
}

function callSlide() {
  setTimeout(() => {
    sliiiiide();
  }, 1000);
}

sliiiiide();
