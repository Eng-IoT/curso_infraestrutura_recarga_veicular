const lessons=window.COURSE_LESSONS;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const STORAGE='curso-recarga-veicular-v1';
let state=JSON.parse(localStorage.getItem(STORAGE)||'null')||{completed:[],quiz:{},projectChecks:{},projectSubmitted:false,lastLesson:1,studentName:''};
let currentLesson=null;

function save(){localStorage.setItem(STORAGE,JSON.stringify(state));refreshGlobal()}
function progress(){return state.completed.length}
function unlocked(){return progress()===20 && state.projectSubmitted}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function switchView(name){
  $$('.view').forEach(v=>v.classList.remove('active'));
  $(`#view-${name}`).classList.add('active');
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
  const titles={home:['Formação Profissional','Projetos de Infraestrutura de Recarga Veicular'],course:['Microaulas','20 microaulas • 80 horas'],project:['Projeto Final','Projeto integrador da formação'],certificate:['Certificado','Liberado após a conclusão'],reward:['SAVE Engenharia','Benefício profissional de conclusão']};
  if(titles[name]){$('#pageTitle').textContent=titles[name][0];$('#pageSubtitle').textContent=titles[name][1]}
  $('#stickyLessonNav').classList.add('hidden');currentLesson=null;
  if(innerWidth<900)$('#sidebar').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='project')renderProject();
  if(name==='certificate')renderCertificate();
  if(name==='reward')renderReward();
}
function renderCards(){
  const card=l=>`<article class="lesson-card ${state.completed.includes(l.id)?'done':''}" data-lesson="${l.id}">
    <div class="lesson-thumb"><img src="assets/${l.image}" alt=""><span class="lesson-num">MICROAULA ${l.num}</span><span class="lesson-check">${state.completed.includes(l.id)?'✓':'○'}</span></div>
    <div class="lesson-body"><h4>${l.title}</h4><p>${l.description}</p></div></article>`;
  $('#homeLessons').innerHTML=lessons.slice(0,4).map(card).join('');
  $('#courseLessons').innerHTML=lessons.map(l=>`<article class="lesson-row ${state.completed.includes(l.id)?'done':''}" data-lesson="${l.id}">
    <div class="number">${l.num}</div><div><h4>${l.title}</h4><p>${l.description}</p></div><div class="status">${state.completed.includes(l.id)?'✓ CONCLUÍDA':'4 HORAS →'}</div></article>`).join('');
  $$('[data-lesson]').forEach(x=>x.onclick=()=>openLesson(+x.dataset.lesson));
}
function openLesson(id){
  currentLesson=id;state.lastLesson=id;save();
  const l=lessons[id-1], done=state.completed.includes(id);
  $('#pageTitle').textContent=`Microaula ${l.num}`;$('#pageSubtitle').textContent=l.title;
  const qhtml=l.quiz.map((q,qi)=>`<div class="question" data-q="${qi}"><strong>${qi+1}. ${q[0]}</strong><div class="options">${q[2].map(o=>`<button class="option ${state.quiz[id]?.[qi]===o?'selected':''}" data-answer="${encodeURIComponent(o)}">${o}</button>`).join('')}</div></div>`).join('');
  $('#lessonArticle').innerHTML=`<div class="lesson-hero">
    <div class="lesson-hero-img"><img src="assets/${l.image}" alt=""><div class="lesson-hero-overlay"><span>MICROAULA ${l.num} • 4 HORAS</span><h2>${l.title}</h2><p>${l.description}</p></div></div>
    <div class="lesson-content">
      <section class="lesson-section"><h3>Objetivos de aprendizagem</h3><div class="objective-list">${l.objectives.map(x=>`<div class="objective">✓ ${x}</div>`).join('')}</div></section>
      <section class="lesson-section"><h3>Conteúdo técnico</h3><div class="theory">${l.theory}</div></section>
      <section class="lesson-section"><h3>Fórmula / relação principal</h3><div class="formula"><small>MEMÓRIA DE CÁLCULO</small>${l.formula}</div></section>
      <section class="lesson-section"><h3>Exemplo orientado</h3><div class="example">${l.example}</div></section>
      <section class="lesson-section"><h3>Atividade prática • Memória do Projeto</h3><div class="activity">${l.activity}</div></section>
      <section class="lesson-section"><h3>Quiz rápido</h3><div class="quiz">${qhtml}</div></section>
    </div></div>`;
  $$('.option').forEach(b=>b.onclick=e=>answerQuiz(id,+e.target.closest('.question').dataset.q,decodeURIComponent(b.dataset.answer)));
  renderLessonNav();
  $$('.view').forEach(v=>v.classList.remove('active'));$('#view-lesson').classList.add('active');
  $$('.nav-item').forEach(b=>b.classList.remove('active'));
  $('#stickyLessonNav').classList.remove('hidden');
  window.scrollTo({top:0});
}
function answerQuiz(id,qi,answer){
  state.quiz[id]??={};state.quiz[id][qi]=answer;save();
  const l=lessons[id-1],correct=l.quiz[qi][1];
  const q=$(`.question[data-q="${qi}"]`);
  q.querySelectorAll('.option').forEach(b=>{const val=decodeURIComponent(b.dataset.answer);b.classList.toggle('correct',val===correct);b.classList.toggle('wrong',val===answer&&val!==correct)});
  toast(answer===correct?'Resposta correta':'Revise este conceito');
}
function allQuizAnswered(id){
  const l=lessons[id-1], q=state.quiz[id]||{};
  return l.quiz.every((_,i)=>q[i]!==undefined);
}
function completeLesson(id){
  if(!allQuizAnswered(id)){toast('Responda ao quiz antes de concluir a aula');return}
  if(!state.completed.includes(id))state.completed.push(id);
  state.completed.sort((a,b)=>a-b);save();toast('Microaula concluída');
  renderLessonNav();renderCards();
}
function renderLessonNav(){
  if(!currentLesson)return;
  const id=currentLesson,done=state.completed.includes(id),prev=id>1,next=id<20;
  const html=`<button class="btn outline" ${!prev?'disabled':''} data-prev="${id-1}">← Aula anterior</button>
    <button class="btn complete" data-complete="${id}">${done?'✓ Aula concluída':'✓ Concluir aula'}</button>
    <button class="btn primary" ${!next||!done?'disabled':''} data-next="${id+1}">${id===20?'Finalizar':'Próxima aula →'}</button>`;
  $('#lessonEndNav').innerHTML=html;$('#stickyLessonNav').innerHTML=html;
  $$('[data-prev]').forEach(b=>b.onclick=()=>openLesson(+b.dataset.prev));
  $$('[data-complete]').forEach(b=>b.onclick=()=>completeLesson(+b.dataset.complete));
  $$('[data-next]').forEach(b=>b.onclick=()=>{if(id<20)openLesson(+b.dataset.next);else switchView('project')});
}
const deliverableNames=[
 ['identificacao','Identificação e dados do empreendimento','Cliente, local, responsável e premissas do projeto.'],
 ['levantamento','Levantamento da instalação','Entrada, QGBT, alimentadores, transformador e registros de campo.'],
 ['curva','Curva de carga','Curva medida ou simulada com origem dos dados.'],
 ['demanda','Demanda e DLM','Cenários de recarga e justificativa da estratégia.'],
 ['circuitos','Dimensionamento dos circuitos','Correntes, cabos, queda e proteção.'],
 ['aterramento','Aterramento e equipotencialização','Integração do SAVE ao sistema de proteção.'],
 ['unifilar','Diagrama unifilar','Representação clara da alimentação e dos pontos de recarga.'],
 ['materiais','Lista de materiais','Equipamentos e componentes principais.'],
 ['documentacao','Memorial e checklist','Memorial de cálculo, pré-validação e documentação.'],
 ['comissionamento','Comissionamento','Inspeções, testes e registro final.']
];
function renderProject(){
  $('#deliverables').innerHTML=deliverableNames.map(([k,t,d])=>`<label class="deliverable"><input type="checkbox" data-del="${k}" ${state.projectChecks[k]?'checked':''}><div><strong>${t}</strong><small>${d}</small></div></label>`).join('');
  $$('[data-del]').forEach(c=>c.onchange=()=>{state.projectChecks[c.dataset.del]=c.checked;save();renderProjectStatus()});
  renderProjectStatus();
}
function renderProjectStatus(){
  const ok=deliverableNames.every(([k])=>state.projectChecks[k]);
  $('#submitProjectBtn').disabled=!ok;
  $('#submitProjectBtn').textContent=state.projectSubmitted?'✓ Projeto Final confirmado':'Confirmar Projeto Final';
  $('#projectBigStatus').textContent=state.projectSubmitted?'✓':'🔒';
  $('#projectBigStatus').style.color=state.projectSubmitted?'#18b832':'';
}
function submitProject(){state.projectSubmitted=true;save();renderProjectStatus();toast('Projeto Final confirmado — verifique seu benefício')}
function renderCertificate(){
  const ok=unlocked();$('#certificateLocked').classList.toggle('hidden',ok);$('#certificateReady').classList.toggle('hidden',!ok);
  $('#studentName').value=state.studentName||'';$('#certName').textContent=state.studentName||'Aluno(a)';
}
function renderReward(){
  const ok=unlocked();$('#rewardLocked').classList.toggle('hidden',ok);$('#rewardReady').classList.toggle('hidden',!ok);
  $('#unlockText').textContent=`${progress()}/20 aulas • Projeto ${state.projectSubmitted?'entregue':'pendente'}`;
  $('#unlockBar').style.width=`${Math.round(progress()/20*100)}%`;
}
function refreshGlobal(){
  const p=progress(),pct=Math.round(p/20*100);
  $('#progressPct').textContent=pct+'%';$('#progressText').textContent=`${p} de 20 aulas`;
  $('#progressRing').style.setProperty('--p',pct);
  $('#rewardLock').textContent=unlocked()?'✓':'🔒';
  $('#homeRewardStatus').textContent=unlocked()?'✓ Liberado':'🔒 Bloqueado';
  renderCards();
}
$('#startBtn').onclick=()=>openLesson(state.lastLesson||1);
$('#continueBtn').onclick=()=>openLesson(state.lastLesson||1);
$$('[data-go]').forEach(b=>b.onclick=()=>switchView(b.dataset.go));
$$('.nav-item').forEach(b=>b.onclick=()=>switchView(b.dataset.view));
$('#menuBtn').onclick=()=>$('#sidebar').classList.toggle('open');
$('#submitProjectBtn').onclick=submitProject;
$('#studentName').oninput=e=>{state.studentName=e.target.value;$('#certName').textContent=e.target.value||'Aluno(a)';save()};
$('#printCertBtn').onclick=()=>window.print();
window.addEventListener('scroll',()=>{if(currentLesson){const art=$('#lessonArticle').getBoundingClientRect();$('#stickyLessonNav').classList.toggle('hidden',art.bottom<180)}});
refreshGlobal();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});