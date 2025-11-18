// Burger slide menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const backdrop = document.getElementById('menuBackdrop');

function openMenu(){
  mobileMenu.classList.add('open');
  backdrop.classList.add('show');
  mobileMenu.setAttribute('aria-hidden','false');
}
function hideMenu(){
  mobileMenu.classList.remove('open');
  backdrop.classList.remove('show');
  mobileMenu.setAttribute('aria-hidden','true');
}

burger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', hideMenu);
backdrop.addEventListener('click', hideMenu);

// Testimonials (simple slider via scroll)
const tsTrack = document.getElementById('tsTrack');
document.getElementById('tsNext').addEventListener('click', () => {
  tsTrack.scrollBy({left: tsTrack.clientWidth, behavior: 'smooth'});
});
document.getElementById('tsPrev').addEventListener('click', () => {
  tsTrack.scrollBy({left: -tsTrack.clientWidth, behavior: 'smooth'});
});
