import imageminSvgo from 'imagemin-svgo';

export function createNewElement(el, newClass, parent, ...arg) {
  const newElement = document.createElement(el);
  newElement.className = newClass;
  parent.appendChild(newElement);
  if (arg.length > 0) {
    newElement.textContent = arg;
  }
  return newElement;
}

export function createNewList(newClass, liClass, aClass, parent, arr) {
  const newList = document.createElement('ul');
  newList.className = newClass;
  parent.appendChild(newList);
  arr.forEach((el) => {
    const newLi = document.createElement('li');
    newLi.className = liClass;

    const newLink = document.createElement('a');
    newLink.className = aClass;
    newLink.textContent = el.name[0];
    newLink.href = el.name[1];
    newList.appendChild(newLi);
    newLi.appendChild(newLink);
  });
}
export function createIcon(arr, parent, newClass) {
  arr.icons.forEach((el, key) => {
    const newContainer = document.createElement('div');
    newContainer.className = newClass;
    const icon = document.createElement('i');
    icon.className = el;
    const newLink = document.createElement('a');
    newLink.href = arr.iLink[key];
    newLink.title = 'contact us';
    parent.appendChild(newContainer);
    newContainer.appendChild(icon);
    icon.appendChild(newLink);
  });
}
export function createSvgImg(newLink, description, wSize, parent) {
  const newImg = document.createElement('img');
  newImg.src = newLink;
  newImg.alt = description;
  newImg.width = wSize;
  parent.appendChild(newImg);
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
