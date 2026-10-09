
const lessons=window.COURSE_LESSONS;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const assetSrc=name=>(window.INLINE_ASSETS&&window.INLINE_ASSETS[name])?window.INLINE_ASSETS[name]:`assets/${name}`;
const STORAGE='curso-instalador-carregadores-v11';
const LEGACY_STORAGES=['curso-instalador-carregadores-v9','curso-recarga-veicular-v8','curso-recarga-veicular-v7','curso-recarga-veicular-v6'];
const DEFAULT_STATE={completed:[],quiz:{},projectChecks:{},projectSubmitted:false,lastLesson:1,courseStartedAt:null,student:{name:'',email:'',city:'',uf:'',phone:'',cpf:'',consent:false},certificate:null};
function storageGet(key){try{return localStorage.getItem(key)}catch(e){return null}}
function storageSet(key,val){try{localStorage.setItem(key,val);return true}catch(e){return false}}
let state=JSON.parse(storageGet(STORAGE)||'null');
if(!state){for(const k of LEGACY_STORAGES){state=JSON.parse(storageGet(k)||'null');if(state)break;}}
state=state||structuredClone(DEFAULT_STATE);
state.student=state.student||{name:state.studentName||'',email:'',city:'',uf:'',phone:'',cpf:'',consent:false};
state.certificate=state.certificate||null;
let currentLesson=null;
const CERT_CONFIG={
  course:'Instalador de Carregadores Veiculares e Infraestrutura de Recarga',
  workload:'80 horas',
  modality:'On-line / Autoinstrucional',
  location:'Rio Branco/AC',
  instructor:'Joelson M. Mendes',
  instructorRole:'Especialista em Energia, IoT e Indústria 4.0',
  responsible:'Joelson M. Mendes',
  responsibleRole:'Responsável técnico da formação',
  artTrt:'',
  organization:'Joelson Mendes — Treinamentos e Serviços Técnicos',
  publicValidationBase:'' // opcional: URL pública absoluta do validar.html após publicação
};

function auditCourseData(){
  const issues=[];
  if(lessons.length!==20)issues.push(`Esperadas 20 microaulas; encontradas ${lessons.length}.`);
  const seen=new Set();
  lessons.forEach(l=>{
    if(!Array.isArray(l.quiz)||l.quiz.length!==5)issues.push(`Microaula ${l.id}: deve conter exatamente 5 questões.`);
    (l.quiz||[]).forEach((q,idx)=>{
      if(!Array.isArray(q)||q.length!==3){issues.push(`Microaula ${l.id}, Q${idx+1}: estrutura inválida.`);return;}
      const [text,answer,opts]=q;
      if(!text||!answer||!Array.isArray(opts))issues.push(`Microaula ${l.id}, Q${idx+1}: campos ausentes.`);
      const count=Array.isArray(opts)?opts.filter(o=>o===answer).length:0;
      if(count!==1)issues.push(`Microaula ${l.id}, Q${idx+1}: resposta correta deve aparecer exatamente uma vez nas alternativas.`);
      const key=(text||'').trim().toLowerCase(); if(seen.has(key))issues.push(`Questão duplicada: ${text}`); else seen.add(key);
    });
  });
  return issues;
}
function sanitizeStoredQuiz(){
  state.quiz=state.quiz||{};
  const completed=new Set(state.completed||[]);
  lessons.forEach(l=>{
    const answers=state.quiz[l.id]||{};
    let invalid=false;
    Object.keys(answers).forEach(k=>{
      const qi=Number(k),q=l.quiz?.[qi];
      if(!q||!q[2].includes(answers[k])){delete answers[k];invalid=true;}
    });
    if(invalid||Object.keys(answers).length<5)completed.delete(l.id);
    state.quiz[l.id]=answers;
  });
  state.completed=[...completed].sort((a,b)=>a-b);
}
const COURSE_DATA_ISSUES=auditCourseData();
sanitizeStoredQuiz();


function save(){storageSet(STORAGE,JSON.stringify(state));refreshGlobal()}
function progress(){return state.completed.length}
function courseComplete(){return progress()===20 && state.projectSubmitted}
function certificateIssued(){return !!state.certificate?.issued}
function rewardUnlocked(){return courseComplete() && certificateIssued()}
function profileComplete(){return !!(state.student?.name?.trim() && state.student?.email?.trim() && state.student?.city?.trim() && state.student?.uf?.trim() && state.student?.consent)}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
function switchView(name){
  $$('.view').forEach(v=>v.classList.remove('active'));
  $(`#view-${name}`).classList.add('active');
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
  const titles={home:['Formação Profissional','Instalador de Carregadores Veiculares e Infraestrutura de Recarga • V11'],course:['Microaulas','20 microaulas • 80 horas • teoria + prática'],wiring:['Laboratório de Ligações','Esquemas práticos por potência, topologia e fabricante'],project:['Projeto Final','Projeto integrador da formação'],profile:['Meus dados','Cadastro para certificado e histórico'],certificate:['Certificado','Emissão após conclusão integral'],reward:['SAVE Engenharia','Benefício profissional de conclusão']};
  if(titles[name]){$('#pageTitle').textContent=titles[name][0];$('#pageSubtitle').textContent=titles[name][1]}
  $('#stickyLessonNav').classList.add('hidden'); currentLesson=null;
  if(innerWidth<900)$('#sidebar').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='wiring')renderWiringLibrary();
  if(name==='project')renderProject();
  if(name==='profile')renderProfile();
  if(name==='certificate')renderCertificate();
  if(name==='reward')renderReward();
}
function renderCards(){
  const card=l=>`<article class="lesson-card ${state.completed.includes(l.id)?'done':''}" data-lesson="${l.id}">
    <div class="lesson-thumb"><img src="${assetSrc(l.image)}" alt=""><span class="lesson-num">MICROAULA ${l.num}</span><span class="lesson-check">${state.completed.includes(l.id)?'✓':'○'}</span></div>
    <div class="lesson-body"><h4>${l.title}</h4><p>${l.description}</p></div></article>`;
  $('#homeLessons').innerHTML=lessons.slice(0,4).map(card).join('');
  $('#courseLessons').innerHTML=lessons.map(l=>`<article class="lesson-row ${state.completed.includes(l.id)?'done':''}" data-lesson="${l.id}">
    <div class="number">${l.num}</div><div><h4>${l.title}</h4><p>${l.description}</p></div><div class="status">${state.completed.includes(l.id)?'✓ CONCLUÍDA':'5 QUESTÕES • 4H'}</div></article>`).join('');
  $$('[data-lesson]').forEach(x=>x.onclick=()=>openLesson(+x.dataset.lesson));
}
function renderReferences(list=[]){
  if(!list.length) return '';
  return `<section class="lesson-section"><h3>Fontes técnicas consultadas</h3><div class="ref-grid">${list.map(([label,url])=>url.startsWith('source:')?`<span class="ref-chip source-ref">${label}</span>`:`<a class="ref-chip" href="${url}" target="_blank" rel="noopener">${label}</a>`).join('')}</div></section>`;
}
function renderNorms(list=[]){
  if(!list.length) return '';
  return `<section class="lesson-section"><h3>Normas e documentos aplicáveis</h3><div class="pill-grid">${list.map(x=>`<span class="pill">${x}</span>`).join('')}</div></section>`;
}
function renderHighlights(list=[]){
  if(!list.length) return '';
  return `<section class="lesson-section"><h3>Pontos-chave da microaula</h3><div class="highlight-grid">${list.map(x=>`<div class="highlight-item">${x}</div>`).join('')}</div></section>`;
}
function renderSupportImage(l){
  if(!l.supportImage) return '';
  return `<section class="lesson-section"><h3>Material visual de apoio</h3><figure class="support-figure"><img src="${assetSrc(l.supportImage)}" alt="${l.supportCaption||''}"><figcaption>${l.supportCaption||''}</figcaption></figure></section>`;
}

