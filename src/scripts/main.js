import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';
import { initSmoothScroll } from './smooth-scroll.js';
import { initMotion } from './motion.js';
import { initHeader, initMenu, initEnquiry, initShare, initCursor } from './ui.js';
import { initHero, initCarousel, initServicePreview } from './home.js';
import { initWorks } from './works.js';

window.__truqReady = true;
gsap.registerPlugin(ScrollTrigger, SplitText, Flip);

const motion = document.documentElement.classList.contains('motion');
const scroller = initSmoothScroll(motion);

initHeader(scroller);
initMenu(scroller);
initEnquiry(scroller);
initShare();
initCursor();
initHero(motion);
initCarousel();
initServicePreview();
initWorks(motion);
initMotion(motion);
