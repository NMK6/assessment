export function addMenu(arr, fun, el, cl) {
  const menuContainer = document.querySelector(`.${arr.name}__menu`);
  const ul = document.createElement('ul');
  ul.className = `${arr.name}__nav-ul`;
  menuContainer.appendChild(ul);
  arr.titles.forEach((title) => {
    const li = document.createElement('li');
    li.className = `${arr.name}__nav-li`;
    ul.appendChild(li);
    const link = document.createElement('a');
    if (title == 'home') {
      link.href = '/';
    } else {
      link.href = `#${title}`;
    }

    link.className = `${arr.name}__nav-link ${title}-button`;
    link.textContent = title;
    link.dataset.location = title;
    li.appendChild(link);
  });
  const menuButtons = document.querySelector(`.${arr.name}__menu`);
  menuButtons.addEventListener('click', fun);
  function addMobMenu(el, cl) {
    if (el.width < 601) {
      const menu = document.querySelector(cl);
      const menuButton = menu.parentNode;
      menu.classList.add('visually-hidden');
      menu.parentNode.addEventListener('click', function () {
        menuButton.classList.toggle('close-menu');
        menu.classList.toggle('visually-hidden');
      });
    }
  }
  addMobMenu(el, cl);
}