function renderManufacturerCase(c){
  if(!c) return '';
  return `<section class="lesson-section manufacturer-case"><div class="case-head"><span>ESTUDO DE CASO DE FABRICANTE</span><h3>${c.title}</h3></div><div class="technical-body">${c.html}</div><div class="case-source"><b>Fonte-base:</b> ${c.source}<br><b>Uso didático:</b> ${c.note}</div></section>`;
}

function renderTechnicalSections(list=[]){
  if(!list.length)return '';
  return list.map(s=>`<section class="lesson-section technical-section"><h3>${s.title}</h3><div class="technical-body">${s.html}</div></section>`).join('');
}
function simulatorHTML(type){
  const head=(title,sub)=>`<section class="lesson-section simulator-box"><div class="sim-head"><div><span class="kicker">LABORATÓRIO DE CÁLCULO</span><h3>${title}</h3><p>${sub}</p></div><span class="sim-badge">INTERATIVO</span></div>`;
  if(type==='energy') return head('Energia, SOC e tempo','Calcule energia necessária e potência média de recarga.')+`<div class="sim-grid"><label>Capacidade da bateria (kWh)<input id="eCap" type="number" value="60" step="0.1"></label><label>SOC inicial (%)<input id="eIni" type="number" value="30"></label><label>SOC final (%)<input id="eFim" type="number" value="90"></label><label>Eficiência (%)<input id="eEff" type="number" value="92"></label><label>Janela disponível (h)<input id="eH" type="number" value="8" step="0.1"></label></div><button class="btn primary sim-calc" data-sim="energy">Calcular</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='curve') return head('Potência disponível por horário','Informe um ponto da curva para calcular margem operacional.')+`<div class="sim-grid"><label>Limite da instalação (kW)<input id="cvLim" type="number" value="200"></label><label>Carga base no horário (kW)<input id="cvBase" type="number" value="170"></label><label>Reserva de projeto (kW)<input id="cvRes" type="number" value="0"></label><label>Potência SAVE desejada (kW)<input id="cvSave" type="number" value="60"></label></div><button class="btn primary sim-calc" data-sim="curve">Calcular margem</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='dlm') return head('DLM — distribuição de potência','Simule o limite disponível para vários veículos conectados.')+`<div class="sim-grid"><label>Limite da instalação (kW)<input id="dLim" type="number" value="200"></label><label>Carga base atual (kW)<input id="dBase" type="number" value="130"></label><label>Reserva operacional (kW)<input id="dRes" type="number" value="10"></label><label>Veículos conectados<input id="dN" type="number" value="10"></label><label>Máx. por veículo (kW)<input id="dMax" type="number" value="7.4" step="0.1"></label></div><button class="btn primary sim-calc" data-sim="dlm">Simular DLM</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='circuit') return head('Coordenação Ib ≤ In ≤ Iz','Calcule a corrente e verifique a coordenação usando Iz informado a partir da tabela/método escolhido.')+`<div class="sim-grid"><label>Potência do SAVE (kW)<input id="cP" type="number" value="7.4" step="0.1"></label><label>Tensão (V)<input id="cV" type="number" value="220"></label><label>Sistema<select id="cPh"><option value="1">Monofásico</option><option value="3">Trifásico</option></select></label><label>Fator de potência<input id="cFp" type="number" value="0.99" step="0.01"></label><label>Rendimento<input id="cEff" type="number" value="1" step="0.01"></label><label>Iz da tabela (A)<input id="cIz" type="number" value="50"></label><label>Fator temperatura<input id="cFt" type="number" value="1" step="0.01"></label><label>Fator agrupamento<input id="cFa" type="number" value="1" step="0.01"></label><label>Disjuntor escolhido In (A)<input id="cIn" type="number" value="40"></label></div><button class="btn primary sim-calc" data-sim="circuit">Verificar circuito</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='voltdrop') return head('Queda de tensão','Estimativa resistiva para estudo e comparação de alternativas.')+`<div class="sim-grid"><label>Corrente (A)<input id="vI" type="number" value="32"></label><label>Comprimento (m)<input id="vL" type="number" value="30"></label><label>Seção (mm²)<input id="vS" type="number" value="10"></label><label>Tensão nominal (V)<input id="vV" type="number" value="220"></label><label>Sistema<select id="vPh"><option value="1">Monofásico</option><option value="3">Trifásico</option></select></label><label>Resistividade ρ (Ω·mm²/m)<input id="vRho" type="number" value="0.0175" step="0.0001"></label></div><button class="btn primary sim-calc" data-sim="voltdrop">Calcular ΔV</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='protection') return head('Assistente DR / RDC-DD / DPS','Ferramenta didática de decisão. A seleção final deve seguir norma e manual do modelo específico.')+`<div class="sim-grid"><label>RDC-DD / detecção CC 6 mA integrada?<select id="pDc"><option value="yes">Sim, comprovada no manual</option><option value="no">Não</option><option value="unknown">Não sei / não informado</option></select></label><label>Fabricante especifica DR Tipo A a montante?<select id="pA"><option value="yes">Sim</option><option value="no">Não</option><option value="unknown">Não sei</option></select></label><label>Há SPDA / exposição que demande DPS Tipo 1 na origem?<select id="pSpda"><option value="no">Não / avaliar</option><option value="yes">Sim</option></select></label><label>Quadro SAVE distante da proteção a montante?<select id="pFar"><option value="yes">Sim</option><option value="no">Não</option></select></label></div><button class="btn primary sim-calc" data-sim="protection">Analisar proteção</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='shortcircuit') return head('Corrente de curto-circuito simplificada','Use para aprendizado. Estudos executivos podem exigir modelo completo da rede.')+`<div class="sim-grid"><label>Tensão (V)<input id="sV" type="number" value="220"></label><label>Impedância equivalente Z (Ω)<input id="sZ" type="number" value="0.05" step="0.001"></label><label>Tipo de falta<select id="sType"><option value="mono">Fase-neutro / monofásica</option><option value="tri">Trifásica</option></select></label><label>Capacidade do disjuntor (kA)<input id="sIcu" type="number" value="6" step="0.1"></label></div><button class="btn primary sim-calc" data-sim="shortcircuit">Calcular Icc</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='transformer') return head('Transformador e balanceamento','Avalie carga aparente total e distribuição de carregadores monofásicos.')+`<div class="sim-grid"><label>Transformador (kVA)<input id="tKva" type="number" value="225"></label><label>Demanda existente (kW)<input id="tBase" type="number" value="150"></label><label>FP existente<input id="tFp" type="number" value="0.95" step="0.01"></label><label>Potência SAVE gerenciada (kW)<input id="tEv" type="number" value="60"></label><label>FP SAVE<input id="tEvFp" type="number" value="0.99" step="0.01"></label><label>Carregadores fase R<input id="tR" type="number" value="4"></label><label>Carregadores fase S<input id="tS" type="number" value="4"></label><label>Carregadores fase T<input id="tT" type="number" value="4"></label></div><button class="btn primary sim-calc" data-sim="transformer">Avaliar sistema</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='energisa') return head('Checklist Energisa / pré-validação','Marque os itens principais antes de organizar o protocolo.')+`<div class="sim-checks" id="eChecks">${['Ficha técnica dos SAVE','Curva/demanda','Diagrama unifilar','Memorial de cálculo','Proteções DR/RDC-DD/DPS','Aterramento','Dados da entrada/transformador','ART/TRT e documentos','Versão vigente NDU 042'].map(x=>`<label><input type="checkbox"> ${x}</label>`).join('')}</div><button class="btn primary sim-calc" data-sim="energisa">Verificar checklist</button><div class="sim-result" id="simResult"></div></section>`;
  if(type==='condo') return head('Planejamento de condomínio','Compare potência instalada futura, capacidade disponível e limite de DLM.')+`<div class="sim-grid"><label>Unidades/vagas previstas<input id="coUnits" type="number" value="40"></label><label>VE atuais<input id="coNow" type="number" value="6"></label><label>VE previstos em 5 anos<input id="coFuture" type="number" value="24"></label><label>Potência por SAVE (kW)<input id="coP" type="number" value="7.4" step="0.1"></label><label>Limite da instalação (kW)<input id="coLim" type="number" value="200"></label><label>Pico base (kW)<input id="coBase" type="number" value="150"></label><label>Reserva operacional (kW)<input id="coRes" type="number" value="10"></label></div><button class="btn primary sim-calc" data-sim="condo">Avaliar expansão</button><div class="sim-result" id="simResult"></div></section>`;
  return '';
}
function bindSimulator(type){
  const b=document.querySelector('.sim-calc'); if(!b)return;
  b.onclick=()=>runSimulator(type);
}
function n(id){return Number(document.getElementById(id)?.value||0)}
function simOut(html,cls=''){const e=document.getElementById('simResult'); if(e){e.className='sim-result '+cls;e.innerHTML=html}}
function runSimulator(type){
  if(type==='energy'){
    const cap=n('eCap'), si=n('eIni')/100, sf=n('eFim')/100, eff=n('eEff')/100, h=n('eH');
    const ebat=cap*(sf-si), erede=eff>0?ebat/eff:0, p=h>0?erede/h:0;
    simOut(`<b>Energia na bateria:</b> ${ebat.toFixed(2)} kWh<br><b>Energia estimada da rede:</b> ${erede.toFixed(2)} kWh<br><b>Potência média necessária:</b> ${p.toFixed(2)} kW<br><span>Substituição: ${cap} × (${(sf*100).toFixed(0)}% − ${(si*100).toFixed(0)}%) = ${ebat.toFixed(2)} kWh</span>`);
  } else if(type==='curve'){
    const lim=n('cvLim'),base=n('cvBase'),res=n('cvRes'),save=n('cvSave'),disp=lim-base-res,margin=disp-save;
    simOut(`<b>Potência disponível para SAVE:</b> ${disp.toFixed(1)} kW<br><b>Margem após a recarga desejada:</b> ${margin.toFixed(1)} kW<br>${margin>=0?'✓ Cenário cabe no limite adotado.':'⚠ Cenário ultrapassa o limite adotado.'}`,margin>=0?'ok':'bad');
  } else if(type==='dlm'){
    const lim=n('dLim'),base=n('dBase'),res=n('dRes'),N=Math.max(1,n('dN')),mx=n('dMax'),disp=Math.max(0,lim-base-res),total=Math.min(disp,N*mx),each=total/N;
    simOut(`<b>Disponível ao DLM:</b> ${disp.toFixed(1)} kW<br><b>Potência total distribuída:</b> ${total.toFixed(1)} kW<br><b>Média por veículo:</b> ${each.toFixed(2)} kW<br><span>O algoritmo real pode aplicar prioridades em vez de divisão igualitária.</span>`);
  } else if(type==='circuit'){
    const P=n('cP')*1000,V=n('cV'),ph=n('cPh'),fp=n('cFp')||1,eff=n('cEff')||1,iz=n('cIz'),ft=n('cFt')||1,fa=n('cFa')||1,In=n('cIn');
    const Ib=ph===3?P/(Math.sqrt(3)*V*fp*eff):P/(V*fp*eff), Iz=iz*ft*fa, ok=Ib<=In&&In<=Iz;
    simOut(`<b>Ib:</b> ${Ib.toFixed(2)} A<br><b>Iz corrigida:</b> ${Iz.toFixed(2)} A<br><b>In:</b> ${In.toFixed(1)} A<br><b>Verificação:</b> ${Ib.toFixed(2)} ≤ ${In.toFixed(1)} ≤ ${Iz.toFixed(2)} → ${ok?'CONFORME nesta verificação':'REVISAR'}<br><span>Confirme método de instalação, seção mínima, queda de tensão, curto-circuito e fabricante.</span>`,ok?'ok':'bad');
  } else if(type==='voltdrop'){
    const I=n('vI'),L=n('vL'),S=n('vS'),V=n('vV'),ph=n('vPh'),rho=n('vRho');
    const dv=ph===3?Math.sqrt(3)*L*I*rho/S:2*L*I*rho/S, pct=100*dv/V;
    simOut(`<b>ΔV:</b> ${dv.toFixed(2)} V<br><b>ΔV%:</b> ${pct.toFixed(2)}%<br><span>Estimativa resistiva. Verifique resistência à temperatura de operação e critérios normativos do projeto completo.</span>`);
  } else if(type==='condo'){
    const units=n('coUnits'),now=n('coNow'),future=n('coFuture'),p=n('coP'),lim=n('coLim'),base=n('coBase'),res=n('coRes');
    const installedNow=now*p,installedFuture=future*p,available=Math.max(0,lim-base-res),simultaneous=available/p;
    const coverage=units>0?100*future/units:0;
    simOut(`<b>Potência instalada atual:</b> ${installedNow.toFixed(1)} kW<br><b>Potência instalada futura:</b> ${installedFuture.toFixed(1)} kW<br><b>Margem instantânea disponível:</b> ${available.toFixed(1)} kW<br><b>Equivalente a ${simultaneous.toFixed(1)} SAVE de ${p.toFixed(1)} kW simultâneos</b><br><b>Adoção futura considerada:</b> ${coverage.toFixed(0)}% das vagas/unidades<br><span>${installedFuture>available?'O cenário futuro exige gerenciamento de potência e/ou reforço de infraestrutura; dimensione a infraestrutura comum para expansão com critério.':'A margem informada suporta a potência futura neste ponto de análise, mas confirme curva de carga, circuitos e critérios normativos.'}</span>`);
  } else if(type==='protection'){
    const dc=document.getElementById('pDc').value,a=document.getElementById('pA').value,spda=document.getElementById('pSpda').value,far=document.getElementById('pFar').value;
    let dr='';
    if(dc==='yes'&&a==='yes') dr='Manual comprova RDC-DD/6 mA e especifica Tipo A: avaliar DR Tipo A a montante com IΔn conforme fabricante/norma (exemplos consultados usam ≤30 mA).';
    else if(dc==='unknown'||a==='unknown') dr='Informação insuficiente: NÃO feche a especificação. Consulte o manual do modelo e a norma aplicável.';
    else dr='Não presuma Tipo A. Avalie DR Tipo B ou outra solução admitida pelo fabricante/norma para corrente residual CC.';
    let dps=spda==='yes'?'Na origem, avaliar DPS Tipo 1 ou 1+2 conforme análise de risco/SPDA e coordenação.':'Na distribuição, DPS Tipo 2 é uma solução típica a avaliar conforme instalação.';
    if(far==='yes') dps+=' Para quadro/carga distante, reavalie coordenação e eventual DPS adicional; Tipo 3 é complementar próximo à carga sensível.';
    simOut(`<b>DR/RDC-DD:</b><br>${dr}<br><br><b>DPS:</b><br>${dps}<br><br><span>Verifique Uc, Up, In/Imax, Iimp quando aplicável, esquema de aterramento e dispositivo de backup.</span>`);
  } else if(type==='shortcircuit'){
    const V=n('sV'),Z=n('sZ'),typ=document.getElementById('sType').value,icu=n('sIcu')*1000; const I=Z>0?(typ==='tri'?V/(Math.sqrt(3)*Z):V/Z):0; const ok=icu>=I;
    simOut(`<b>Icc estimada:</b> ${(I/1000).toFixed(2)} kA<br><b>Capacidade informada do disjuntor:</b> ${(icu/1000).toFixed(2)} kA<br>${ok?'✓ Capacidade ≥ Icc estimada.':'⚠ Capacidade inferior à Icc estimada.'}<br><span>Cálculo simplificado; confirmar impedância e método de estudo.</span>`,ok?'ok':'bad');
  } else if(type==='transformer'){
    const kva=n('tKva'),base=n('tBase'),fp=n('tFp')||1,ev=n('tEv'),evfp=n('tEvFp')||1,r=n('tR'),s=n('tS'),t=n('tT'); const sb=base/fp,se=ev/evfp,st=sb+se,load=100*st/kva,margin=kva-st; const mx=Math.max(r,s,t),mn=Math.min(r,s,t),imb=mx?100*(mx-mn)/mx:0;
    simOut(`<b>Demanda aparente existente:</b> ${sb.toFixed(1)} kVA<br><b>SAVE:</b> ${se.toFixed(1)} kVA<br><b>Total:</b> ${st.toFixed(1)} kVA<br><b>Carregamento do transformador:</b> ${load.toFixed(1)}%<br><b>Margem aparente:</b> ${margin.toFixed(1)} kVA<br><b>Desequilíbrio por quantidade R/S/T:</b> ${imb.toFixed(1)}%<br><span>Avalie também as demais cargas reais de cada fase.</span>`,load<=100?'ok':'bad');
  } else if(type==='energisa'){
    const c=[...document.querySelectorAll('#eChecks input')],done=c.filter(x=>x.checked).length,pct=100*done/c.length; simOut(`<b>${done}/${c.length} itens marcados (${pct.toFixed(0)}%).</b><br>${done===c.length?'✓ Checklist básico completo para revisão técnica.':'Ainda existem itens pendentes antes da revisão final.'}`);
  }
}

