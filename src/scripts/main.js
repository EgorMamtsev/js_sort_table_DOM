'use strict';

const head = document.querySelectorAll('thead th');

function sortTablet(i) {
  const tbody = document.querySelector('tbody');
  const body = [...document.querySelectorAll('tbody tr')];

  if (isNaN(body[i].children.textContent)) {
    // дороби перевірку коли значення нє є числом,
    // прибери зайві символи та порівняй з localeCompare
  }

  body.sort((a, b) => a.children[i].textContent - b.children[i].textContent);

  body.forEach((el) => tbody.append(el));
}

head.forEach((el, index) => {
  el.addEventListener('click', () => {
    sortTablet(index);
  });
});
// readme відредаговано і закомічено
