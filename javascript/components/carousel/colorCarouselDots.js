export default function colorCarouselDots(currentIndex, prevIndex) {
  const carouselBottomDots = document.querySelectorAll('.carouselBottomDot');
  carouselBottomDots[currentIndex].classList.add('activeDot');
  carouselBottomDots[prevIndex].classList.remove('activeDot');
}
