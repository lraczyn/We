const nav = document.querySelector('.my_nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  // console.log(window.scrollY, my_nav);
  if (window.scrollY > 150) {
    my_nav.classList.remove('opacity-80');
  } else {
    my_nav.classList.add('opacity-80');
  }
}

const aboutLink = document.querySelector('about');
const aboutComponent = doc.querySelector('about_component');
aboutLink.addEventListener('click', navigateToAbout, false);

function navigateToAbout(e) {
  aboutComponent.scrollIntoVie();
}
