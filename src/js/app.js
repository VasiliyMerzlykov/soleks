const sol = document.querySelectorAll('.linc_nav');
const main = document.querySelectorAll('main > div');

[...sol].map((item, index) => {
  item.addEventListener('click', () => {
    [...main].find((elem) => {
      elem.classList.remove('activ');
      main[index].classList.add('activ');
      return false
    });
  });
  return true;
});
