const hamburgerBtn = document.querySelector('#hamburgerBtn');
const navLinksContainer = document.querySelector('#navLinksContainer');

export default function toggleNavMenu() {
  hamburgerBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('navLinksContainerOpen');
    hamburgerBtn.classList.toggle('active');
  });
}
