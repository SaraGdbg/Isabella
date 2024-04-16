import runCarouselSlide from './runCarouselSlide';

// Params:
// 1st param is the id of the carousel container, as a string including #
// 2nd param is the class of the carousel cards, as a string including .
// 3rd param is the class of the dots that are to be recolored, should only be for one section.

export default function startCarouselSlide(container, cards, dotsClass) {
  let carouselCardContainer = document.querySelector(container);
  let carouselCards = document.querySelectorAll(cards);
  let totalCards = Object.keys(carouselCards).length;

  runCarouselSlide(carouselCardContainer, carouselCards, totalCards, dotsClass, 1, 0);
}
