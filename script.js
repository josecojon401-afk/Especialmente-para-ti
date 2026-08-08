const messages = [["🌷 Tierno", "Madelyn, hoy quiero recordarte que tu forma de ser tiene algo muy bonito: haces que las personas que te rodean se sientan especiales. Nunca dejes de ser tú."], ["✨ Elegante", "Hay personas que no necesitan hacer mucho para dejar una huella bonita. Tu presencia, tu esencia y tu manera de tratar a los demás hablan por ti."], ["😊 Divertido", "Aviso importante para Madelyn: hoy tienes permiso oficial para sonreír sin motivo, disfrutar las cosas pequeñas y hacer como que no viste este mensaje si te hace sonrojar. 😄"], ["💕 Emotivo", "Gracias por ser una de esas personas que hacen que la amistad tenga un significado especial. Me alegra mucho poder llamarte amiga."], ["🌷 Tierno", "Ojalá hoy encuentres un motivo inesperado para sonreír. Y si no aparece, recuerda que al menos alguien se tomó el tiempo de dejarte estas palabras."], ["✨ Elegante", "Tu valor no depende de cuánto haces por los demás. Eres valiosa simplemente por ser quien eres."], ["😊 Divertido", "Madelyn, recuerda: si hoy todo sale perfecto, celébralo. Si no sale perfecto, también. Y si nada sale bien… pide algo rico y reinicia el día. 😂"], ["💕 Emotivo", "Las amistades bonitas no siempre necesitan grandes palabras. A veces basta saber que hay alguien que te aprecia sinceramente y desea verte bien."], ["🌷 Tierno", "Que este día te trate con la misma dulzura con la que tú has sabido tratar a tantas personas."], ["✨ Elegante", "Nunca subestimes el efecto de una sonrisa, una palabra amable o un pequeño gesto. En ti, esas cosas tienen un brillo especial."], ["😊 Divertido", "Hoy tienes una misión: sonreír al menos tres veces. Si alguien pregunta por qué, puedes responder: 'Porque sí'. 😌"], ["💕 Emotivo", "Me gusta saber que en este mundo coincidimos en el mismo camino y que, de alguna manera, nuestra amistad se convirtió en parte de la historia."], ["🌷 Tierno", "Si hoy tienes un día difícil, recuerda respirar, tomarlo con calma y darte permiso para descansar. No tienes que poder con todo siempre."], ["✨ Elegante", "Hay belleza en las personas que conservan un corazón noble aun después de haber vivido días complicados. Eso también es fortaleza."], ["😊 Divertido", "Recordatorio para Madelyn: eres demasiado importante como para pasar todo el día preocupándote. Así que primero sonríe… después vemos qué problema resolvemos. 😄"], ["💕 Emotivo", "Algunas personas llegan sin hacer ruido y terminan ocupando un lugar bonito en nuestros pensamientos. Gracias por ser una de ellas."], ["🌷 Tierno", "Deseo que hoy recibas un poquito de todo lo bonito que has dado: cariño, paciencia, sonrisas y buenos momentos."], ["✨ Elegante", "Tu esencia es tu mejor presentación. No necesitas compararte con nadie; tu historia tiene su propio brillo."], ["😊 Divertido", "Madelyn, si este mensaje te hizo sonreír, misión cumplida. Si no… vuelve a leerlo con cara de película dramática. 😂🎬"], ["💕 Emotivo", "Hay amistades que se agradecen en silencio y otras que merecen decirse en voz alta. La tuya merece un enorme: gracias por existir y por ser una buena amiga."], ["🌷 Tierno", "Que nunca te falte alguien que te recuerde que puedes, que vales y que eres capaz de superar los días difíciles."], ["✨ Elegante", "La verdadera belleza de una persona se descubre en su manera de hacer sentir a los demás. Y tú tienes una forma muy especial de dejar buenos recuerdos."], ["😊 Divertido", "Hoy no se aceptan pensamientos negativos sin autorización. Para solicitar permiso, primero debes presentar una sonrisa. 😌"], ["💕 Emotivo", "Quizá no siempre lo diga, pero aprecio mucho esos pequeños momentos, conversaciones y detalles que hacen que nuestra amistad sea especial."], ["🌷 Tierno", "Si pudieras verte por un momento con los ojos de quienes te quieren, probablemente descubrirías muchas razones para sentirte orgullosa de la persona que eres."], ["✨ Elegante", "Sigue caminando a tu ritmo. No todas las flores abren el mismo día, y eso no hace menos hermosa a ninguna."], ["😊 Divertido", "Madelyn, hoy tienes derecho a ignorar por cinco minutos todas las preocupaciones y dedicarte exclusivamente a ser feliz. Es una orden. 😄"], ["💕 Emotivo", "Gracias por cada conversación, cada risa y cada momento compartido. Son pequeñas cosas que, con el tiempo, se convierten en grandes recuerdos."], ["🌷 Tierno", "Espero que hoy algo bonito te encuentre sin que tengas que buscarlo: una sonrisa, una buena noticia, una canción o simplemente un momento de paz."], ["✨ Elegante", "Nunca olvides que ser una persona auténtica es mucho más valioso que intentar encajar. Tu manera de ser es parte de lo que te hace especial."], ["💕 Emotivo", "Llegamos al último día de agosto, pero no al último mensaje. Si alguna vez dudas de cuánto vales como amiga, vuelve a este pequeño rincón y recuerda: hay personas que agradecen haberte encontrado en su camino."]];
const cover = document.getElementById('cover');
const notes = document.getElementById('notes');
const openBtn = document.getElementById('openBtn');
const backBtn = document.getElementById('backBtn');
const todayBtn = document.getElementById('todayBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dateTitle = document.getElementById('dateTitle');
const dayNumber = document.getElementById('dayNumber');
const styleBadge = document.getElementById('styleBadge');
const message = document.getElementById('message');
const progressBar = document.getElementById('progressBar');
const calendar = document.getElementById('calendar');
let currentDay = 1;

const today = new Date();
const isAugust2026 = today.getFullYear() === 2026 && today.getMonth() === 7;
const defaultDay = isAugust2026 ? today.getDate() : 1;

function renderCalendar(){
  calendar.innerHTML='';
  for(let d=1; d<=31; d++){
    const b=document.createElement('button');
    b.textContent=d;
    if(d===currentDay)b.classList.add('current');
    if(isAugust2026 && d===today.getDate())b.classList.add('today');
    b.addEventListener('click',()=>showDay(d));
    calendar.appendChild(b);
  }
}

function showDay(day){
  currentDay=Math.max(1,Math.min(31,day));
  const item=messages[currentDay-1];
  const date=new Date(2026,7,currentDay);
  const label=date.toLocaleDateString('es-GT',{weekday:'long',day:'numeric',month:'long'});
  dateTitle.textContent=label.charAt(0).toUpperCase()+label.slice(1);
  dayNumber.textContent=`Día ${currentDay} de 31`;
  styleBadge.textContent=item[0];
  typeMessage(item[1]);
  progressBar.style.width=`${(currentDay/31)*100}%`;
  renderCalendar();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openNotes(day=defaultDay){
  cover.classList.remove('active'); notes.classList.add('active'); showDay(day);
}
if(openBtn) openBtn.addEventListener('click',()=>openNotes());
if(backBtn) backBtn.addEventListener('click',()=>{notes.classList.remove('active');cover.classList.add('active');});
if(todayBtn) todayBtn.addEventListener('click',()=>showDay(defaultDay));
if(prevBtn) prevBtn.addEventListener('click',()=>showDay(currentDay-1));
if(nextBtn) nextBtn.addEventListener('click',()=>showDay(currentDay+1));
document.addEventListener('keydown',e=>{
  if(!notes.classList.contains('active')) return;
  if(e.key==='ArrowLeft')showDay(currentDay-1);
  if(e.key==='ArrowRight')showDay(currentDay+1);
});

const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseInNotes = document.getElementById('surpriseInNotes');
const letterBtn = document.getElementById('letterBtn');
const letterContent = document.getElementById('letterContent');

function surprise(){
  const randomDay = Math.floor(Math.random()*31)+1;
  openNotes(randomDay);
}
if (surpriseBtn) surpriseBtn.addEventListener('click', surprise);
if (surpriseInNotes) surpriseInNotes.addEventListener('click', surprise);
if(letterBtn) letterBtn.addEventListener('click', ()=>{
  letterContent.classList.toggle('open');
  letterBtn.textContent = letterContent.classList.contains('open')
    ? '💗 Cerrar la pequeña carta'
    : '💌 Abrir una pequeña carta';
});

const giftBox = document.getElementById('giftBox');
const giftScene = document.getElementById('giftScene');
const giftIntro = document.getElementById('giftIntro');
const closingBtn = document.getElementById('closingBtn');
const closingMessage = document.getElementById('closingMessage');
const bgMusic = document.getElementById('legacyBgMusic');

function openGift(){
  if(giftScene.classList.contains('opened')) return;
  giftScene.classList.add('opened');
  giftBox.classList.add('opening');
  setTimeout(()=>{
    giftScene.style.display='none';
    giftIntro.classList.add('visible');
  },700);
}
if(giftBox) giftBox.addEventListener('click', openGift);
if(giftBox) giftBox.addEventListener('keydown', e=>{ if(e.key==='Enter' || e.key===' ') openGift(); });

if(closingBtn) closingBtn.addEventListener('click', ()=>{
  closingMessage.classList.toggle('open');
  closingBtn.textContent = closingMessage.classList.contains('open')
    ? '💗 Ocultar mensaje final'
    : '🎁 Ver el mensaje final';
});

/* Si colocas un archivo music.mp3 junto a index.html, intentará reproducirlo
   al entrar al regalo; los navegadores pueden exigir una interacción del usuario. */
if(document.getElementById('openBtn')) document.getElementById('openBtn').addEventListener('click', ()=>{
  if(bgMusic && bgMusic.src) bgMusic.play().catch(()=>{});
});

const reasons=["Tu amistad hace que los días comunes se sientan un poco más bonitos.","Tu manera de escuchar hace sentir importante a quien está contigo.","Tienes una esencia auténtica que no necesita compararse con nadie.","Tu sonrisa puede cambiar el ánimo de un día entero.","Sabes convertir pequeños momentos en recuerdos especiales.","Tu corazón conserva ternura incluso después de los días difíciles.","Eres de esas personas cuya presencia se agradece de verdad.","Tu amistad inspira confianza, cariño y tranquilidad.","Tienes una forma especial de dejar huellas bonitas.","Porque simplemente siendo tú ya haces una diferencia."];
let reasonIndex=0, typingTimer;

function typeMessage(text){clearInterval(typingTimer);message.textContent='';message.classList.add('typing');let i=0;typingTimer=setInterval(()=>{message.textContent+=text[i++]||'';if(i>=text.length){clearInterval(typingTimer);message.classList.remove('typing')}},18)}
function celebrate(count=55){const icons=['✦','♡','✧','❀'];for(let i=0;i<count;i++){const p=document.createElement('span');p.className='particle';p.textContent=icons[Math.floor(Math.random()*icons.length)];p.style.left=Math.random()*100+'vw';p.style.fontSize=(10+Math.random()*18)+'px';p.style.color=['#d7a4b6','#f0d4dd','#b89a67','#ffffff'][Math.floor(Math.random()*4)];p.style.setProperty('--x',(Math.random()*160-80)+'px');p.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),5200)}}
const reasonBtn=document.getElementById('reasonBtn');if(reasonBtn)reasonBtn.addEventListener('click',()=>{reasonIndex=(reasonIndex+1)%reasons.length;const el=document.getElementById('reasonText');el.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:450});el.textContent=reasons[reasonIndex]});
if(letterBtn)letterBtn.addEventListener('click',()=>letterBtn.classList.toggle('open'));
const celebrateBtn=document.getElementById('celebrateBtn');if(celebrateBtn)celebrateBtn.addEventListener('click',()=>celebrate(70));
const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage'),closeLightbox=document.getElementById('closeLightbox');if(lightbox&&lightboxImage){document.querySelectorAll('.memory-grid img,.photo-frame img').forEach(img=>img.addEventListener('click',()=>{lightboxImage.src=img.src;lightbox.classList.add('open')}));if(closeLightbox)closeLightbox.addEventListener('click',()=>lightbox.classList.remove('open'));lightbox.addEventListener('click',e=>{if(e.target.id==='lightbox')e.currentTarget.classList.remove('open')});}
const musicBtn=document.getElementById('musicBtn');if(musicBtn&&bgMusic)musicBtn.addEventListener('click',()=>{if(bgMusic.paused){bgMusic.play().then(()=>musicBtn.classList.add('playing')).catch(()=>{})}else{bgMusic.pause();musicBtn.classList.remove('playing')}});
const originalOpenGift=openGift;openGift=function(){originalOpenGift();celebrate(38)};


