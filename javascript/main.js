import '../scss/style.scss';
import toggleNavMenu from './components/navMenu';
import reviewCarousel from './components/carousel/reviewCarousel';
import { toggleFormBtnStatus, resetFormValues } from './components/input';
import hideCookieBar from './components/cookiebar';
import destinationsCarousel from './components/carousel/destinationsCarousel';

toggleNavMenu();
toggleFormBtnStatus();
resetFormValues();
// reviewCarousel();
destinationsCarousel();
hideCookieBar();

console.log('bajs, for science');
