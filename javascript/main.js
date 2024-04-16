import '../scss/style.scss';
import toggleNavMenu from './components/navMenu';
import reviewCarousel from './components/carousel/reviewCarousel';
import { toggleFormBtnStatus, resetFormValues } from './components/input';

toggleNavMenu();
toggleFormBtnStatus();
resetFormValues();
reviewCarousel();

console.log('bajs, for science');
