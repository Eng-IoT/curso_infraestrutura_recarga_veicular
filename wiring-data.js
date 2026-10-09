window.WIRING_SCHEMES = [
  {
    id:'ac-3k7-230-ln',
    title:'SAVE AC 3,7 kW — 230 V L+N+PE',
    category:'Residencial', power:'3,7 kW', topology:'Monofásico L+N', manufacturer:'Genérico',
    image:'wiring/01_3k7_230v_mono.svg',
    summary:'Circuito dedicado de 16 A com caminho visual de L, N e PE, DR e DPS em derivação.',
    checklist:['Confirmar tensão 220–240 V do modelo','Dimensionar Ib/In/Iz','PE direto ao SAVE','Não misturar neutros a jusante do DR'],
    source:'Referência didática baseada em práticas de fabricante e normas; confirmar manual do modelo real.'
  },
  {
    id:'ac-7k4-230-ln',
    title:'SAVE AC 7,4 kW — 230 V L+N+PE',
    category:'Residencial', power:'7,4 kW', topology:'Monofásico L+N', manufacturer:'Schneider / referência',
    image:'wiring/02_7k4_230v_ln.svg',
    summary:'Exemplo didático baseado em EVlink Home 7,4 kW: 32 A, proteção a montante e RDC-DD de 6 mA no modelo consultado.',
    checklist:['40 A B/C no exemplo Schneider','DR Tipo A 30 mA no exemplo','RDC-DD 6 mA integrado no modelo consultado','Conferir revisão do manual'],
    source:'Schneider Electric EVlink Home — GEX4292700-00.', sourceUrl:'https://ckm-content.se.com/ckmContent/sfc/servlet.shepherd/document/download/0698V00000QMVeUQAX'
  },
  {
    id:'ac-7k4-220-ll',
    title:'SAVE AC 7,4 kW — 220 V fase-fase',
    category:'Brasil 220 V', power:'7,4 kW', topology:'L1+L2+PE', manufacturer:'Genérico',
    image:'wiring/03_7k4_220v_fase_fase.svg',
    summary:'Topologia didática para rede 220 V fase-fase. Não usa neutro por conveniência; o SAVE precisa admitir essa alimentação.',
    checklist:['Confirmar compatibilidade L-L','I≈33,6 A para 7,4 kW/220 V','Disjuntor e DR bipolares conforme projeto','DPS compatível com esquema TT/TN'],
    source:'Aplicação didática brasileira; validar manual do SAVE e requisitos locais.'
  },
  {
    id:'ac-11kw-400',
    title:'SAVE AC 11 kW — 400 V trifásico',
    category:'Trifásico', power:'11 kW', topology:'L1+L2+L3+N+PE', manufacturer:'Schneider / referência',
    image:'wiring/04_11kw_400v_trifasico.svg',
    summary:'Exemplo de 16 A por fase, 3P+N+PE, com todos os condutores ativos pelo dispositivo diferencial.',
    checklist:['20 A curva C no exemplo Schneider','DR Tipo A 30 mA no exemplo','PE fora do DR','Conferir sequência de fases e aperto'],
    source:'Schneider Electric EVlink Home — GEX4292700-00.', sourceUrl:'https://ckm-content.se.com/ckmContent/sfc/servlet.shepherd/document/download/0698V00000QMVeUQAX'
  },
  {
    id:'ac-22kw-400',
    title:'SAVE AC 22 kW — 400 V trifásico',
    category:'Trifásico', power:'22 kW', topology:'L1+L2+L3+N+PE', manufacturer:'Wallbox / referência',
    image:'wiring/05_22kw_400v_trifasico.svg',
    summary:'Circuito trifásico de 32 A por fase para estudo de carregadores AC de maior potência.',
    checklist:['Confirmar 22 kW/400 V/32 A do modelo','RCCB conforme fabricante e regra regional','Proteção residual AC/DC do equipamento','Queda de tensão e agrupamento'],
    source:'Wallbox Pulsar Plus Socket — guia oficial online.', sourceUrl:'https://support.wallbox.com/en/knowledge-base/pulsar-plus-socket-online-installation-guide/'
  },
  {
    id:'qd-save-protecao',
    title:'QD-SAVE — ligação dos componentes de proteção',
    category:'Quadro elétrico', power:'Aplicável a vários', topology:'L+N+PE didático', manufacturer:'Genérico',
    image:'wiring/06_quadro_protecao_detalhado.svg',
    summary:'Esquema específico para ensinar como ligar disjuntor, DR, DPS, barramento N e PE sem esconder o caminho dos cabos.',
    checklist:['DPS em derivação','PE direto ao barramento PE','Neutro do circuito atravessa o DR quando aplicável','Sem neutro compartilhado indevido'],
    source:'Síntese didática baseada em manuais de fabricantes e critérios de instalações de baixa tensão.'
  },
  {
    id:'weg-wemob-parking-32a',
    title:'WEG WEMOB PARKING — estudo de caso 32 A',
    category:'Fabricante', power:'Até a configuração do modelo', topology:'Mono / bi / tri', manufacturer:'WEG',
    image:'wiring/07_weg_wemob_parking_32a.svg',
    summary:'Interpretação didática das proteções recomendadas pela WEG para configuração de 32 A.',
    checklist:['Disjuntor 40 A curva C no guia consultado','DR Tipo A 40 A/30 mA','Polos compatíveis com a instalação','Confirmar modelo e revisão'],
    source:'WEG WEMOB PARKING — guia oficial de instalação 32 A.', sourceUrl:'https://static.weg.net/medias/downloadcenter/hbc/he0/WEG-WEMOB-parking-s2s-32a-10012838199-en-es-pt.pdf.pdf'
  },
  {
    id:'abb-terra-ac-32a',
    title:'ABB Terra AC — estudo de caso 32 A',
    category:'Fabricante', power:'32 A', topology:'IEC conforme versão', manufacturer:'ABB',
    image:'wiring/08_abb_terra_ac_32a.svg',
    summary:'Arquitetura upstream apresentada pela ABB: RCD Tipo A mínimo + MCB ou RCBO, com monitoramento CC interno.',
    checklist:['40 A para EVSE 32 A no manual consultado','Curva C','RCD Tipo A máx. 30 mA','Monitoramento CC interno >6 mA'],
    source:'ABB Terra AC Wallbox — Installation Manual / documentação oficial.', sourceUrl:'https://new.abb.com/ev-charging/terra-ac-wallbox/terra-ac-mid-wallbox'
  },
  {
    id:'condominio-4-dlm',
    title:'Condomínio — 4 SAVE com gerenciamento DLM',
    category:'Condomínio', power:'Gerenciada', topology:'Múltiplos circuitos', manufacturer:'Conceitual',
    image:'wiring/09_condominio_4_save_dlm.svg',
    summary:'Arquitetura de quatro circuitos individuais com medição da carga e controlador de potência.',
    checklist:['Cada SAVE mantém proteção individual','DLM não substitui disjuntor/DR/DPS','Medidor mede a carga relevante','Configurar limite e prioridades'],
    source:'Arquitetura conceitual inspirada em sistemas de smart charging de fabricantes.'
  }
];
