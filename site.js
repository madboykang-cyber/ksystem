
document.documentElement.classList.add('js');
const hd=document.getElementById('hd');const qb=document.getElementById('qb');
const onS=()=>{const y=scrollY;hd&&hd.classList.toggle('stuck',y>30);qb&&qb.classList.toggle('on',y>420)};addEventListener('scroll',onS,{passive:true});onS();
const bg=document.getElementById('burger'),mn=document.getElementById('mnav');bg&&bg.addEventListener('click',()=>mn.classList.toggle('open'));mn&&mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mn.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.count').forEach(el=>{const to=+el.dataset.to;new IntersectionObserver((es,o)=>{if(!es[0].isIntersecting)return;o.disconnect();const t0=performance.now();const tick=t=>{const p=Math.min(1,(t-t0)/1500);el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)},{threshold:.5}).observe(el)});
const sl=document.querySelectorAll('.hero .slide');if(sl.length){let i=0;sl[0].classList.add('on');setInterval(()=>{sl[i].classList.remove('on');i=(i+1)%sl.length;sl[i].classList.add('on')},7000)}
async function sendLead(kind,fd){const d=new URLSearchParams();d.append('kind',kind);for(const [k,v] of fd.entries())d.append(k,d.has(k)?d.get(k)+', '+v:v);try{await fetch(FORM,{method:'POST',mode:'no-cors',body:d});return true}catch(e){return false}}
document.querySelectorAll('form.cf').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();const b=f.querySelector('button[type=submit]');b.disabled=true;b.textContent='전송 중...';const ok=await sendLead(f.dataset.kind||'케이시스템 문의',new FormData(f));alert(ok?'문의가 접수되었습니다. 확인 후 연락드리겠습니다.':'전송에 실패했습니다. 전화로 문의해 주세요.');if(ok)f.reset();b.disabled=false;b.textContent='문의 보내기'}));