function openLesson(id){
  if(!state.courseStartedAt){state.courseStartedAt=new Date().toISOString(); save();}
  currentLesson=id; state.lastLesson=id; save();
  const l=lessons[id-1], done=state.completed.includes(id);
  $('#pageTitle').textContent=`Microaula ${l.num}`; $('#pageSubtitle').textContent=l.title;
  const qhtml=l.quiz.map((q,qi)=>`<div class="question" data-q="${qi}"><strong>${qi+1}. ${q[0]}</strong><div class="options">${q[2].map(o=>`<button class="option ${state.quiz[id]?.[qi]===o?'selected':''}" data-answer="${encodeURIComponent(o)}">${o}</button>`).join('')}</div></div>`).join('');
  $('#lessonArticle').innerHTML=`<div class="lesson-hero">
    <div class="lesson-hero-img"><img src="${assetSrc(l.image)}" alt=""><div class="lesson-hero-overlay"><span>MICROAULA ${l.num} • 4 HORAS • CONTEÚDO AMPLIADO</span><h2>${l.title}</h2><p>${l.description}</p></div></div>
    <div class="lesson-content">
      <section class="lesson-section"><h3>Objetivos de aprendizagem</h3><div class="objective-list">${l.objectives.map(x=>`<div class="objective">✓ ${x}</div>`).join('')}</div></section>
      <section class="lesson-section"><h3>Conteúdo técnico ampliado</h3><div class="theory">${l.theory}</div></section>
      ${renderHighlights(l.highlights)}
      ${renderNorms(l.norms)}
      <section class="lesson-section"><h3>Fórmula / relação principal</h3><div class="formula"><small>MEMÓRIA DE CÁLCULO</small>${l.formula}</div></section>
      <section class="lesson-section"><h3>Exemplo orientado</h3><div class="example">${l.example}</div></section>
      <section class="lesson-section"><h3>Atividade prática • Memória do Projeto</h3><div class="activity">${l.activity}</div></section>
      ${renderSupportImage(l)}
      ${renderTechnicalSections(l.technicalSections)}
      ${renderManufacturerCase(l.manufacturerCase)}
      ${simulatorHTML(l.simulatorType)}
      <section class="lesson-section"><h3>Praticando • 05 questões</h3><div class="quiz">${qhtml}</div></section>
      ${renderReferences(l.references)}
    </div></div>`;
  $$('.option').forEach(b=>b.onclick=e=>answerQuiz(id,+e.target.closest('.question').dataset.q,decodeURIComponent(b.dataset.answer)));
  bindSimulator(l.simulatorType);
  renderLessonNav();
  $$('.view').forEach(v=>v.classList.remove('active')); $('#view-lesson').classList.add('active');
  $$('.nav-item').forEach(b=>b.classList.remove('active'));
  $('#stickyLessonNav').classList.remove('hidden');
  window.scrollTo({top:0});
}
function answerQuiz(id,qi,answer){
  state.quiz[id]??={}; state.quiz[id][qi]=answer; save();
  const l=lessons[id-1], correct=l.quiz[qi][1];
  const q=$(`.question[data-q="${qi}"]`);
  q.querySelectorAll('.option').forEach(b=>{const val=decodeURIComponent(b.dataset.answer); b.classList.toggle('correct',val===correct); b.classList.toggle('wrong',val===answer&&val!==correct)});
  toast(answer===correct?'Resposta correta':'Revise este conceito');
}
function allQuizAnswered(id){
  const l=lessons[id-1], q=state.quiz[id]||{};
  return l.quiz.every((_,i)=>q[i]!==undefined);
}
function completeLesson(id){
  if(!allQuizAnswered(id)){toast('Responda as 05 questões antes de concluir a aula'); return}
  if(!state.completed.includes(id)) state.completed.push(id);
  state.completed.sort((a,b)=>a-b); save(); toast('Microaula concluída');
  renderLessonNav(); renderCards();
}
function renderLessonNav(){
  if(!currentLesson)return;
  const id=currentLesson, done=state.completed.includes(id), prev=id>1, next=id<20;
  const html=`<button class="btn outline" ${!prev?'disabled':''} data-prev="${id-1}">← Aula anterior</button>
    <button class="btn complete" data-complete="${id}">${done?'✓ Aula concluída':'✓ Concluir aula'}</button>
    <button class="btn primary" ${!next||!done?'disabled':''} data-next="${id+1}">${id===20?'Finalizar':'Próxima aula →'}</button>`;
  $('#lessonEndNav').innerHTML=html; $('#stickyLessonNav').innerHTML=html;
  $$('[data-prev]').forEach(b=>b.onclick=()=>openLesson(+b.dataset.prev));
  $$('[data-complete]').forEach(b=>b.onclick=()=>completeLesson(+b.dataset.complete));
  $$('[data-next]').forEach(b=>b.onclick=()=>{if(id<20)openLesson(+b.dataset.next);else switchView('project')});
}

