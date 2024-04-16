// Creates the translateX Value needed by retrieving numbers from CSS. In case the user changes the size of their screen the value will be updated.
// xContainer: string, the id of the container for the carousel, include #
// xCard: string, the class of the cards for the carousel, include . (all cards need to have the same size and proportion for this carousel to work)
export default function getTranslateXValue(xContainer, xCard) {
  let container = document.querySelector(xContainer);
  let card = document.querySelector(xCard);
  let containerStyle = window.getComputedStyle(container);
  let cardStyle = window.getComputedStyle(card);
  let containerGap = parseInt(containerStyle.getPropertyValue('gap'));
  let cardWidth = parseInt(cardStyle.getPropertyValue('width'));
  let cardPadding = parseInt(cardStyle.getPropertyValue('padding')) * 2;
  let cardBorder = parseInt(cardStyle.getPropertyValue('border')) * 2;
  return containerGap + cardWidth + cardPadding + cardBorder;
}
