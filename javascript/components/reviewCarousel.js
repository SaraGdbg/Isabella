const reviewCarouselCardContainer = document.querySelector('#reviewCarouselCardContainer');
const reviewCarouselCards = document.querySelectorAll('.reviewCarouselCard');

let currentIndex = 1;
let prevIndex = 0;
let totalCards = Object.keys(reviewCarouselCards).length;
console.log(totalCards);

let cardWidth = 768;

export default function reviewCarousel() {
  setTimeout(() => {
    let carouselBottomDotsContainer = document.querySelector('.carouselBottomDotsContainer');
    let reviewCarouselCard = document.querySelector('.reviewCarouselCard');

    let style = window.getComputedStyle(carouselBottomDotsContainer);
    let cardValue = window.getComputedStyle(reviewCarouselCard);

    // the reason for && cardWidth !== 580/768 is to avoid reassigning that value to cardWidth when it's not needed.
    if (cardValue.getPropertyValue('width') === '236px' && cardWidth !== 290) {
      cardWidth = 290;
    } else if (cardValue.getPropertyValue('width') === '305px' && cardWidth !== 384) {
      cardWidth = 384;
    }

    if (style.getPropertyValue('opacity') === '1') {
      reviewCarouselCardContainer.classList.add('sliding-transition');
      //   console.log(reviewCarouselCards[0]);

      reviewCarouselCardContainer.style.transform = `translateX(-${cardWidth}px)`;

      setTimeout(() => {
        reviewCarouselCardContainer.appendChild(reviewCarouselCards[prevIndex]);
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalCards;
        colorDots(currentIndex, prevIndex);
        reviewCarouselCardContainer.classList.remove('sliding-transition');
        reviewCarouselCardContainer.style.transform = '';
      }, 1000);
    }

    setTimeout(() => {
      callSlide();
    }, 3000);
  }, 3000);
}

const carouselBottomDotsContainer = document.querySelector('.carouselBottomDotsContainer');
const carouselBottomDots = document.querySelectorAll('.carouselBottomDot');

function colorDots(currentIndex, prevIndex) {
  carouselBottomDots[currentIndex].classList.add('activeDot');
  carouselBottomDots[prevIndex].classList.remove('activeDot');
}

function callSlide() {
  setTimeout(() => {
    reviewCarousel();
  }, 2000);
}
