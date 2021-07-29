import './sass/main.scss';
import { renderHeader } from './js/controllers/headerController';
import { renderFirstSection } from './js/controllers/firstSectionController';

function renderElements() {
  return new Promise(function (resolve, reject) {
    resolve();
    reject();
  });
}

renderElements()
  .then(function () {
    renderHeader();
  })
  .then(function () {
    setTimeout(() => {
      renderFirstSection();
    }, 2500);
  })

  .catch();
renderElements();
