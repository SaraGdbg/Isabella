import startCarouselSlide from './startCarouselSlide';

// Call to slider function
// 1st param is the id of the carousel container, as a string including #
// 2nd param is the class of the carousel cards, as a string including .
export default function reviewCarousel() {
  startCarouselSlide('#reviewCarouselCardContainer', '.reviewCarouselCard', '.reviewCarouselDot');
}
