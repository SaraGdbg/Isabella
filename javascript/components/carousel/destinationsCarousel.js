import startCarouselSlide from './startCarouselSlide';

export default function destinationsCarousel() {
  console.log('I AM DESTINATIONS');
  setTimeout(() => {
    startCarouselSlide('#destinationsCarouselCardContainer', '.card', '.destinationCarouselDot');
  }, 2);
}
