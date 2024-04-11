const hamburgerBtn = document.querySelector('#hamburgerBtn');
const navLinks = document.querySelector('#navLinks');

export default function toggleNavMenu() {
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('navLinksContainerOpen');
    hamburgerBtn.classList.toggle('active');
  });
}
