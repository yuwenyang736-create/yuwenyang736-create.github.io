/* Stage managing production gallery: infinite carousel with three images visible on desktop. */
(() => {
 const root=document.querySelector('.stage-carousel');
 if(!root) return;
 const track=root.querySelector('.stage-track');
 const originals=Array.from(track.children);
 const n=originals.length;
 if(!n)return;
 const before=originals.map(el=>el.cloneNode(true));
 const after=originals.map(el=>el.cloneNode(true));
 for (const cloned of [...before,...after]) cloned.setAttribute('aria-hidden','true');
 track.replaceChildren(...before,...originals,...after);
 // Squarespace reference screenshot begins with Who is Virginia Woolfe, Island, and Spring Awakening.
 let logical=2,physical=n+logical;
 const position=()=>{track.style.transform=`translate3d(calc(var(--stage-inset) - ${physical} * (var(--stage-card-width) + var(--stage-gap))),0,0)`;};
 track.style.transition='none'; position();
 requestAnimationFrame(()=>requestAnimationFrame(()=>{track.style.transition='';}));
 const jump=delta=>{ physical+=delta;logical=(logical+delta+n)%n; position(); };
 track.addEventListener('transitionend',e=>{
  if(e.propertyName!=='transform')return;
  if(physical>=2*n || physical<n){
   physical=n+((physical%n)+n)%n;
   track.style.transition='none';position();track.offsetHeight;track.style.transition='';
  }
 });
 root.querySelector('.stage-arrow-prev')?.addEventListener('click',()=>jump(-1));
 root.querySelector('.stage-arrow-next')?.addEventListener('click',()=>jump(1));
 root.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();jump(1);}else if(e.key==='ArrowLeft'){e.preventDefault();jump(-1)}});
 let x0=null;
 root.addEventListener('touchstart',e=>{x0=e.changedTouches[0].screenX},{passive:true});
 root.addEventListener('touchend',e=>{if(x0===null)return; const dx=e.changedTouches[0].screenX-x0;x0=null;if(Math.abs(dx)>45)jump(dx<0?1:-1)},{passive:true});
})();
