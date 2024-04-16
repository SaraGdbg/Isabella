// Params:
// 1st: current index that will become active
// 2nd: previous index that will become not active
// 3rd: the group of dots that are targeted, with a class that is only applied to the dots in one section, i ereviewCarouselDot

export default function colorCarouselDots(currentIndex, prevIndex, dotsClass) {
  const carouselBottomDots = document.querySelectorAll(dotsClass);
  let cIndex = currentIndex <= 2 ? currentIndex : 0;
  let pIndex = prevIndex <= 2 ? prevIndex : 0;

  console.log(pIndex);
  console.log(cIndex);

  carouselBottomDots[cIndex].classList.add('activeDot');
  carouselBottomDots[cIndex].classList.add('sliding-transition');
  carouselBottomDots[pIndex].classList.remove('activeDot');
  carouselBottomDots[pIndex].classList.add('sliding-transition');
}
