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

// Small deterministic signal illustration. No animation loop, tracking, or model claims.
const study = document.querySelector('.neural-study');
if (study) {
  const weights = [[.9,.35,.7,.2],[.2,.85,.3,.75],[.5,.2,.95,.6]];
  const outputWeights = [[.8,.2,.5],[.3,.9,.25],[.6,.35,.9],[.2,.65,.4]];
  const inputs = [...study.querySelectorAll('.layer-0')];
  const status = study.querySelector('#signal-status');
  let pinned = -1;
  function show(index) {
    const hidden = index < 0 ? [0,0,0,0] : weights[index];
    const output = [0,1,2].map(j => hidden.reduce((sum,h,k)=>sum+h*outputWeights[k][j],0)/4);
    study.querySelectorAll('.edge').forEach(edge => {
      const layer = Number(edge.dataset.layer), from = Number(edge.dataset.from), to = Number(edge.dataset.to);
      const strength = index < 0 ? 0 : layer === 0 ? (from === index ? weights[index][to] : 0) : hidden[from]*outputWeights[from][to];
      edge.style.stroke = strength > .1 ? '#167A5A' : '#b9c7ba';
      edge.style.strokeWidth = String(1 + strength*2.5);
      edge.style.opacity = index < 0 ? '1' : String(.25 + strength*.75);
    });
    study.querySelectorAll('.node').forEach(node => {
      const layer=Number(node.dataset.layer), i=Number(node.dataset.index);
      node.dataset.active=String(layer===0?i===index:layer===1?hidden[i]>.5:output[i]>.3);
      if(layer===0) node.setAttribute('aria-pressed',String(i===pinned));
    });
    status.textContent=index<0?'Fixed-weight illustration':`Input ${index+1} · ${output.map(v=>v.toFixed(2)).join(' / ')}`;
  }
  function select(index) { pinned = pinned === index ? -1 : index; show(pinned); }
  inputs.forEach((input,i)=>{
    input.addEventListener('pointerenter',e=>{ if(e.pointerType!=='touch') show(i); });
    input.addEventListener('pointerleave',()=>show(pinned));
    input.addEventListener('focus',()=>show(i));
    input.addEventListener('blur',()=>show(pinned));
    input.addEventListener('click',()=>select(i));
    input.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i);}if(e.key==='Escape'){pinned=-1;show(-1);}});
  });
}
