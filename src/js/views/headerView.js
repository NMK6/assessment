import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
  const headerContainer = utils.createNewElement(
    'header',
    'header__container',
    elements.root
  );
  const logoContainer = utils.createNewElement(
    'div',
    'header__logo-container',
    headerContainer
  );
  const logo = utils.createNewElement('div', 'header__logo', logoContainer);
  const logoTitleContainer = utils.createNewElement(
    'h1',
    'header__logo-title',
    logoContainer
  );
  const logoImg = utils.createSvgImg(arr.myLogo[0], arr.myLogo[1], 70, logo);
  const logoTitleFirst = utils.createNewElement(
    'span',
    'logo__title-span',
    logoTitleContainer,
    arr.title[0]
  );
  const logoTitleSecond = utils.createNewElement(
    'span',
    'logo__title-span',
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
  utils.createIcon(arr, contactsContainer, 'menu__icon');
  utils.createNewList('nav__ul', 'nav__li', 'nav__a', navContainer, arr.menu);
}
