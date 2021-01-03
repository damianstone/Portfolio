import Img1 from '../../svg/svg-1.svg';
import Img2 from '../../svg/svg-3.svg';
import Img3 from '../../svg/svg-2.svg';

export const HomeObjOne = {
  to: 'projects',
  id: 'about',
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'About Me',
  description: '',
  buttonLabel: 'Projects',
  imgStart: false,
  img: Img1,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: false,
};

export const HomeObjTwo = {
  to: 'home',
  id: 'work',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'DVSOFT',
  headline: 'Dream your ideas. We make them come true',
  description: 'Your website is your main cover letter for your next potential clients. Make sure you live up to it, with a professional website that reflects your companys values ​​and work.',
  buttonLabel: 'Meet the team',
  imgStart: true,
  img: Img2,
  alt: 'app',
  dark: false,
  primary: false,
  darkText: false,
};

export const HomeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'DVSOFT',
  headline: 'section 3',
  description:
    'Your website is your main cover letter for your next potential clients. Make sure you live up to it, with a professional website that reflects your companys values ​​and work',
  buttonLabel: 'Our projects',
  imgStart: false,
  img: Img3,
  alt: 'multiplatform',
  dark: false,
  primary: false,
  darkText: true,
};
