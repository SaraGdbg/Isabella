import colorCarouselDots from './colorCarouselDots';
import getTranslateXValue from './getTranslateXValue';

// currentIndex is the index of image that will display in center first
// prevIndex is the index of image to the left of the center image
let cardSize;
let currentIndex = 1;
let prevIndex = 0;

// Params:
// 1st param is the id of the carousel container, as a node object
// 2nd param is the class of the carousel cards, as a node object
// 3rd param is the length of the carouselCards array, is never recalculated
// 4th param is the class of the dots that are to be recolored, should only be for one section.

export default function runCarouselSlide(carouselCardContainer, carouselCards, totalCards, dotsClass) {
  // The reason for adding 2 clones here is to avoid the right side of the slide to be empty while the carousel is sliding. A second clone is needed for the positioning of the images to be consistent. They need to be uneven since the base number is 3. If 4 or possibly 5 items are present, this is not needed as long as a 2nd item is on the right side. It's not a pretty solution, but it works.
  // console.log(carouselCardContainer);

  let cloneNode = carouselCards[prevIndex];
  let cloneNode2 = carouselCards[currentIndex];
  let clone = cloneNode.cloneNode(true);
  let clone2 = cloneNode2.cloneNode(true);

  setTimeout(() => {
    let containerId = `#${carouselCardContainer.id}`;
    let cardsClass = `.${carouselCards[0].classList[0]}`;
    let translateXValue = getTranslateXValue(containerId, cardsClass);
    console.log(translateXValue);

    // The comparasion between cardSize & translateXValue is made to avoid reassigning the value of cardSize constantly.
    if (cardSize !== translateXValue) {
      cardSize = translateXValue;
    }

    let carouselBottomDotsContainer = document.querySelector('.carouselBottomDotsContainer');
    let style = window.getComputedStyle(carouselBottomDotsContainer);

    if (style.getPropertyValue('opacity') === '1') {
      carouselCardContainer.classList.add('sliding-transition');
      // adding the cloned Node elements here
      carouselCardContainer.append(clone);
      carouselCardContainer.prepend(clone2);

      carouselCardContainer.style.transform = `translateX(-${cardSize}px)`;
      // Call to function that changes color of the dots under the carousel.
      colorCarouselDots(currentIndex + 1, prevIndex + 1, dotsClass);
      setTimeout(() => {
        // removing the cloned Node elements here before the rest of the logic is applied
        // console.log(carouselCardContainer);
        carouselCardContainer.removeChild(carouselCardContainer.children[4]);
        carouselCardContainer.removeChild(carouselCardContainer.children[0]);
        carouselCardContainer.appendChild(carouselCards[prevIndex]);
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalCards;

        carouselCardContainer.classList.remove('sliding-transition');
        carouselCardContainer.style.transform = '';
      }, 2000);
    }
    // call for the next slide to begin. This is an eternal loop :)
    setTimeout(() => {
      restartCarousel(carouselCardContainer, carouselCards, totalCards, dotsClass);
    }, 2101);
  }, 7000);
}

// Params: same as in runCarouselSlide function above

function restartCarousel(carouselCardContainer, carouselCards, totalCards, dotsClass) {
  setTimeout(() => {
    runCarouselSlide(carouselCardContainer, carouselCards, totalCards, dotsClass);
  }, 1000);
}
