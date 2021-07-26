import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
  const headerContainer = utils.createNewElement(
    'div',
    'header__container',
    elements.root
  );
  const logoContainer = utils.createNewElement(
    'div',
    'header__logo-container',
    headerContainer
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
  const icon = utils.createNewElement('i', 'fas fa-phone', contactsContainer);
  utils.createNewList('nav__ul', 'nav__li', 'nav__a', navContainer, arr.menu);
}