(function(){
  const body = document.body;
  const intro = null;
  const enter = null;
  const petals = document.getElementById('luxuryPetals');
  const musicBtn = document.getElementById('legacyLuxuryMusicBtn');
  const audio = document.getElementById('legacyLuxuryAudio');
  const celebrate = document.getElementById('luxuryCelebrate');

  function petalBurst(count=24){
    if(!petals) return;
    const symbols = ['🌸','🌷','♡','✦'];
    for(let i=0;i<count;i++){
      const p = document.createElement('span');
      p.className = 'luxury-petal';
      p.textContent = symbols[Math.floor(Math.random()*symbols.length)];
      p.style.left = Math.random()*100 + 'vw';
      p.style.fontSize = (13 + Math.random()*20) + 'px';
      p.style.animationDuration = (4 + Math.random()*5) + 's';
      p.style.animationDelay = (Math.random()*1.2) + 's';
      petals.appendChild(p);
      setTimeout(()=>p.remove(),10000);
    }
  }

  function enterExperience(){
    body.classList.remove('luxury-locked'); body.classList.add('luxury-ready');
    if(intro) intro.classList.add('hide');
    petalBurst(36);
  }

  if(enter) enter.addEventListener('click', enterExperience);
  if(celebrate) celebrate.addEventListener('click', ()=>petalBurst(60));

  if(musicBtn && audio){
    musicBtn.addEventListener('click', async ()=>{
      if(audio.paused){
        try{
          await audio.play();
          musicBtn.textContent='🔊 Música';
        }catch(e){
          musicBtn.textContent='🎵 Agrega music.mp3';
        }
      }else{
        audio.pause();
        musicBtn.textContent='🎵 Música';
      }
    });
  }

  setInterval(()=>petalBurst(2),2600);
})();


