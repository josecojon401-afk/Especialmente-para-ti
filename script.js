
const messages = window.MADELYN_MESSAGES || [];
const giftScreen = document.getElementById('giftScreen');
const cornerScreen = document.getElementById('cornerScreen');
const petals = document.getElementById('petals');
let current = 0;

function burst(count=28){
  for(let i=0;i<count;i++){
    const p=document.createElement('span');
    p.className='petal';
    p.textContent=['🌸','♡','✦'][Math.floor(Math.random()*3)];
    p.style.left=Math.random()*100+'vw';
    p.style.fontSize=(13+Math.random()*20)+'px';
    p.style.animationDuration=(4+Math.random()*5)+'s';
    petals.appendChild(p);
    setTimeout(()=>p.remove(),9500);
  }
}
document.getElementById('openGift').addEventListener('click',()=>{
  burst(45);
  setTimeout(()=>{
    giftScreen.classList.remove('active');
    cornerScreen.classList.add('active');
    document.body.classList.remove('locked');
  },650);
});

const panels=[...document.querySelectorAll('.panel')];
const navButtons=[...document.querySelectorAll('.nav-btn')];
navButtons.forEach(btn=>btn.addEventListener('click',()=>{
  navButtons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  panels.forEach(p=>p.classList.remove('active'));
  document.getElementById(btn.dataset.panel).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}));

const daily=document.getElementById('dailyMessage');
const counter=document.getElementById('counter');
function renderMessage(){
  daily.textContent=messages[current];
  counter.textContent=(current+1)+' / '+messages.length;
}
document.getElementById('prevMsg').addEventListener('click',()=>{current=(current-1+messages.length)%messages.length;renderMessage()});
document.getElementById('nextMsg').addEventListener('click',()=>{current=(current+1)%messages.length;renderMessage()});

const list=document.getElementById('messageList');
messages.forEach((m,i)=>{
  const card=document.createElement('div');
  card.className='message-item';
  card.innerHTML='<strong>Día '+(i+1)+'</strong><p>'+m+'</p>';
  list.appendChild(card);
});

document.getElementById('surpriseBtn').addEventListener('click',()=>{
  document.getElementById('surpriseText').textContent=messages[Math.floor(Math.random()*messages.length)];
  burst(18);
});
document.getElementById('openLetter').addEventListener('click',()=>{
  document.getElementById('envelope').classList.toggle('open');
});
document.getElementById('celebrateBtn').addEventListener('click',()=>burst(60));

const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.memory-grid img').forEach(img=>img.addEventListener('click',()=>{
  lightboxImg.src=img.src;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');
}));
document.getElementById('closeLightbox').addEventListener('click',()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')});
lightbox.addEventListener('click',e=>{if(e.target===lightbox)document.getElementById('closeLightbox').click()});

const musicBtn=document.getElementById('musicBtn');
const audio=document.getElementById('bgMusic');
musicBtn.addEventListener('click',async()=>{
  if(audio.paused){
    try{await audio.play();musicBtn.textContent='🔊 Pausar música'}catch(e){musicBtn.textContent='⚠️ Agrega music.mp3'}
  }else{audio.pause();musicBtn.textContent='🎵 Música'}
});
setInterval(()=>burst(2),3200);
renderMessage();
