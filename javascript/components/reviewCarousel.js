const reviewCarouselCardContainer = document.querySelector('#reviewCarouselCardContainer');
const reviewCarouselCards = document.querySelectorAll('.reviewCarouselCard');

let currentIndex = 1;
let prevIndex = 0;
let totalCards = Object.keys(reviewCarouselCards).length;
//cardWidth = width + padding + border width of reviewCarouselCard + gap on reviewCarouselCardContainer
// value changes depending on if user is viewing on mobile or tablet view.
let cardWidth = 389;

export default function reviewCarousel() {
  // The reason for adding 2 clones here is to avoid the right side of the slide to be empty while the carousel is sliding. A second clone is needed for the positioning of the images to be consistent. They need to be uneven since the base number is 3. If 4 or possibly 5 items are present, this is not needed as long as a 2nd item is on the right side. It's not a pretty solution, but it works.
  let cloneNode = reviewCarouselCards[prevIndex];
  let cloneNode2 = reviewCarouselCards[currentIndex];
  let clone = cloneNode.cloneNode(true);
  let clone2 = cloneNode2.cloneNode(true);

  setTimeout(() => {
    let carouselBottomDotsContainer = document.querySelector('.carouselBottomDotsContainer');
    let reviewCarouselCard = document.querySelector('.reviewCarouselCard');

    let style = window.getComputedStyle(carouselBottomDotsContainer);
    let cardValue = window.getComputedStyle(reviewCarouselCard);

    // the reason for && cardWidth !== 288/389 is to avoid reassigning that value to cardWidth when it's not needed.
    if (cardValue.getPropertyValue('width') === '236px' && cardWidth !== 288) {
      cardWidth = 288;
    } else if (cardValue.getPropertyValue('width') === '305px' && cardWidth !== 389) {
      cardWidth = 389;
    }

    if (style.getPropertyValue('opacity') === '1') {
      reviewCarouselCardContainer.classList.add('sliding-transition');
      // adding the cloned Node elements here
      reviewCarouselCardContainer.append(clone);
      reviewCarouselCardContainer.prepend(clone2);

      reviewCarouselCardContainer.style.transform = `translateX(-${cardWidth}px)`;
      setTimeout(() => {
        // removing the cloned Node elements here before the rest of the logic is applied
        reviewCarouselCardContainer.removeChild(reviewCarouselCardContainer.children[4]);
        reviewCarouselCardContainer.removeChild(reviewCarouselCardContainer.children[0]);
        reviewCarouselCardContainer.appendChild(reviewCarouselCards[prevIndex]);
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalCards;
        colorCarouselDots(currentIndex, prevIndex);
        reviewCarouselCardContainer.classList.remove('sliding-transition');
        reviewCarouselCardContainer.style.transform = '';
      }, 1000);
    }
    // call for the next slide to begin. This is an eternal loop :)
    setTimeout(() => {
      callSlide();
    }, 1000);
  }, 3000);
}

const carouselBottomDots = document.querySelectorAll('.carouselBottomDot');

function colorCarouselDots(currentIndex, prevIndex) {
  carouselBottomDots[currentIndex].classList.add('activeDot');
  carouselBottomDots[prevIndex].classList.remove('activeDot');
}

function callSlide() {
  setTimeout(() => {
    reviewCarousel();
  }, 3000);
}
