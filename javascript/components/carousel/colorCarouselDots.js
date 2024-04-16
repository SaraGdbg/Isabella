// Params:
// 1st: current index that will become active
// 2nd: previous index that will become not active
// 3rd: the group of dots that are targeted, with a class that is only applied to the dots in one section, i ereviewCarouselDot

export default function colorCarouselDots(currentIndex, prevIndex, dotsClass) {
  const carouselBottomDots = document.querySelectorAll(dotsClass);

  carouselBottomDots[currentIndex].classList.add('activeDot');
  carouselBottomDots[prevIndex].classList.remove('activeDot');
}