function renderWiringLibrary(){
  const schemes=window.WIRING_SCHEMES||[];
  const filter=$('#wiringFilter');
  if(filter && filter.options.length===1){
    const cats=[...new Set(schemes.map(s=>s.category))].sort();
    cats.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;filter.appendChild(o)});
    filter.onchange=()=>renderWiringLibrary();
  }
  const selected=filter?.value||'all';
  const rows=selected==='all'?schemes:schemes.filter(s=>s.category===selected);
  const grid=$('#wiringGrid'); if(!grid)return;
  grid.innerHTML=rows.map(s=>`<article class="wiring-card" data-wiring="${s.id}">
    <div class="wiring-img"><img src="${assetSrc(s.image)}" alt="${s.title}"></div>
    <div class="wiring-card-body"><div class="wiring-tags"><span>${s.category}</span><span>${s.power}</span><span>${s.topology}</span></div><h3>${s.title}</h3><p>${s.summary}</p><button class="btn primary small-btn">Abrir esquema ampliado</button></div>
  </article>`).join('');
  $$('[data-wiring]').forEach(c=>c.onclick=()=>openWiring(c.dataset.wiring));
}
function openWiring(id){
  const s=(window.WIRING_SCHEMES||[]).find(x=>x.id===id); if(!s)return;
  const body=$('#wiringModalBody');
  body.innerHTML=`<div class="wiring-modal-head"><span class="kicker">${s.category} • ${s.power}</span><h2>${s.title}</h2><p>${s.summary}</p></div>
  <div class="wiring-modal-image"><img src="${assetSrc(s.image)}" alt="${s.title}"></div>
  <div class="wiring-modal-info"><div><h3>Checklist de leitura</h3><ul>${s.checklist.map(x=>`<li>${x}</li>`).join('')}</ul></div><div><h3>Fonte-base</h3><p>${s.source}</p>${s.sourceUrl?`<a class="ref-chip" href="${s.sourceUrl}" target="_blank" rel="noopener">Abrir fonte oficial ↗</a>`:''}<p class="tech-note">Use o esquema para aprender o caminho dos condutores. A montagem real exige confirmar tensão, topologia, bornes, proteção, torque e revisão vigente do manual do equipamento.</p></div></div>`;
  $('#wiringModal').classList.remove('hidden'); document.body.classList.add('modal-open');
}
function closeWiring(){ $('#wiringModal')?.classList.add('hidden'); document.body.classList.remove('modal-open'); }

