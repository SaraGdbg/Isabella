const cookieContainer = document.querySelector('#cookieContainer');
const cookieBtns = document.querySelectorAll('.cookieBtn');

export default function hideCookieBar () {
    cookieBtns.forEach((btn) => {
        btn.addEventListener('click', () => cookieContainer.remove());
    })
}