import imageminSvgo from 'imagemin-svgo';

export function createNewElement(el, newClass, parent, ...arg) {
  const newElement = document.createElement(el);
  newElement.className = newClass;
  parent.appendChild(newElement);
  if (arg.length > 0) {
    newElement.textContent = arg[0];
    if (arg.length > 1) {
      newElement.type = arg[1];
    }
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
export function createSvgImg(newLink, description, wSize, parent, newClass) {
  const newImg = document.createElement('img');
  newImg.className = newClass;
  newImg.src = newLink;
  newImg.alt = description;
  newImg.width = wSize;
  parent.appendChild(newImg);
}
export function returnText(arr, el, newClass, backClass) {
  setInterval(() => {
    function changeText() {
      return new Promise(function (resolve, reject) {
        resolve();
        reject();
      });
    }

    changeText()
      .then(function () {
        el.textContent = '';
        el.classList.remove(newClass);
        el.classList.remove(backClass);
      })
      .then(function () {
        setTimeout(() => {
          el.textContent = arr[Math.floor(Math.random() * arr.length)];
          el.classList.add(newClass);
        }, 500);
      })
      .then(function () {
        setTimeout(() => {
          el.classList.add(backClass);
        }, 4500);
      })
      .then(function () {
        setTimeout(() => {}, 5500);
      })
      .catch();
    changeText();
  }, 10000);
}
