import colorCarouselDots from './colorCarouselDots';
import getTranslateXValue from './getTranslateXValue';

let cardSize;

export default function startCarouselSlide(container, cards, currentIndex, prevIndex) {
  console.log('cIndex ' + currentIndex + ' pIndex ' + prevIndex);
  let carouselCardContainer = document.querySelector(container);
  let carouselCards = document.querySelectorAll(cards);
  let totalCards = Object.keys(carouselCards).length;
  // The reason for adding 2 clones here is to avoid the right side of the slide to be empty while the carousel is sliding. A second clone is needed for the positioning of the images to be consistent. They need to be uneven since the base number is 3. If 4 or possibly 5 items are present, this is not needed as long as a 2nd item is on the right side. It's not a pretty solution, but it works.
  sliding(carouselCardContainer, carouselCards, currentIndex, prevIndex, totalCards);
}

function sliding(carouselCardContainer, carouselCards, currentIndex, prevIndex, totalCards) {
  let cloneNode = carouselCards[prevIndex];
  //   console.log(carouselCards);
  let cloneNode2 = carouselCards[currentIndex];
  let clone = cloneNode.cloneNode(true);
  let clone2 = cloneNode2.cloneNode(true);

  setTimeout(() => {
    let carouselBottomDotsContainer = document.querySelector('.carouselBottomDotsContainer');
    let style = window.getComputedStyle(carouselBottomDotsContainer);
    let translateXValue = getTranslateXValue('#reviewCarouselCardContainer', '.reviewCarouselCard');
    console.log(translateXValue);

    // The comparasion between cardSize & translateXValue is made to avoid reassigning the value of cardSize constantly.
    if (cardSize !== translateXValue) {
      cardSize = translateXValue;
    }

    if (style.getPropertyValue('opacity') === '1') {
      carouselCardContainer.classList.add('sliding-transition');
      // adding the cloned Node elements here
      carouselCardContainer.append(clone);
      carouselCardContainer.prepend(clone2);

      carouselCardContainer.style.transform = `translateX(-${cardSize}px)`;
      setTimeout(() => {
        // removing the cloned Node elements here before the rest of the logic is applied
        // console.log(carouselCardContainer);
        carouselCardContainer.removeChild(carouselCardContainer.children[4]);
        carouselCardContainer.removeChild(carouselCardContainer.children[0]);
        carouselCardContainer.appendChild(carouselCards[prevIndex]);
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalCards;
        colorCarouselDots(currentIndex, prevIndex);
        carouselCardContainer.classList.remove('sliding-transition');
        carouselCardContainer.style.transform = '';
      }, 1000);
    }
    // call for the next slide to begin. This is an eternal loop :)
    setTimeout(() => {
      callSlide(carouselCardContainer, carouselCards, currentIndex, prevIndex, totalCards);
    }, 1000);
  }, 3000);
}

function callSlide(carouselCardContainer, carouselCards, currentIndex, prevIndex, totalCards) {
  setTimeout(() => {
    sliding(carouselCardContainer, carouselCards, currentIndex, prevIndex, totalCards);
  }, 3000);
}
