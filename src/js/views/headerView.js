import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
  const headerContainer = utils.createNewElement(
    'header',
    'header__container',
    elements.root
  );
  const videoContentContainer = utils.createNewElement(
    'section',
    'first-screen__container',
    elements.root
  );
  const videoContainer = utils.createNewElement(
    'div',
    'first-screen__video-container',
    videoContentContainer
  );
  const logoContainer = utils.createNewElement(
    'div',
    'header__logo-container',
    headerContainer
  );
  const logo = utils.createNewElement(
    'div',
    'header__logo visually-hidden',
    logoContainer
  );
  const logoTitleContainer = utils.createNewElement(
    'h1',
    'header__logo-title',
    logoContainer
  );
  const logoImg = utils.createSvgImg(arr.myLogo[0], arr.myLogo[1], 70, logo);
  const logoTitleFirst = utils.createNewElement(
    'span',
    'logo__title-span visually-hidden',
    logoTitleContainer,
    arr.title[0]
  );
  const logoTitleSecond = utils.createNewElement(
    'span',
    'logo__title-span visually-hidden',
    logoTitleContainer,
    arr.title[1]
  );
  const menuContainer = utils.createNewElement(
    'div',
    'header__menu-container',
    headerContainer
  );
  const navContainer = utils.createNewElement(
    'nav',
    'menu__nav-container',
    menuContainer
  );
  const contactsContainer = utils.createNewElement(
    'div',
    'menu__contacts-container',
    menuContainer
  );
  utils.createIcon(arr, contactsContainer, 'menu__icon visually-hidden');
  utils.createNewList(
    'nav__ul',
    'nav__li visually-hidden',
    'nav__a',
    navContainer,
    arr.menu
  );
  const headerEl = [logo, logoTitleSecond, logoTitleFirst];
  const liEl = document.querySelectorAll('.nav__li');
  const iEl = document.querySelectorAll('.menu__icon');
  liEl.forEach((el) => {
    headerEl.push(el);
  });
  iEl.forEach((el) => {
    headerEl.push(el);
  });

  function showHeaderElements() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }

  showHeaderElements()
    .then(function () {
      headerEl.forEach((el, key) => {
        setTimeout(() => {
          el.classList.remove('visually-hidden');
          el.classList.add('anim-el');
        }, 200 * key);
      });
    })
    .then(function () {
      {
        const videoLink = `<video class="first-screen__video" poster="http://assessment.birdmarketing.co.uk/wp-content/uploads/background.jpg" data-object-fit="cover" data-object-position="top center" autoplay="" loop="" muted="" playsinline=""><source src="https://s3.eu-west-2.amazonaws.com/bird-video/London+Trim+3.mp4" type="video/mp4"></video>`;
        videoContainer.insertAdjacentHTML('beforeend', videoLink);
      }
    })
    .then(function () {
      setTimeout(() => {
        document
          .querySelector('.first-animation')
          .classList.add('anim-first-screen');
      }, 2000);
    })

    .catch();

  setTimeout(showHeaderElements, 2000);
}
