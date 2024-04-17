import startCarouselSlide from './startCarouselSlide';

export default function destinationsCarousel() {
  setTimeout(() => {
    startCarouselSlide('#destinationsCarouselCardContainer', '.card', '.destinationCarouselDot');
  }, 2000);
}
