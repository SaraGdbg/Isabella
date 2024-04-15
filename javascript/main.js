import '../scss/style.scss';
import toggleNavMenu from './components/navMenu';
import reviewCarousel from './components/reviewCarousel';
import { toggleFormBtnStatus, resetFormValues } from './components/input';

toggleNavMenu();
toggleFormBtnStatus();
resetFormValues();
reviewCarousel();
hideCookieBar();

console.log('bajs, for science');