const deliverableNames=[
 ['identificacao','Identificação e dados do empreendimento','Cliente, local, responsável e premissas do projeto.'],
 ['levantamento','Levantamento da instalação','Entrada, QGBT, alimentadores, transformador e registros de campo.'],
 ['curva','Curva de carga','Curva medida ou simulada com origem dos dados.'],
 ['demanda','Demanda e DLM','Cenários de recarga e justificativa da estratégia.'],
 ['circuitos','Dimensionamento dos circuitos','Correntes, cabos, queda e proteção.'],
 ['aterramento','Aterramento e equipotencialização','Integração do SAVE ao sistema de proteção.'],
 ['unifilar','Diagrama unifilar','Representação clara da alimentação e dos pontos de recarga.'],
 ['ligacao','Esquema de ligação do QD-SAVE','Identificação de disjuntor/RCBO, DR/RDC-DD, DPS, barramentos, condutores ativos, PE e bornes do carregador.'],
 ['materiais','Lista de materiais','Equipamentos e componentes principais.'],
 ['documentacao','Memorial e checklist','Memorial de cálculo, pré-validação e documentação.'],
 ['comissionamento','Comissionamento','Inspeções, testes e registro final.']
];
function renderProject(){
  $('#deliverables').innerHTML=deliverableNames.map(([k,t,d])=>`<label class="deliverable"><input type="checkbox" data-del="${k}" ${state.projectChecks[k]?'checked':''}><div><strong>${t}</strong><small>${d}</small></div></label>`).join('');
  $$('[data-del]').forEach(c=>c.onchange=()=>{state.projectChecks[c.dataset.del]=c.checked; save(); renderProjectStatus()});
  renderProjectStatus();
}
function renderProjectStatus(){
  const ok=deliverableNames.every(([k])=>state.projectChecks[k]);
  $('#submitProjectBtn').disabled=!ok;
  $('#submitProjectBtn').textContent=state.projectSubmitted?'✓ Projeto Final confirmado':'Confirmar Projeto Final';
  $('#projectBigStatus').textContent=state.projectSubmitted?'✓':'🔒';
  $('#projectBigStatus').style.color=state.projectSubmitted?'#18b832':'';
}
function submitProject(){state.projectSubmitted=true; save(); renderProjectStatus(); toast('Projeto Final confirmado — conclua as aulas e emita seu certificado')}

