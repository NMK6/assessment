export function createNewElement(el, newClass, parent) {
  const newElement = document.createElement(el);
  newElement.className = newClass;
  parent.appendChild(newElement);
  return newElement;
}

export function createNewList(newClass, liClass, aClass, parent, arr) {
  const newList = document.createElement('ul');
  newList.className = newClass;
  parent.appendChild(newList);
  arr.forEach((el) => {
    const newLi = document.createElement('li');
    newLi.className = liClass;
    newLi.textContent = el.name[0];
    const newLink = document.createElement('a');
    newLink.className = aClass;
    newLink.href = el.name[1];
    newList.appendChild(newLi);
    newLi.appendChild(newLink);
  });
}
export function addMenu(arr, fun, el, cl) {
  const headerContainer = document.createElement('div');
  headerContainer.className = 'header__container';
  //   const ul = document.createElement('ul');
  //   ul.className = `${arr.name}__nav-ul`;
  //   menuContainer.appendChild(ul);
  //   arr.titles.forEach((title) => {
  //     const li = document.createElement('li');
  //     li.className = `${arr.name}__nav-li`;
  //     ul.appendChild(li);
  //     const link = document.createElement('a');
  //     if (title == 'home') {
  //       link.href = '/';
  //     } else {
  //       link.href = `#${title}`;
  //     }

  //     link.className = `${arr.name}__nav-link ${title}-button`;
  //     link.textContent = title;
  //     link.dataset.location = title;
  //     li.appendChild(link);
  //   });
  //   const menuButtons = document.querySelector(`.${arr.name}__menu`);
  //   menuButtons.addEventListener('click', fun);
  //   function addMobMenu(el, cl) {
  //     if (el.width < 601) {
  //       const menu = document.querySelector(cl);
  //       const menuButton = menu.parentNode;
  //       menu.classList.add('visually-hidden');
  //       menu.parentNode.addEventListener('click', function () {
  //         menuButton.classList.toggle('close-menu');
  //         menu.classList.toggle('visually-hidden');
  //       });
  //     }
  //   }
}
