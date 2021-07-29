import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
  const firstSectionContainer = utils.createNewElement(
    'div',
    'first-section__container',
    elements.root
  );
  const firstSectionContentContainer = utils.createNewElement(
    'div',
    'first-section__content-container',
    firstSectionContainer
  );
  const logoImg = utils.createSvgImg(
    arr.logo[0],
    arr.logo[1],
    420,
    firstSectionContentContainer,
    'first-section__img'
  );
  const firstSectionTitleInfoContainer = utils.createNewElement(
    'div',
    'first-section__title-container',
    firstSectionContentContainer
  );
  const firstSectionTitle = utils.createNewElement(
    'h2',
    'first-section__title',
    firstSectionTitleInfoContainer,
    arr.title
  );

  const firstSectionButton = utils.createNewElement(
    'button',
    'first-section__button',
    firstSectionContentContainer,
    arr.button,
    'button'
  );
  const firstSectionInfo = utils.createNewElement(
    'p',
    'first-section__p',
    firstSectionTitleInfoContainer
  );
  utils.returnText(
    arr.list,
    firstSectionInfo,
    'anim-p-from-left',
    'anim-p-back'
  );
}
