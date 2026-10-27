
const mobileToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
mobileToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('nav-open');
  mobileToggle.setAttribute('aria-expanded', String(isOpen));
});
const navFolders = [...document.querySelectorAll('.site-nav .nav-drop')];
function closeNavFolders(except = null) {
  for (const folder of navFolders) {
    if (folder === except) continue;
    folder.classList.remove('is-open');
    folder.querySelector('.drop-trigger')?.setAttribute('aria-expanded', 'false');
  }
}
for (const folder of navFolders) {
  const button = folder.querySelector('.drop-trigger');
  button?.addEventListener('click', () => {
    const shouldOpen = !folder.classList.contains('is-open');
    closeNavFolders(folder);
    folder.classList.toggle('is-open', shouldOpen);
    button.setAttribute('aria-expanded', String(shouldOpen));
  });
  // Desktop submenu is also opened on hover, as in Squarespace.
  folder.addEventListener('mouseenter', () => {
    if (window.matchMedia('(min-width: 851px) and (hover: hover)').matches) {
      button?.setAttribute('aria-expanded', 'true');
    }
  });
  folder.addEventListener('mouseleave', () => {
    if (window.matchMedia('(min-width: 851px) and (hover: hover)').matches) {
      folder.classList.remove('is-open');
      button?.setAttribute('aria-expanded', 'false');
    }
  });
}
document.addEventListener('click', event => {
  if (!event.target.closest('.site-nav .nav-drop')) closeNavFolders();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeNavFolders();
    const active = document.activeElement;
    if (active?.closest('.site-nav .nav-drop')) active.closest('.nav-drop').querySelector('.drop-trigger')?.focus();
  }
});

document.querySelectorAll('.slider').forEach(slider=>{const slides=[...slider.querySelectorAll('.slide')];if(!slides.length)return;let i=0;const count=slider.querySelector('.slider-count');function go(n){slides[i].classList.remove('is-current');slides[i].setAttribute('aria-hidden','true');i=(n+slides.length)%slides.length;slides[i].classList.add('is-current');slides[i].setAttribute('aria-hidden','false');count.textContent=(i+1)+' / '+slides.length}slider.querySelector('.slider-prev')?.addEventListener('click',()=>go(i-1));slider.querySelector('.slider-next')?.addEventListener('click',()=>go(i+1));slider.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')go(i-1);if(e.key==='ArrowRight')go(i+1)})});

// Reset the homepage to its actual beginning when clicking the brand mark.
// Hash navigation is the primary fix; this also handles Safari/Chrome restoration.
if (document.body.classList.contains('home-page')) {
  const requestedTop = location.hash === '#site-top';
  const topScroll = () => { if (location.hash === '#site-top') window.scrollTo({top:0,left:0,behavior:'instant'}); };
  if (requestedTop) {
    window.history.scrollRestoration = 'manual';
    topScroll();
    window.addEventListener('pageshow', topScroll);
    window.addEventListener('load', topScroll, {once:true});
  }
}
