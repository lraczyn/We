const nav = document.querySelector('.my_nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  // console.log(window.scrollY, my_nav);
  if (window.scrollY > 150) {
    my_nav.classList.add('bg-black');
  } else {
    my_nav.classList.remove('bg-black');
  }
}