(function(){
  const button = document.getElementById('luxuryMusicBtn');
  const audio = document.getElementById('bgMusic');
  const status = document.getElementById('audioStatus');
  if(!button || !audio) return;

  const setStatus = text => { if(status) status.textContent = text; };

  audio.addEventListener('canplay', ()=>setStatus('Audio listo'));
  audio.addEventListener('playing', ()=>{
    button.textContent = '🔊 Pausar música';
    setStatus('Reproduciendo');
  });
  audio.addEventListener('pause', ()=>{
    button.textContent = '🎵 Reproducir música';
    if(audio.currentTime > 0) setStatus('Música en pausa');
  });
  audio.addEventListener('error', ()=>{
    setStatus('No se encontró music.mp3');
    button.textContent = '⚠️ Audio no disponible';
  });

  button.addEventListener('click', async ()=>{
    if(audio.paused){
      try{
        await audio.play();
      }catch(error){
        setStatus('Verifica que el archivo se llame music.mp3');
      }
    }else{
      audio.pause();
    }
  });
})();


(function(){
  const cover = document.getElementById('visualCover');
  const enterButton = document.getElementById('enterVisualCover');
  if(!cover || !enterButton) return;

  enterButton.addEventListener('click', ()=>{
    document.body.classList.remove('visual-cover-locked');
    document.body.classList.add('luxury-ready');
    cover.classList.add('hidden');

    const giftScene = document.getElementById('giftScene');
    const giftIntro = document.getElementById('giftIntro');
    if(giftScene) giftScene.style.display = 'none';
    if(giftIntro) giftIntro.classList.add('visible');

    setTimeout(()=>cover.remove(),800);
  });
})();
