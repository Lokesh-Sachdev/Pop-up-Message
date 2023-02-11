'use strict';

let docHeight = document.body.offsetHeight;
const popUp = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
let trigger = docHeight / 2;

function showPopUp() {
  if (JSON.parse(localStorage.getItem('popUpMessage')) !== true) {
    window.onscroll = function () {
      let scrollPos = window.pageYOffset;
      if (scrollPos > trigger) {
        popUp.style.display = 'block';
      }
    };
  } else {
    popUp.style.display = 'none';
  }
}
console.log(
  'Key',
  JSON.parse(localStorage.getItem('popUpMessage', JSON.stringify(true)))
);

closeBtn.addEventListener('click', () => {
  popUp.style.display = 'none';
  localStorage.setItem('popUpMessage', true);
  window.location.reload();
  //   showPopUp();
});

showPopUp();
