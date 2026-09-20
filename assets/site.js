'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const mobile = window.matchMedia('(max-width: 850px)');
function closeMenu() { if (!toggle || !nav) return; toggle.setAttribute('aria-expanded', 'false'); nav.dataset.open = 'false'; }
function syncMenu() { if (!toggle) return; toggle.hidden = !mobile.matches; closeMenu(); }
if (toggle && nav) {
  syncMenu();
  mobile.addEventListener('change', syncMenu);
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.dataset.open = String(open); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
}