function renderProfile(){
  const st=state.student||{};
  const map={profileName:'name',profileEmail:'email',profileCity:'city',profileUF:'uf',profilePhone:'phone',profileCPF:'cpf'};
  Object.entries(map).forEach(([id,k])=>{const el=document.getElementById(id); if(el)el.value=st[k]||''});
  if($('#profileConsent')) $('#profileConsent').checked=!!st.consent;
}
function saveProfileFrom(prefix='profile'){
  const get=id=>document.getElementById(id)?.value?.trim()||'';
  const modal=prefix==='modal';
  const name=get(modal?'modalName':'profileName'),email=get(modal?'modalEmail':'profileEmail'),city=get(modal?'modalCity':'profileCity'),uf=get(modal?'modalUF':'profileUF').toUpperCase();
  const consent=document.getElementById(modal?'modalConsent':'profileConsent')?.checked;
  if(!name||!email||!city||!uf||!consent){toast('Preencha os campos obrigatórios e confirme os dados'); return false}
  state.student={...state.student,name,email,city,uf,consent};
  if(!modal){state.student.phone=get('profilePhone'); state.student.cpf=get('profileCPF')}
  save(); toast('Dados do aluno salvos'); return true;
}
function openProfileModal(){
  const st=state.student||{};
  $('#modalName').value=st.name||''; $('#modalEmail').value=st.email||''; $('#modalCity').value=st.city||''; $('#modalUF').value=st.uf||''; $('#modalConsent').checked=!!st.consent;
  $('#profileModal').classList.remove('hidden');
}
function closeProfileModal(){ $('#profileModal').classList.add('hidden') }
function ensureProfile(callback){ if(profileComplete()){callback(); return} openProfileModal(); window.__afterProfile=callback; }
function formatDateISO(d=new Date()){return d.toISOString().slice(0,10)}
function formatDateBR(iso){const [y,m,d]=iso.split('-');return `${d}/${m}/${y}`}
function longDateBR(iso){const [y,m,d]=iso.split('-').map(Number); return new Date(y,m-1,d).toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'})}
function randomHex(n=12){const a=new Uint8Array(Math.ceil(n/2));crypto.getRandomValues(a);return [...a].map(x=>x.toString(16).padStart(2,'0')).join('').slice(0,n)}
function makeCertCode(){const y=new Date().getFullYear(); const tail=(Date.now()%1000000).toString().padStart(6,'0'); return `JM-ICV-${y}-${tail}`}
function makeValidationUrl(cert){
  let base='';
  if(CERT_CONFIG.publicValidationBase){
    base=CERT_CONFIG.publicValidationBase;
  } else if(location.protocol==='http:' || location.protocol==='https:'){
    base=`${location.origin}${location.pathname.replace(/[^/]*$/,'')}validar.html`;
  }
  if(!base) return '';
  const q=new URLSearchParams({c:cert.code,h:cert.hash.slice(0,12)});
  return `${base}?${q.toString()}`;
}
function makeQrPayload(cert){
  const online=makeValidationUrl(cert);
  if(online && /^https?:\/\//i.test(online))return {mode:'Validação online',data:online};
  return {mode:'Código local',data:`JM|${cert.code}|${cert.hash.slice(0,12).toUpperCase()}`};
}
async function renderCertificateQr(cert){
  const info=makeQrPayload(cert),el=$('#certQr');
  const maker=window.makeQrPngDataUri||window.makeQrSvgDataUri;
  if(maker){
    el.src=maker(info.data,{ecc:'M',margin:4,scale:12});
  }else{
    el.src='';
  }
  el.dataset.payload=info.data; el.dataset.mode=info.mode;
  const label=$('#qrModeLabel');if(label)label.textContent=info.mode;
  try{await el.decode?.();}catch(e){}
}
async function ensureQrReady(){
  const el=$('#certQr');
  if(!el||!el.src)return;
  try{await el.decode?.();}catch(e){}
}
function issueCertificate(){
  if(!courseComplete()){toast('A formação ainda não está concluída');return}
  if(!profileComplete()){openProfileModal();return}
  if(!state.certificate){
    state.certificate={issued:true,code:makeCertCode(),hash:randomHex(20),date:formatDateISO(),issuedAt:new Date().toISOString()};
    state.certificate.validationUrl=makeValidationUrl(state.certificate);
  } else {state.certificate.issued=true; state.certificate.validationUrl=state.certificate.validationUrl||makeValidationUrl(state.certificate)}
  save(); renderCertificate(); renderReward(); toast('Certificado emitido. SAVE Engenharia liberado.');
}
function periodText(){
  const start=state.courseStartedAt?new Date(state.courseStartedAt):new Date(state.certificate?.issuedAt||Date.now());
  const end=state.certificate?.date||formatDateISO();
  const s=start.toISOString().slice(0,10);
  return `${formatDateBR(s)} a ${formatDateBR(end)}`;
}
function renderHistory(){
  if(!certificateIssued())return;
  const c=state.certificate,s=state.student;
  $('#historyName').textContent=s.name;
  $('#historyCode').textContent=c.code;
  $('#historyDate').textContent=formatDateBR(c.date);
  $('#annexCode').textContent=c.code;
  $('#annexPeriod').textContent=periodText();
  $('#annexLocation').textContent=CERT_CONFIG.location;
  $('#annexMode').textContent=CERT_CONFIG.modality;
  $('#annexInstructor').textContent=CERT_CONFIG.instructor;
  $('#annexInstructorRole').textContent=CERT_CONFIG.instructorRole;
  $('#annexResponsible').textContent=CERT_CONFIG.responsible;
  $('#annexResponsibleRole').textContent=CERT_CONFIG.responsibleRole;
  $('#annexArtTrt').textContent=`TRT/ART: ${CERT_CONFIG.artTrt||'—'}`;
  $('#annexOrganization').textContent=CERT_CONFIG.organization;
  const left=lessons.slice(0,10),right=lessons.slice(10);
  const renderCol=list=>`<ol start="${list[0].id}">${list.map(l=>`<li><b>${l.title}</b><span>4 h</span></li>`).join('')}</ol>`;
  $('#programBody').innerHTML=renderCol(left)+renderCol(right);
}
function renderCertificate(){
  const ok=courseComplete(),issued=certificateIssued();
  $('#certificateLocked').classList.toggle('hidden',ok);
  $('#certificateIssue').classList.toggle('hidden',!ok||issued);
  $('#certificateReady').classList.toggle('hidden',!issued);
  $('#certUnlockText').textContent=`${progress()}/20 aulas • Projeto ${state.projectSubmitted?'concluído':'pendente'}`;
  $('#certUnlockBar').style.width=`${Math.round(progress()/20*100)}%`;
  if(ok&&!issued){
    const s=state.student||{};
    $('#confirmStudentData').innerHTML=`<h3>Dados que serão impressos</h3><div class="confirm-lines"><span><small>Nome</small><b>${s.name||'Não informado'}</b></span><span><small>CPF</small><b>${s.cpf||'Não informado — não será impresso'}</b></span><span><small>E-mail</small><b>${s.email||'Não informado'}</b></span><span><small>Localidade</small><b>${s.city||'—'} - ${s.uf||'—'}</b></span><span><small>Modalidade</small><b>${CERT_CONFIG.modality}</b></span></div><button class="btn outline" data-edit-profile>Corrigir dados</button>`;
    const e=$('[data-edit-profile]'); if(e)e.onclick=()=>switchView('profile');
  }
  if(issued){
    const c=state.certificate,s=state.student;
    $('#certName').textContent=s.name.toUpperCase();
    $('#certCPF').textContent=s.cpf?`CPF: ${s.cpf}`:'';
    $('#certMode').textContent=CERT_CONFIG.modality;
    $('#certPeriod').textContent=periodText();
    $('#certLocation').textContent=CERT_CONFIG.location;
    $('#certNumber').textContent=c.code;
    $('#toolbarCertCode').textContent=c.code;
    $('#certArtTrtTop').textContent=`TRT/ART: ${CERT_CONFIG.artTrt||'—'}`;
    $('#certInstructor').textContent=CERT_CONFIG.instructor;
    $('#certInstructorRole').textContent=CERT_CONFIG.instructorRole;
    $('#certStudentSign').textContent=s.name;
    $('#certResponsible').textContent=CERT_CONFIG.responsible;
    $('#certResponsibleRole').textContent=CERT_CONFIG.responsibleRole;
    $('#certArtTrtSign').textContent=`TRT/ART: ${CERT_CONFIG.artTrt||'—'}`;
    $('#certIssueFoot').textContent=`Emitido em ${longDateBR(c.date)}, ${CERT_CONFIG.location}`;
    $('#certOrganization').textContent=CERT_CONFIG.organization;
    $('#certAuthFoot').textContent=`Código: ${c.code}`;
    $('#certHashShort').textContent=`Registro ${c.hash.slice(0,10).toUpperCase()}`;
    c.validationUrl=makeValidationUrl(c);
    renderCertificateQr(c);
    renderHistory();
  }
}
async function printPages(mode='all'){
  document.body.classList.remove('print-cert-only','print-history-only');
  if(mode==='cert')document.body.classList.add('print-cert-only');
  if(mode==='history')document.body.classList.add('print-history-only');
  document.documentElement.classList.add('printing-certificate');
  await ensureQrReady();
  await new Promise(r=>setTimeout(r,350));
  window.print();
}
function renderReward(){
  const ok=rewardUnlocked(); $('#rewardLocked').classList.toggle('hidden',ok); $('#rewardReady').classList.toggle('hidden',!ok);
  $('#unlockText').textContent=`${progress()}/20 aulas • Projeto ${state.projectSubmitted?'concluído':'pendente'} • Certificado ${certificateIssued()?'emitido':'pendente'}`;
  $('#unlockBar').style.width=`${certificateIssued()?100:Math.round(progress()/20*90)}%`;
}
function refreshGlobal(){
  const p=progress(), pct=Math.round(p/20*100);
  $('#progressPct').textContent=pct+'%'; $('#progressText').textContent=`${p} de 20 aulas`;
  $('#progressRing').style.setProperty('--p',pct); $('#rewardLock').textContent=rewardUnlocked()?'✓':'🔒'; $('#homeRewardStatus').textContent=rewardUnlocked()?'✓ Liberado':'🔒 Bloqueado'; renderCards();
}
$('#startBtn').onclick=()=>ensureProfile(()=>openLesson(state.lastLesson||1));
$('#continueBtn').onclick=()=>ensureProfile(()=>openLesson(state.lastLesson||1));
$$('[data-go]').forEach(b=>b.onclick=()=>switchView(b.dataset.go));
$$('.nav-item').forEach(b=>b.onclick=()=>switchView(b.dataset.view));
$('#menuBtn').onclick=()=>$('#sidebar').classList.toggle('open');
$('#submitProjectBtn').onclick=submitProject;
$('#studentProfileForm')?.addEventListener('submit',e=>{e.preventDefault();saveProfileFrom('profile');renderProfile()});
$('#profileModalForm')?.addEventListener('submit',e=>{e.preventDefault();if(saveProfileFrom('modal')){closeProfileModal();const cb=window.__afterProfile;window.__afterProfile=null;if(cb)cb();}});
$('#profileModalClose')?.addEventListener('click',closeProfileModal);
$('#issueCertificateBtn')?.addEventListener('click',issueCertificate);
$('#printCertBtn')?.addEventListener('click',()=>printPages('all'));
$('#printHistoryBtn')?.addEventListener('click',()=>printPages('history'));
$('#testQrBtn')?.addEventListener('click',()=>{const c=state.certificate;if(!c)return;const info=makeQrPayload(c);if(/^https?:\/\//i.test(info.data)){window.open(info.data,'_blank','noopener');}else{alert('QR local de baixa densidade. Ao escanear, o celular deve ler:\n\n'+info.data+'\n\nApós publicar a plataforma em HTTPS, o QR abrirá a página de validação.');}});
window.addEventListener('afterprint',()=>{document.body.classList.remove('print-cert-only','print-history-only');document.documentElement.classList.remove('printing-certificate')});
if($('#wiringModalClose')) $('#wiringModalClose').onclick=closeWiring;
if($('#wiringModal')) $('#wiringModal').onclick=e=>{if(e.target.id==='wiringModal')closeWiring()};
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeWiring()});
window.addEventListener('scroll',()=>{if(currentLesson){const art=$('#lessonArticle').getBoundingClientRect(); $('#stickyLessonNav').classList.toggle('hidden',art.bottom<180)}});
refreshGlobal();
if(COURSE_DATA_ISSUES.length){console.error('Falhas no banco de questões:',COURSE_DATA_ISSUES);toast('Atenção: banco de questões com inconsistência.');}
save();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
