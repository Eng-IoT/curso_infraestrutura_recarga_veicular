window.COURSE_LESSONS = [
  {
    "id": 1,
    "num": "01",
    "title": "Fundamentos da Mobilidade Elétrica",
    "description": "Base conceitual de potência, energia, bateria, autonomia e cenários de recarga.",
    "image": "capa-curso.png",
    "objectives": [
      "Diferenciar potência, energia, demanda e autonomia.",
      "Entender a relação entre bateria, SOC, janela de recarga e tempo disponível.",
      "Reconhecer as limitações impostas pelo veículo, pelo carregador e pela instalação.",
      "Criar a base conceitual para os cálculos das microaulas seguintes."
    ],
    "theory": "<p>A engenharia da recarga veicular começa pelo domínio das grandezas fundamentais. <b>Potência</b> (kW) representa a velocidade com que a energia é transferida. <b>Energia</b> (kWh) representa a quantidade total transferida ao longo do tempo. Em projetos SAVE, confundir essas duas grandezas leva a erros de especificação, principalmente quando o profissional tenta estimar tempo de recarga ou impacto na demanda.</p>\n <p>O veículo elétrico possui uma bateria com capacidade nominal, mas a energia efetivamente transferida em uma sessão depende do <b>estado de carga inicial e final (SOC)</b>, da eficiência do conjunto e da potência efetiva de recarga. A potência efetiva, por sua vez, é limitada pelo menor dos três elementos: infraestrutura disponível, potência do carregador e potência aceita pelo veículo.</p>\n <p>Na prática, o projetista precisa responder quatro perguntas: qual energia o veículo precisa receber, quanto tempo ele permanecerá conectado, qual potência está disponível na instalação e qual estratégia de operação será adotada. Essas respostas fundamentam o projeto técnico, a curva de carga e a seleção do carregador.</p>",
    "highlights": [
      "Potência define velocidade; energia define quantidade.",
      "O menor limite entre veículo, carregador e instalação governa a sessão.",
      "Tempo de permanência do veículo é uma variável de projeto, não apenas um dado comercial.",
      "Projeto bom começa por premissas claras e documentadas."
    ],
    "formula": "E = P × t  |  P = E / t",
    "example": "Veículo precisa receber 37 kWh. Se a potência média disponível for 7,4 kW, o tempo ideal será t = 37 / 7,4 = 5 h. Em campo, perdas e limites do veículo podem elevar esse tempo.",
    "activity": "Levante três modelos de veículos elétricos e registre: capacidade da bateria, potência máxima em AC, potência máxima em DC e tempo estimado de recarga para um carregador de 7,4 kW.",
    "norms": [
      "ABNT NBR 17019 (instalações de alimentação de veículos elétricos)",
      "ABNT NBR 5410 (instalações elétricas de baixa tensão)",
      "IEC 61851-1 (sistema de carregamento condutivo)"
    ],
    "supportImage": "capa-curso.png",
    "supportCaption": "Visão geral da formação e da infraestrutura de recarga veicular.",
    "references": [
      [
        "NBR 17019 - ABNT",
        "https://www.abntcatalogo.com.br/"
      ],
      [
        "IEC 61851-1 - IEC",
        "https://webstore.iec.ch/"
      ]
    ],
    "quiz": [
      [
        "Qual grandeza representa a quantidade acumulada de eletricidade transferida ao veículo?",
        "kWh",
        [
          "kW",
          "kWh",
          "A",
          "V"
        ]
      ],
      [
        "Se um veículo precisa receber 22 kWh em 4 h, a potência média necessária é:",
        "5,5 kW",
        [
          "3,7 kW",
          "5,5 kW",
          "7,4 A",
          "22 V"
        ]
      ],
      [
        "O que significa SOC?",
        "Estado de carga da bateria",
        [
          "Sistema operacional do carregador",
          "Estado de carga da bateria",
          "Seletividade operacional do circuito",
          "Sobrecorrente do conector"
        ]
      ],
      [
        "Em uma sessão de recarga, a potência efetiva é limitada pelo:",
        "Menor limite entre veículo, carregador e instalação",
        [
          "Maior carregador disponível",
          "Somente pelo disjuntor",
          "Menor limite entre veículo, carregador e instalação",
          "Somente pela bateria"
        ]
      ],
      [
        "Qual informação é essencial para estimar o tempo de recarga?",
        "Energia necessária e potência disponível",
        [
          "Apenas a cor do carregador",
          "Somente a marca do veículo",
          "Energia necessária e potência disponível",
          "Somente o tipo de tomada"
        ]
      ]
    ]
  },
  {
    "id": 2,
    "num": "02",
    "title": "Tipos, Modos e Famílias de Carregadores VE",
    "description": "Estudo dos carregadores AC e DC, exemplos de fabricantes e aplicações usuais.",
    "image": "fabricantes-carregadores.webp",
    "objectives": [
      "Diferenciar carregadores AC e DC.",
      "Relacionar famílias de produtos a aplicações residenciais, comerciais e de frotas.",
      "Ler faixas típicas de potência e conectividade em equipamentos de fabricantes.",
      "Compreender que especificação depende do contexto de uso."
    ],
    "theory": "<p>No mercado de infraestrutura de recarga, os equipamentos costumam ser divididos em <b>carregadores AC</b> e <b>carregadores DC</b>. Nos carregadores AC, a conversão para corrente contínua ocorre normalmente dentro do veículo, por meio do carregador embarcado. Nos carregadores DC, a conversão ocorre na própria estação, permitindo potências mais elevadas e recargas mais rápidas.</p>\n <p>Documentos oficiais de fabricantes mostram como essas famílias se posicionam. A ABB informa para a linha <b>Terra AC Wallbox</b> variantes monofásicas até 7,4 kW e trifásicas até 22 kW, com OCPP 1.6 e múltiplas opções de conectividade. A Schneider Electric apresenta o <b>EVlink Home Smart</b> com versões de 3,7 kW, 7,4 kW e 11 kW, proteção IP55 e IK10, além de solução de gestão de carga residencial. A WEG, na linha <b>WEMOB Wall</b>, indica potência de até 12 kW e faixa de ajuste de 6 a 50 A por fase.</p>\n <p>Esses dados não devem ser lidos como propaganda, mas como <b>parâmetros reais de projeto</b>. O profissional precisa cruzar potência, corrente, tipo de conector, ambiente, conectividade, medição de energia e recursos como OCPP ou DLM com a realidade da instalação. Em residência, um wallbox AC pode ser a melhor solução. Em frotas ou eletropostos, soluções DC e arquiteturas supervisionadas tornam-se mais adequadas.</p>",
    "highlights": [
      "Carregadores AC tendem a atender residências e condomínios.",
      "Carregadores DC são mais indicados para alta rotatividade e recarga rápida.",
      "Fabricante deve ser estudado pela ficha técnica, não apenas pela potência nominal.",
      "OCPP, Wi-Fi, Ethernet e RFID podem ser critérios importantes do projeto."
    ],
    "formula": "P ≈ V × I × FP (monofásico)  |  P ≈ √3 × V × I × FP (trifásico)",
    "example": "Um carregador EVlink Home Smart de 7,4 kW em 230 V monofásico opera com corrente da ordem de 32 A. Já uma estação ABB Terra AC trifásica de 22 kW em 400 V trabalha tipicamente com 32 A por fase.",
    "activity": "Compare quatro famílias de carregadores (ABB Terra AC, Schneider EVlink Home Smart, WEG WEMOB Wall e um carregador DC rápido). Monte uma tabela com aplicação típica, faixa de potência, tipo de conector e recursos de conectividade.",
    "norms": [
      "IEC 61851-1",
      "IEC 62196",
      "ABNT NBR 17019"
    ],
    "supportImage": "fabricantes-carregadores.webp",
    "supportCaption": "Página de apoio com famílias de carregadores e exemplos de fabricantes.",
    "references": [
      [
        "ABB Terra AC Wallbox",
        "https://new.abb.com/ev-charging/pt/terra-ac-wallbox"
      ],
      [
        "Schneider EVlink Home Smart - dados técnicos",
        "https://productinfo.se.com/wiser_home/evlink-home-smart_device-user-guide_wiser_home/Portuguese/EVlink%20Home%20Smart_Wiser%20Home_Device%20user%20guide_pt_DD00573198.xml/%24/Technicaldata_WSE_EVlinkREF_pt_0001084361"
      ],
      [
        "WEG WEMOB Wall - feature",
        "https://static.weg.net/medias/downloadcenter/h78/h95/WEG_WEMOB_50158988_EN.pdf"
      ]
    ],
    "quiz": [
      [
        "Nos carregadores AC, onde normalmente ocorre a conversão de AC para DC?",
        "No veículo",
        [
          "No medidor da concessionária",
          "No veículo",
          "No DPS",
          "No DR"
        ]
      ],
      [
        "Qual família é tipicamente mais associada à recarga rápida em eletropostos?",
        "Carregador DC",
        [
          "Wallbox AC residencial",
          "Carregador DC",
          "Tomada de uso geral",
          "Autotransformador"
        ]
      ],
      [
        "Segundo dados oficiais, a linha ABB Terra AC possui variantes até:",
        "22 kW trifásico",
        [
          "3,7 kW trifásico",
          "7,4 kW monofásico apenas",
          "22 kW trifásico",
          "50 kW DC"
        ]
      ],
      [
        "O EVlink Home Smart possui, segundo a documentação consultada, grau de proteção:",
        "IP55 e IK10",
        [
          "IP20 e IK05",
          "IP44 e IK07",
          "IP55 e IK10",
          "IP67 e IK03"
        ]
      ],
      [
        "Ao especificar um carregador, além da potência, o projetista deve avaliar:",
        "Conector, ambiente, conectividade e estratégia de uso",
        [
          "Apenas o preço",
          "Somente a marca do carregador",
          "Somente a cor da estação",
          "Conector, ambiente, conectividade e estratégia de uso"
        ]
      ]
    ]
  },
  {
    "id": 3,
    "num": "03",
    "title": "Conectores, Padrões e Normas do Setor",
    "description": "Leitura dos padrões Type 1, Type 2, CCS, CHAdeMO, SAE J3400 e normas aplicáveis.",
    "image": "plugues-conectores.webp",
    "objectives": [
      "Identificar os principais conectores do mercado.",
      "Relacionar padrões de conector com regiões e aplicações.",
      "Compreender a importância das normas IEC, SAE e NBR para a interoperabilidade.",
      "Diferenciar AC e DC pela interface física do conector."
    ],
    "theory": "<p>Conector não é um detalhe visual do projeto. Ele define <b>compatibilidade mecânica, elétrica e funcional</b> entre veículo e infraestrutura. No cenário brasileiro, os padrões mais importantes para o profissional são <b>Type 2</b> em recarga AC e <b>CCS2</b> em recarga rápida DC. Ainda assim, o projetista precisa conhecer o ecossistema completo: Type 1 (SAE J1772), CCS1, CHAdeMO e o padrão SAE J3400, ligado ao NACS.</p>\n <p>A IEC 62196 organiza requisitos de compatibilidade dimensional e intercambialidade de plugs, tomadas, conectores e inlet de veículos. Já a SAE J1772 define requisitos funcionais e dimensionais para o acoplador condutivo na América do Norte. Fontes técnicas recentes do Joint Office norte-americano destacam que o <b>SAE J3400</b> formaliza a padronização aberta do conector NACS.</p>\n <p>Para o projeto, isso significa que o profissional precisa selecionar o conector compatível com a frota e, ao mesmo tempo, considerar o mercado local, expansão futura e disponibilidade de adaptadores. Um projeto tecnicamente robusto registra essas premissas e evita soluções incompatíveis com os veículos reais de uso.</p>",
    "highlights": [
      "Type 2 e CCS2 são os padrões mais relevantes para muitos projetos no Brasil.",
      "Type 1 e CCS1 aparecem principalmente em contexto norte-americano.",
      "CHAdeMO ainda existe em parte da frota, mas tem menor protagonismo.",
      "Norma garante interoperabilidade; ficha técnica garante compatibilidade do produto."
    ],
    "formula": "Compatibilidade do sistema = veículo + conector + modo de recarga + comunicação",
    "example": "Se a frota alvo utiliza entrada Type 2 em AC e CCS2 em DC, especificar somente Type 1 ou CCS1 criará incompatibilidade física e operacional.",
    "activity": "Monte um quadro com Type 1, Type 2, CCS1, CCS2, CHAdeMO e SAE J3400/NACS contendo: tipo de corrente (AC/DC), uso típico, região e observações de projeto.",
    "norms": [
      "IEC 62196-1 e 62196-2",
      "IEC 61851",
      "SAE J1772",
      "ABNT NBR 17019"
    ],
    "supportImage": "plugues-conectores.webp",
    "supportCaption": "Comparativo visual dos conectores utilizados em recarga veicular.",
    "references": [
      [
        "IEC 62196-2",
        "https://webstore.iec.ch/en/publication/24204"
      ],
      [
        "SAE J1772",
        "https://saemobilus.sae.org/standards/j1772_202401-sae-electric-vehicle-plug-hybrid-electric-vehicle-conductive-charge-coupler"
      ],
      [
        "SAE J3400 / Joint Office",
        "https://driveelectric.gov/charging-connector"
      ]
    ],
    "quiz": [
      [
        "Qual padrão é mais associado à recarga AC em muitos projetos brasileiros?",
        "Type 2",
        [
          "Type 1",
          "Type 2",
          "CHAdeMO",
          "CCS1"
        ]
      ],
      [
        "Qual conector é largamente usado para recarga rápida DC na Europa e em boa parte do mercado brasileiro?",
        "CCS2",
        [
          "CCS2",
          "Type 2",
          "NBR 5410",
          "J1772 apenas"
        ]
      ],
      [
        "A IEC 62196 trata principalmente de:",
        "Compatibilidade e intercambialidade de plugs e conectores",
        [
          "Tarifas da concessionária",
          "Compatibilidade e intercambialidade de plugs e conectores",
          "Cálculo de curto-circuito",
          "Apenas proteção DR"
        ]
      ],
      [
        "O padrão SAE J1772 é tradicionalmente associado a qual conector?",
        "Type 1",
        [
          "Type 2",
          "CCS2",
          "Type 1",
          "CHAdeMO"
        ]
      ],
      [
        "Ao escolher o conector do projeto, o profissional deve considerar:",
        "Frota real, mercado local e expansão futura",
        [
          "Apenas o catálogo mais bonito",
          "Somente a potência do transformador",
          "Frota real, mercado local e expansão futura",
          "A cor do veículo"
        ]
      ]
    ]
  },
  {
    "id": 4,
    "num": "04",
    "title": "Levantamento da Instalação Existente",
    "description": "Dados de campo necessários para avaliar viabilidade técnica e capacidade da instalação.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Estruturar o levantamento de campo antes do dimensionamento.",
      "Separar dado medido, dado documental e dado estimado.",
      "Identificar limitações da entrada, quadros, alimentadores e espaço físico.",
      "Criar checklist técnico de vistoria."
    ],
    "theory": "<p>Projetos com múltiplos carregadores não começam no catálogo do fabricante; começam na <b>vistoria da instalação existente</b>. O levantamento precisa registrar tensão disponível, sistema de aterramento, capacidade da proteção geral, seções dos alimentadores, transformador, demanda contratada, medições históricas, espaço físico, ambiente de instalação e possibilidade de expansão.</p>\n <p>É essencial distinguir <b>dado comprovado</b> de <b>premissa adotada</b>. Placa do transformador, foto do QGBT, diagrama existente e relatório de medição são evidências. Estimativas de carga futura ou hipóteses de simultaneidade devem ser registradas como premissas. Essa transparência fortalece o memorial de cálculo e reduz questionamentos técnicos.</p>\n <p>Além dos aspectos elétricos, o levantamento deve avaliar rota dos eletrodutos, ventilação, proteção mecânica, distância até os pontos de recarga, zona de estacionamento e condições ambientais. Muitas reprovações ou retrabalhos decorrem justamente de informações de campo mal coletadas.</p>",
    "highlights": [
      "Sem levantamento confiável, o cálculo nasce fraco.",
      "Fotos, placas e diagramas são evidências técnicas valiosas.",
      "Espaço físico e rota de infraestrutura fazem parte do projeto.",
      "Toda premissa deve ser identificada no memorial."
    ],
    "formula": "Capacidade disponível ≠ potência nominal da entrada  |  depende da carga existente e das restrições da instalação",
    "example": "Transformador de 225 kVA não significa 225 kVA livres. Se a instalação já opera com picos elevados, a margem restante pode ser pequena ou exigir DLM.",
    "activity": "Desenvolva um checklist de vistoria para condomínio com 20 vagas, incluindo fotos obrigatórias, dados elétricos, medições e observações de rota.",
    "norms": [
      "ABNT NBR 5410",
      "ABNT NBR 17019",
      "NR-10 (segurança em serviços com eletricidade)"
    ],
    "supportImage": "desafio-projeto.png",
    "supportCaption": "Projeto envolve levantamento, unifilar e documentação desde o início.",
    "references": [
      [
        "ABNT Catálogo de normas",
        "https://www.abntcatalogo.com.br/"
      ],
      [
        "NR-10 - Ministério do Trabalho",
        "https://www.gov.br/"
      ]
    ],
    "quiz": [
      [
        "Qual documento é uma evidência de levantamento e não apenas uma premissa?",
        "Foto da placa do transformador",
        [
          "Suposição de crescimento da frota",
          "Foto da placa do transformador",
          "Palpite do morador",
          "Comentário sem registro"
        ]
      ],
      [
        "Qual item deve ser verificado em campo?",
        "Trajeto dos eletrodutos e espaço físico",
        [
          "Somente a cor da fachada",
          "Trajeto dos eletrodutos e espaço físico",
          "Apenas a marca do veículo",
          "Somente o nome do condomínio"
        ]
      ],
      [
        "Premissas adotadas no projeto devem ser:",
        "Registradas no memorial de cálculo",
        [
          "Ignoradas",
          "Registradas no memorial de cálculo",
          "Mantidas apenas em conversa verbal",
          "Escondidas do cliente"
        ]
      ],
      [
        "A capacidade disponível de uma instalação é determinada por:",
        "Carga existente, infraestrutura e restrições do sistema",
        [
          "Apenas a potência do carregador",
          "Carga existente, infraestrutura e restrições do sistema",
          "Somente o valor do disjuntor final",
          "A vontade do projetista"
        ]
      ],
      [
        "Além dos dados elétricos, a vistoria deve avaliar:",
        "Ambiente, acesso, rota e proteção mecânica",
        [
          "Somente a marca do quadro",
          "Ambiente, acesso, rota e proteção mecânica",
          "Apenas o CEP do local",
          "Somente a iluminação externa"
        ]
      ]
    ]
  },
  {
    "id": 5,
    "num": "05",
    "title": "Energia, SOC e Janela de Recarga",
    "description": "Cálculo de energia requerida, rendimento e potência média necessária.",
    "image": "capa-curso.png",
    "objectives": [
      "Calcular energia necessária entre dois SOCs.",
      "Considerar eficiência da recarga.",
      "Estimar potência média necessária para cumprir a janela de uso.",
      "Entender por que nem toda recarga precisa ocorrer na potência máxima do equipamento."
    ],
    "theory": "<p>Ao projetar recarga, o dado mais importante não é apenas a potência do wallbox, e sim a <b>energia que o veículo precisa receber</b> dentro de uma janela de tempo. Um veículo que permanece conectado por oito horas pode atender muito bem com potência moderada, enquanto operações de alta rotatividade exigem maior potência ou DC.</p>\n <p>O cálculo parte da capacidade da bateria e da variação de SOC desejada. Em seguida, é preciso considerar o rendimento do processo, pois a energia retirada da rede é superior à energia efetivamente armazenada na bateria. Esse raciocínio é essencial para dimensionar a infraestrutura e interpretar a curva de carga de forma realista.</p>\n <p>A boa engenharia evita superdimensionamento desnecessário. Muitas vezes, uma solução em AC com gestão de carga atende plenamente à aplicação, desde que o tempo disponível e o perfil de uso sejam corretamente estudados.</p>",
    "highlights": [
      "Energia requerida depende do delta de SOC.",
      "Perdas devem ser consideradas.",
      "Tempo de permanência redefine a potência necessária.",
      "Maior potência não significa necessariamente melhor custo-benefício."
    ],
    "formula": "E_bat = C_bat × (SOCf − SOCi)  |  E_rede = E_bat / η",
    "example": "Bateria de 60 kWh, carregando de 30% para 90%: E_bat = 60 × 0,60 = 36 kWh. Se η = 0,92, então E_rede ≈ 39,13 kWh.",
    "activity": "Calcule a energia da rede e a potência média para três cenários de recarga: 4 h, 8 h e 10 h.",
    "norms": [
      "ABNT NBR 17019",
      "IEC 61851-1"
    ],
    "supportImage": "capa-curso.png",
    "supportCaption": "O balanço entre energia, tempo e potência é central no projeto.",
    "references": [
      [
        "IEC 61851 - IEC",
        "https://webstore.iec.ch/"
      ]
    ],
    "quiz": [
      [
        "Se a bateria tem 50 kWh e o SOC varia de 20% para 80%, a energia útil é:",
        "30 kWh",
        [
          "10 kWh",
          "20 kWh",
          "30 kWh",
          "40 kWh"
        ]
      ],
      [
        "Com eficiência inferior a 100%, a energia da rede é:",
        "Maior que a energia armazenada",
        [
          "Menor que a energia armazenada",
          "Sempre igual",
          "Maior que a energia armazenada",
          "Zero"
        ]
      ],
      [
        "Se 40 kWh precisam ser entregues em 8 h, a potência média ideal é:",
        "5 kW",
        [
          "3 kW",
          "4 kW",
          "5 kW",
          "8 kW"
        ]
      ],
      [
        "O tempo de permanência do veículo influencia:",
        "A potência necessária e a estratégia de recarga",
        [
          "Somente o conector",
          "A potência necessária e a estratégia de recarga",
          "A cor da estação",
          "Somente a tensão da rede"
        ]
      ],
      [
        "Quando a janela de recarga é longa, uma potência moderada pode ser:",
        "Tecnicamente suficiente",
        [
          "Sempre inviável",
          "Tecnicamente suficiente",
          "Proibida pela norma",
          "Sem relação com o projeto"
        ]
      ]
    ],
    "simulatorType": "energy",
    "technicalSections": [
      {
        "title": "Roteiro de dimensionamento energético",
        "html": "<ol><li>Defina a capacidade útil/nominal da bateria conforme o dado disponível.</li><li>Determine SOC inicial e SOC final desejado.</li><li>Calcule a energia a repor: <b>Ebat = Cbat × (SOCf − SOCi)</b>.</li><li>Corrija pelo rendimento global: <b>Erede = Ebat/η</b>.</li><li>Divida pela janela de conexão para obter a potência média necessária.</li><li>Compare esse valor com os limites do veículo, do SAVE e da instalação.</li></ol>"
      }
    ]
  },
  {
    "id": 6,
    "num": "06",
    "title": "Demanda, Simultaneidade e Perfil de Uso",
    "description": "Como transformar potência instalada em cenários realistas de demanda.",
    "image": "multiplos-carregadores.webp",
    "objectives": [
      "Diferenciar potência instalada de demanda.",
      "Estimar cenários com simultaneidade e diversidade.",
      "Relacionar perfil de uso à potência requerida.",
      "Preparar o raciocínio para DLM e curva de carga."
    ],
    "theory": "<p>Quando vários carregadores são instalados, a simples soma de potências nominais fornece a <b>potência instalada SAVE</b>, mas não descreve sozinha o comportamento real da instalação. O projetista precisa construir cenários coerentes com os horários, a permanência dos veículos, a política de uso e a existência ou não de gerenciamento dinâmico.</p>\n <p>Em condomínio residencial, é comum que nem todos os veículos iniciem a recarga ao mesmo tempo com a mesma potência. Em frotas corporativas, o comportamento pode ser diferente, com janelas curtas de disponibilidade e maior coincidência de cargas. Por isso, simultaneidade deve ser tratada com critério técnico, e não por suposições genéricas.</p>\n <p>A combinação entre perfil de uso, curva de carga da instalação e eventuais limites operacionais definirá se o projeto exigirá DLM, reforço de entrada ou expansão da infraestrutura.</p>",
    "highlights": [
      "Potência instalada não é igual à demanda efetiva.",
      "Simultaneidade deve ser coerente com o uso real.",
      "Condomínio, frota e eletroposto têm perfis diferentes.",
      "DLM muda completamente a leitura do problema."
    ],
    "formula": "P_instalada,SAVE = ΣP_i  |  P_total(t) = P_base(t) + P_SAVE(t)",
    "example": "20 carregadores de 7,4 kW totalizam 148 kW instalados. Se o DLM limitar a operação a 60 kW, a demanda simultânea do conjunto poderá ser bem menor que a soma nominal.",
    "activity": "Monte três cenários para um condomínio com 20 carregadores de 7,4 kW: sem DLM, DLM a 80 kW e DLM a 60 kW.",
    "norms": [
      "ABNT NBR 5410",
      "ABNT NBR 17019",
      "NDU 042 Energisa"
    ],
    "supportImage": "multiplos-carregadores.webp",
    "supportCaption": "Análise inicial para múltiplos carregadores: demanda, DLM e perfil operacional.",
    "references": [
      [
        "NDU 042 Energisa",
        "https://www.energisa.com.br/sites/energisa/files/media/documents/2025-11/NDU%20042%20-%20FORNECIMENTO%20DE%20ENERGIA%20EL%C3%89TRICA%20PARA%20SISTEMAS%20DE%20ALIMENTA%C3%87%C3%83O%20DE%20VE%C3%8DCULOS%20EL%C3%89TRICOS_0.pdf"
      ]
    ],
    "quiz": [
      [
        "20 carregadores de 7,4 kW representam potência instalada de:",
        "148 kW",
        [
          "74 kW",
          "148 kW",
          "220 kW",
          "20 kVA"
        ]
      ],
      [
        "Demanda efetiva depende de:",
        "Perfil de uso, coincidência e estratégia de operação",
        [
          "Apenas da marca do carregador",
          "Somente do preço",
          "Perfil de uso, coincidência e estratégia de operação",
          "Apenas do comprimento do cabo"
        ]
      ],
      [
        "Em sistemas com DLM, a potência do conjunto pode ser:",
        "Limitada abaixo da soma das potências nominais",
        [
          "Igual à soma sempre",
          "Zero em qualquer hora",
          "Limitada abaixo da soma das potências nominais",
          "Maior que a rede disponível sem consequência"
        ]
      ],
      [
        "Qual contexto tende a ter maior coincidência de recarga?",
        "Depende do perfil operacional da instalação",
        [
          "Todos são iguais",
          "Somente residências",
          "Depende do perfil operacional da instalação",
          "Somente carros importados"
        ]
      ],
      [
        "Potência instalada e demanda são:",
        "Grandezas diferentes",
        [
          "Sempre a mesma coisa",
          "Grandezas diferentes",
          "Sinônimos obrigatórios",
          "Dados irrelevantes"
        ]
      ]
    ]
  },
  {
    "id": 7,
    "num": "07",
    "title": "Curva de Carga da Instalação",
    "description": "Leitura e construção da curva de carga para projetos com múltiplos carregadores.",
    "image": "curva-carga.png",
    "objectives": [
      "Construir e interpretar curva de carga.",
      "Identificar horários críticos e horários de maior disponibilidade.",
      "Calcular potência disponível para recarga em cada instante.",
      "Registrar corretamente a origem da curva utilizada no projeto."
    ],
    "theory": "<p>A <b>curva de carga</b> é a espinha dorsal de um projeto com vários carregadores. Ela representa o comportamento da potência ao longo do tempo e mostra como a instalação realmente consome energia. Quando o profissional conhece a curva base da edificação, consegue estimar a potência residual disponível para os carregadores, definir janelas adequadas de recarga e avaliar a necessidade de DLM.</p>\n <p>Em termos práticos, a potência disponível para recarga é a diferença entre o limite operacional da instalação e a carga existente naquele instante. Essa leitura evita decisões intuitivas e transforma o projeto em um raciocínio defensável tecnicamente. O mesmo conjunto de carregadores pode ser viável à noite e crítico no horário de ponta ou no pico operacional do empreendimento.</p>\n <p>No relatório final, a curva deve ser apresentada com origem dos dados, intervalo de amostragem e hipótese de carga dos carregadores. Isso aumenta a rastreabilidade do projeto e sustenta a pré-validação junto ao cliente e à distribuidora.</p>",
    "highlights": [
      "Curva de carga mostra comportamento real da instalação.",
      "Ponto crítico é o horário de menor margem disponível.",
      "A mesma infraestrutura pode comportar diferentes potências em horários distintos.",
      "Curva precisa ter fonte e período identificados."
    ],
    "formula": "P_EV,disp(t) = P_limite − P_instalação(t)",
    "example": "Se o limite operacional da instalação é 200 kW e às 18h a carga base é 170 kW, então a potência disponível para recarga nesse instante é 30 kW.",
    "activity": "Construa uma curva de 24 h com pelo menos 8 pontos e destaque: maior carga, menor carga e margem disponível para recarga em cada horário.",
    "norms": [
      "ABNT NBR 17019",
      "NDU 042 Energisa"
    ],
    "supportImage": "multiplos-carregadores.webp",
    "supportCaption": "Infográfico sobre avaliação técnica antes de especificar vários carregadores.",
    "references": [
      [
        "NDU 042 Energisa",
        "https://www.energisa.com.br/sites/energisa/files/media/documents/2025-11/NDU%20042%20-%20FORNECIMENTO%20DE%20ENERGIA%20EL%C3%89TRICA%20PARA%20SISTEMAS%20DE%20ALIMENTA%C3%87%C3%83O%20DE%20VE%C3%8DCULOS%20EL%C3%89TRICOS_0.pdf"
      ]
    ],
    "quiz": [
      [
        "A curva de carga representa:",
        "A potência da instalação ao longo do tempo",
        [
          "O preço do carregador",
          "A potência da instalação ao longo do tempo",
          "O número de vagas apenas",
          "Somente a corrente do DR"
        ]
      ],
      [
        "A potência disponível para recarga é dada por:",
        "Limite da instalação menos carga existente",
        [
          "Carga existente menos limite da instalação",
          "Limite da instalação menos carga existente",
          "Potência do carro menos bateria",
          "Tensão menos corrente"
        ]
      ],
      [
        "O horário crítico é geralmente o de:",
        "Menor margem disponível",
        [
          "Maior número de vagas",
          "Menor margem disponível",
          "Maior número de marcas de carros",
          "Menor luminosidade"
        ]
      ],
      [
        "Uma curva de carga usada em projeto deve ter:",
        "Origem dos dados e período identificados",
        [
          "Somente desenho bonito",
          "Origem dos dados e período identificados",
          "Apenas cor verde",
          "Somente o pico máximo"
        ]
      ],
      [
        "Conhecer a curva de carga ajuda a definir:",
        "Horários adequados de recarga e necessidade de DLM",
        [
          "Somente o modelo de plugue",
          "Horários adequados de recarga e necessidade de DLM",
          "A marca da tinta do piso",
          "A posição do retrovisor"
        ]
      ]
    ],
    "simulatorType": "curve",
    "technicalSections": [
      {
        "title": "Como montar uma curva defensável",
        "html": "<p>Uma curva de projeto deve indicar <b>origem dos dados</b>, período, intervalo de amostragem, pico observado, carga mínima e premissas dos carregadores. Para cada intervalo:</p><div class=\"tech-equation\">P<sub>disp</sub>(t)=P<sub>limite</sub>−P<sub>base</sub>(t)</div><p>Se for adotada reserva operacional, utilize <b>Pdisp,projeto = Plimite − Pbase − Preserva</b>. A reserva não é um valor normativo universal; é uma premissa de engenharia que deve ser justificada.</p>"
      }
    ]
  },
  {
    "id": 8,
    "num": "08",
    "title": "Curva Medida x Curva Simulada",
    "description": "Como documentar medições e simulações com qualidade técnica.",
    "image": "multiplos-carregadores.webp",
    "objectives": [
      "Distinguir medições reais de estimativas.",
      "Definir amostragem adequada para análise de carga.",
      "Organizar planilhas e relatórios de monitoramento.",
      "Avaliar limitações de cada tipo de curva."
    ],
    "theory": "<p>A <b>curva medida</b> é obtida a partir de dados reais de medidores, analisadores ou sistemas supervisórios. Já a <b>curva simulada</b> é construída com premissas de carga, ocupação e operação. Ambas são úteis, mas possuem pesos diferentes na análise técnica. Curvas medidas trazem evidência do comportamento existente; curvas simuladas permitem estudar cenários futuros.</p>\n <p>Para que a curva medida seja confiável, é necessário registrar período de coleta, intervalo entre amostras, grandezas monitoradas e eventuais eventos extraordinários. Já a curva simulada precisa deixar explícitas as premissas: potência por carregador, simultaneidade, janelas de permanência e limites adotados.</p>\n <p>Projetos maduros frequentemente usam as duas abordagens: medem o comportamento atual e simulam o comportamento futuro com os carregadores instalados.</p>",
    "highlights": [
      "Curva medida evidencia o presente; curva simulada estuda o futuro.",
      "Intervalo de amostragem interfere na leitura dos picos.",
      "Premissas de simulação devem ser explícitas.",
      "As duas curvas podem e devem dialogar no projeto."
    ],
    "formula": "Pico medido = max[P(t)]  |  P_total simulada = P_base + P_SAVE",
    "example": "Uma coleta a cada 15 min durante 7 dias pode revelar diferença entre dia útil, sábado e domingo, ajudando a escolher um cenário de projeto mais realista.",
    "activity": "Crie uma planilha padrão com as colunas: Data/Hora, kW, kVA, FP, Tensão, Corrente, Origem do dado e Observações.",
    "norms": [
      "ABNT NBR 17019",
      "ABNT NBR 5410"
    ],
    "supportImage": "curva-carga.png",
    "supportCaption": "Curva de carga e simulação são fundamentais para recarga veicular inteligente.",
    "references": [
      [
        "ABNT Catálogo",
        "https://www.abntcatalogo.com.br/"
      ]
    ],
    "quiz": [
      [
        "Qual curva traz evidência direta do consumo atual?",
        "Curva medida",
        [
          "Curva simulada",
          "Curva medida",
          "Tabela de preços",
          "Cronograma de aula"
        ]
      ],
      [
        "A curva simulada deve explicitar:",
        "Premissas adotadas",
        [
          "Somente a marca do software",
          "Premissas adotadas",
          "A cor do gráfico apenas",
          "Nada, por ser simulação"
        ]
      ],
      [
        "O intervalo de amostragem influencia:",
        "A visualização dos picos e vales",
        [
          "Apenas a estética do relatório",
          "A visualização dos picos e vales",
          "Somente a tensão nominal",
          "Nada no projeto"
        ]
      ],
      [
        "Usar curva medida e curva simulada em conjunto permite:",
        "Entender o presente e estudar o futuro",
        [
          "Eliminar a necessidade de projeto",
          "Entender o presente e estudar o futuro",
          "Ignorar a vistoria",
          "Dispensar o memorial de cálculo"
        ]
      ],
      [
        "No relatório técnico, a origem dos dados deve ser:",
        "Registrada claramente",
        [
          "Ocultada",
          "Registrada claramente",
          "Substituída por opinião verbal",
          "Desnecessária"
        ]
      ]
    ]
  },
  {
    "id": 9,
    "num": "09",
    "title": "Dimensionamento da Demanda SAVE",
    "description": "Cálculo do impacto dos carregadores sobre a instalação e definição de cenários.",
    "image": "multiplos-carregadores.webp",
    "objectives": [
      "Calcular o impacto dos carregadores na instalação.",
      "Comparar cenários com e sem gerenciamento.",
      "Avaliar coincidência entre carga base e carga SAVE.",
      "Definir potências defensáveis para o projeto."
    ],
    "theory": "<p>Dimensionar a demanda SAVE significa estimar quanto a instalação passará a exigir da rede quando os carregadores forem incorporados. Isso não se resume a somar potências. É preciso observar a coincidência entre a carga base da edificação e a carga adicional da recarga.</p>\n <p>O profissional deve estudar cenários. Em um cenário conservador, considera-se uma coincidência maior entre recarga e pico da instalação. Em cenários gerenciados, a potência total do conjunto é limitada por DLM, reduzindo o risco de sobrecarga. Quanto mais clara for a lógica adotada, mais robusto será o memorial.</p>\n <p>Essa etapa orienta decisões como reforço da entrada, limitação da quantidade de pontos ativos simultâneos ou adoção de software de gestão.</p>",
    "highlights": [
      "Cenário de projeto deve ser explícito.",
      "Coincidência de pico é um fator crítico.",
      "DLM pode reduzir a demanda máxima do conjunto.",
      "Demanda SAVE bem estudada evita retrabalho e subdimensionamento."
    ],
    "formula": "P_total(t)=P_base(t)+P_SAVE(t)",
    "example": "Se o pico atual é 150 kW e a operação SAVE for limitada a 60 kW, a carga combinada poderá atingir 210 kW quando houver coincidência plena.",
    "activity": "Simule três cenários de demanda total para uma instalação com pico atual de 150 kW e 12 carregadores de 7,4 kW.",
    "norms": [
      "ABNT NBR 17019",
      "NDU 042 Energisa"
    ],
    "supportImage": "multiplos-carregadores.webp",
    "supportCaption": "Exemplo de análise técnica para vários carregadores.",
    "references": [
      [
        "NDU 042 Energisa",
        "https://www.energisa.com.br/sites/energisa/files/media/documents/2025-11/NDU%20042%20-%20FORNECIMENTO%20DE%20ENERGIA%20EL%C3%89TRICA%20PARA%20SISTEMAS%20DE%20ALIMENTA%C3%87%C3%83O%20DE%20VE%C3%8DCULOS%20EL%C3%89TRICOS_0.pdf"
      ]
    ],
    "quiz": [
      [
        "A demanda total da instalação com SAVE é composta por:",
        "Carga base + carga dos carregadores",
        [
          "Somente a carga dos carros",
          "Carga base + carga dos carregadores",
          "Somente a tensão nominal",
          "Apenas a demanda contratada"
        ]
      ],
      [
        "Em um cenário sem gerenciamento, o risco de pico é:",
        "Maior",
        [
          "Menor",
          "Maior",
          "Nulo",
          "Irrelevante"
        ]
      ],
      [
        "Estudar cenários ajuda a:",
        "Definir soluções defensáveis de projeto",
        [
          "Somente comprar equipamentos",
          "Definir soluções defensáveis de projeto",
          "Eliminar a necessidade de cálculo",
          "Trocar o conector do carro"
        ]
      ],
      [
        "A coincidência entre pico da instalação e recarga:",
        "Afeta diretamente a demanda total",
        [
          "Não importa",
          "Afeta diretamente a demanda total",
          "Só afeta a pintura do estacionamento",
          "Só afeta veículos importados"
        ]
      ],
      [
        "O DLM pode contribuir para:",
        "Limitar a potência total do conjunto",
        [
          "Aumentar a tensão da rede",
          "Limitar a potência total do conjunto",
          "Eliminar o PE",
          "Substituir a concessionária"
        ]
      ]
    ]
  },
  {
    "id": 10,
    "num": "10",
    "title": "DLM — Gerenciamento Dinâmico de Carga",
    "description": "Estratégias de controle, priorização e limitação da potência total.",
    "image": "multiplos-carregadores.webp",
    "objectives": [
      "Entender conceitos de DLM estático e dinâmico.",
      "Definir estratégias de priorização de carga.",
      "Relacionar DLM à proteção da infraestrutura.",
      "Perceber DLM como ferramenta de projeto e não apenas de operação."
    ],
    "theory": "<p>O <b>Dynamic Load Management</b> distribui ou limita a potência disponível entre os carregadores de acordo com a condição instantânea da instalação. Em vez de permitir que todos os pontos operem livremente até o máximo nominal, o sistema observa limites definidos e ajusta correntes ou prioridades.</p>\n <p>O DLM pode atuar por estratégias diferentes: divisão igualitária da potência, prioridade por horário de saída, prioridade por nível de bateria, limitação por faixa horária ou restrição por demanda da instalação. Em todos os casos, o papel do projetista é definir a lógica de operação e documentá-la. Sem documentação, o DLM vira promessa comercial, não critério técnico.</p>\n <p>Em muitos empreendimentos, o DLM é a chave para viabilizar a implantação de vários carregadores sem reforçar imediatamente a infraestrutura principal.</p>",
    "highlights": [
      "DLM protege a instalação e aumenta a escalabilidade.",
      "Prioridade de carga pode seguir regras operacionais.",
      "Lógica do DLM deve aparecer no projeto.",
      "DLM não substitui cálculo; ele altera o cenário calculado."
    ],
    "formula": "P_SAVE,max(t) = P_limite − P_base(t)",
    "example": "Se o limite do sistema é 180 kW e a carga base no instante é 130 kW, o DLM pode liberar até 50 kW para o conjunto de carregadores.",
    "activity": "Escreva uma política simples de DLM para 10 vagas: 4 prioritárias, 6 compartilhadas, com limite total de 40 kW.",
    "norms": [
      "ABNT NBR 17019",
      "OCPP / integração quando aplicável"
    ],
    "supportImage": "multiplos-carregadores.webp",
    "supportCaption": "DLM e análise de demanda como base do projeto.",
    "references": [
      [
        "ABB Terra AC - integração com gerenciamento dinâmico",
        "https://new.abb.com/ev-charging/pt/terra-ac-wallbox"
      ],
      [
        "Schneider EVlink Home Smart - antidisparo/gestão de carga",
        "https://productinfo.se.com/wiser_home/evlink-home-smart_device-user-guide_wiser_home/Portuguese/EVlink%20Home%20Smart_Wiser%20Home_Device%20user%20guide_pt_DD00573198.xml/%24/WHM_EVlinkHomeSmartCPT_pt_DD00573213"
      ]
    ],
    "quiz": [
      [
        "O DLM é usado para:",
        "Gerenciar a potência disponível entre carregadores",
        [
          "Aumentar a tensão do transformador",
          "Gerenciar a potência disponível entre carregadores",
          "Eliminar a necessidade de proteção",
          "Substituir o medidor"
        ]
      ],
      [
        "Uma política de DLM pode priorizar:",
        "Veículos com horário de saída mais próximo",
        [
          "Apenas carros brancos",
          "Veículos com horário de saída mais próximo",
          "Somente a vaga 1 sem regra",
          "Somente o veículo mais caro"
        ]
      ],
      [
        "No projeto, a lógica do DLM deve ser:",
        "Documentada",
        [
          "Mantida em segredo",
          "Documentada",
          "Ignorada",
          "Substituída por marketing"
        ]
      ],
      [
        "O DLM pode viabilizar mais carregadores sem reforço imediato porque:",
        "Limita a potência simultânea do conjunto",
        [
          "Aumenta o fator de potência automaticamente sempre",
          "Cria energia adicional",
          "Elimina a curva de carga",
          "Troca o tipo de conector"
        ]
      ],
      [
        "DLM e cálculo de demanda:",
        "São complementares",
        [
          "São assuntos independentes",
          "São complementares",
          "Nunca aparecem juntos",
          "Se anulam"
        ]
      ]
    ],
    "simulatorType": "dlm",
    "technicalSections": [
      {
        "title": "Critérios técnicos para o DLM",
        "html": "<p>O limite do DLM deve ser compatível com a capacidade da entrada, do transformador, dos alimentadores e com a curva base da instalação. A lógica de controle precisa registrar:</p><ul><li>limite global em kW ou A;</li><li>quantidade máxima de sessões simultâneas;</li><li>corrente mínima por veículo quando aplicável;</li><li>prioridades e janelas de recarga;</li><li>comportamento em falha de comunicação;</li><li>medição usada pelo algoritmo.</li></ul>"
      }
    ]
  },
  {
    "id": 11,
    "num": "11",
    "title": "Dimensionamento dos Circuitos dos Carregadores",
    "description": "Corrente de projeto, condutores, eletrodutos e critérios de instalação.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Calcular corrente de projeto dos circuitos.",
      "Selecionar seção inicial de condutores.",
      "Considerar método de instalação e fatores de correção.",
      "Registrar critérios de dimensionamento."
    ],
    "theory": "<p>O dimensionamento dos circuitos terminais de recarga exige que o projetista conheça a corrente de projeto, o método de instalação, o tipo de isolação, a temperatura ambiente, o agrupamento de cabos, o número de condutores carregados e a proteção adotada. Em outras palavras, não existe seção correta definida por um único valor de potência sem contexto.</p>\n <p>Em carregadores monofásicos, a corrente resulta da potência dividida pela tensão e pelo fator de potência. Em sistemas trifásicos equilibrados, utiliza-se a expressão com √3. A seção do condutor deve atender à condução de corrente, à queda de tensão e à coordenação com o dispositivo de proteção.</p>\n <p>O bom memorial de cálculo registra a sequência de raciocínio: corrente de projeto, método de instalação, capacidade de condução corrigida, proteção e verificação final.</p><p><b>Procedimento recomendado:</b> calcule a corrente de projeto (Ib); obtenha a capacidade de condução de corrente do cabo (Iz) para o método de instalação escolhido; aplique fatores de correção de temperatura e agrupamento; selecione o dispositivo de proteção (In); e confirme a relação <b>Ib ≤ In ≤ Iz corrigida</b>. Depois verifique queda de tensão, curto-circuito, proteção do PE e requisitos do fabricante.</p>",
    "highlights": [
      "Seção é resultado de critérios combinados.",
      "Proteção e condutor devem ser coordenados.",
      "Método de instalação altera capacidade de condução.",
      "Queda de tensão pode governar a seção em distâncias longas."
    ],
    "formula": "I = P/(V×FP)  |  I = P/(√3×V×FP)",
    "example": "Para um carregador de 7,4 kW em 220 V monofásico e FP≈1, a corrente de projeto é aproximadamente 33,6 A.",
    "activity": "Dimensione preliminarmente o circuito de um carregador de 11 kW trifásico considerando 380 V e registre as premissas do método de instalação.",
    "norms": [
      "ABNT NBR 5410",
      "ABNT NBR 17019"
    ],
    "supportImage": "save-ferramenta.png",
    "supportCaption": "Ferramenta digital pode apoiar o cálculo, mas o critério deve ser dominado pelo aluno.",
    "references": [
      [
        "ABNT Catálogo",
        "https://www.abntcatalogo.com.br/"
      ],
      [
        "ABNT Catálogo — NBR 5410",
        "https://www.abntcatalogo.com.br/"
      ]
    ],
    "quiz": [
      [
        "A corrente de projeto de um circuito monofásico pode ser obtida por:",
        "P/(V×FP)",
        [
          "V/(P×FP)",
          "P/(V×FP)",
          "P×V",
          "√3×V×P"
        ]
      ],
      [
        "Em sistema trifásico equilibrado, a expressão envolve:",
        "√3",
        [
          "π",
          "2",
          "√3",
          "1/√3"
        ]
      ],
      [
        "A seção do condutor deve atender, entre outros critérios, a:",
        "Condução de corrente, proteção e queda de tensão",
        [
          "Apenas estética da instalação",
          "Condução de corrente, proteção e queda de tensão",
          "Somente a marca do cabo",
          "Somente a voltagem do carro"
        ]
      ],
      [
        "O método de instalação influencia:",
        "A capacidade de condução de corrente",
        [
          "A cor do cabo apenas",
          "A capacidade de condução de corrente",
          "Nada no projeto",
          "Somente a etiqueta do painel"
        ]
      ],
      [
        "Um memorial de cálculo adequado deve registrar:",
        "Premissas e verificações adotadas",
        [
          "Somente o resultado final",
          "Premissas e verificações adotadas",
          "Apenas o nome do cliente",
          "Somente a foto da vaga"
        ]
      ]
    ],
    "simulatorType": "circuit",
    "technicalSections": [
      {
        "title": "Sequência de cálculo do circuito terminal",
        "html": "<div class=\"calc-steps\"><b>1. Corrente de projeto</b><br>Monofásico: I<sub>b</sub>=P/(V×FP×η)<br>Trifásico: I<sub>b</sub>=P/(√3×V×FP×η)<br><br><b>2. Capacidade corrigida do condutor</b><br>I<sub>z,corr</sub>=I<sub>z,tabela</sub>×F<sub>temp</sub>×F<sub>agr</sub>×F<sub>outros</sub><br><br><b>3. Coordenação</b><br>I<sub>b</sub> ≤ I<sub>n</sub> ≤ I<sub>z,corr</sub></div><p class=\"tech-note\">O laboratório abaixo pede que o aluno informe Iz da tabela/método de instalação adotado. Assim a plataforma não substitui a tabela normativa: ela ensina a verificar a coordenação.</p>"
      }
    ]
  },
  {
    "id": 12,
    "num": "12",
    "title": "Queda de Tensão e Distâncias",
    "description": "Avaliação da queda de tensão e impacto da distância nos circuitos de recarga.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Calcular e interpretar queda de tensão.",
      "Entender influência da distância e da seção dos cabos.",
      "Avaliar alternativas técnicas para reduzir a queda.",
      "Verificar conformidade com critérios de projeto."
    ],
    "theory": "<p>A queda de tensão é um efeito inevitável da circulação de corrente ao longo dos condutores, mas precisa ser controlada. Em circuitos de recarga, trajetos longos até as vagas podem tornar esse critério decisivo na definição da seção dos cabos, principalmente quando as correntes são elevadas.</p>\n <p>Se a queda de tensão for excessiva, o sistema poderá apresentar desempenho inferior, aquecimento indesejado e operação fora dos parâmetros previstos. Por isso, a engenharia deve comparar diferentes seções, rotas e arranjos para atingir um resultado tecnicamente adequado.</p>\n <p>Na prática, aumentar a seção do condutor ou reduzir o comprimento elétrico do circuito são medidas clássicas para mitigar o problema.</p><p>Para uma estimativa pedagógica em cobre, pode-se usar a resistividade aproximada a 20 °C. No projeto executivo, resistência à temperatura de operação, reatância, arranjo dos condutores e dados do fabricante devem ser considerados quando relevantes.</p>",
    "highlights": [
      "Quanto maior a corrente e a distância, maior a queda de tensão.",
      "Seção maior tende a reduzir a queda.",
      "O melhor trajeto nem sempre é o mais curto fisicamente, mas o mais eficiente tecnicamente.",
      "Circuito de recarga pode ser governado por queda de tensão em vez de condução."
    ],
    "formula": "ΔV ≈ 2×L×I×ρ/S (mono)  |  ΔV ≈ √3×L×I×ρ/S (tri)",
    "example": "Se a distância aumenta mantendo-se corrente e seção, a queda de tensão aumenta proporcionalmente.",
    "activity": "Compare duas seções de cabo para um circuito de 35 m e indique qual atende melhor o critério de queda de tensão.",
    "norms": [
      "ABNT NBR 5410"
    ],
    "supportImage": "save-ferramenta.png",
    "supportCaption": "Análise de queda de tensão também pode ser simulada na ferramenta do curso.",
    "references": [
      [
        "ABNT Catálogo",
        "https://www.abntcatalogo.com.br/"
      ]
    ],
    "quiz": [
      [
        "A queda de tensão tende a aumentar com:",
        "Corrente e comprimento",
        [
          "Seção e temperatura apenas",
          "Corrente e comprimento",
          "Apenas a cor do cabo",
          "Número de vagas pintadas"
        ]
      ],
      [
        "Aumentar a seção do condutor tende a:",
        "Reduzir a queda de tensão",
        [
          "Aumentar a queda de tensão",
          "Reduzir a queda de tensão",
          "Não alterar nada",
          "Desligar o veículo"
        ]
      ],
      [
        "Em trajetos longos para recarga, a seção pode ser governada por:",
        "Queda de tensão",
        [
          "Marca do carregador",
          "Queda de tensão",
          "Cor do wallbox",
          "Tamanho da vaga"
        ]
      ],
      [
        "Uma forma de reduzir a queda de tensão é:",
        "Reduzir o comprimento elétrico do circuito",
        [
          "Aumentar a distância",
          "Reduzir o comprimento elétrico do circuito",
          "Retirar o PE",
          "Usar qualquer cabo disponível"
        ]
      ],
      [
        "A verificação da queda de tensão faz parte de qual etapa?",
        "Dimensionamento do circuito",
        [
          "Escolha do adesivo do estacionamento",
          "Dimensionamento do circuito",
          "Somente do certificado",
          "Apenas da aula de marketing"
        ]
      ]
    ],
    "simulatorType": "voltdrop",
    "technicalSections": [
      {
        "title": "Critério de verificação",
        "html": "<p>Calcule a queda em volts e em percentual. Compare o resultado com os limites aplicáveis ao projeto completo, lembrando que a queda do circuito do carregador é apenas uma parcela da queda total entre a origem e a carga.</p><div class=\"tech-equation\">ΔV% = 100 × ΔV / V<sub>nominal</sub></div>"
      }
    ]
  },
  {
    "id": 13,
    "num": "13",
    "title": "Proteções SAVE: Disjuntor, DR, RDC-DD e DPS",
    "description": "Dimensionamento e seleção de proteção contra sobrecorrente, corrente residual CC/CA e surtos em carregadores VE.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Selecionar disjuntor, DR e DPS com critério técnico.",
      "Compreender coordenação básica entre proteção e condutor.",
      "Identificar recursos de proteção eventualmente incorporados ao equipamento.",
      "Relacionar fabricante e norma à escolha do dispositivo."
    ],
    "theory": "<p>A proteção de um circuito SAVE precisa ser estudada em camadas. O disjuntor protege o circuito contra sobrecorrente e deve ser coordenado com a corrente de projeto e a capacidade do condutor. O dispositivo diferencial residual protege contra correntes de fuga, mas <b>o tipo do DR importa</b> porque carregadores de veículos possuem eletrônica de potência e podem produzir componentes residuais contínuas.</p><p>O <b>DR tipo AC</b> responde à corrente residual alternada senoidal e não deve ser adotado como solução automática para SAVE. O <b>tipo A</b> responde a corrente alternada e contínua pulsante. O <b>tipo F</b> atende formas de onda adicionais associadas a determinadas cargas com conversores, porém não substitui automaticamente o tipo exigido pelo fabricante. O <b>tipo B</b> é adequado também para corrente residual contínua lisa.</p><p>Em carregamento Modo 3 existe ainda o conceito de <b>RDC-DD</b> — residual direct current detecting device — tratado pela IEC 62955. O seu papel é detectar corrente residual contínua associada ao carregamento. Quando o fabricante comprova detecção CC de 6 mA integrada e especifica o uso de DR tipo A a montante, essa combinação pode ser adotada conforme o manual e as normas aplicáveis. <b>Não generalize:</b> se a detecção CC for desconhecida ou ausente, o projetista deve avaliar a solução exigida pela norma e pelo fabricante, o que pode incluir DR tipo B.</p><p>Exemplos oficiais reforçam esse raciocínio. O manual ABB Terra AC informa proteção a montante com RCD tipo A mínimo, corrente residual nominal de até 30 mA, e monitoramento interno de corrente de falha CC acima de 6 mA. A Schneider Electric informa que o EVlink Home incorpora RDC-DD de 6 mA e requer ao menos RCD tipo A com corrente diferencial nominal não superior a 30 mA.</p><p>Para surtos, o DPS deve ser especificado pelo <b>tipo</b> e pelos seus parâmetros elétricos. Tipo 1 é associado à condução de correntes de impulso de maior energia na origem/entrada quando o risco exige essa proteção; Tipo 2 é amplamente usado nos quadros de distribuição; Tipo 3 é complementar e instalado próximo à carga sensível; e dispositivos Tipo 1+2 combinam funções. Os parâmetros <b>Uc, Up, In, Imax e Iimp</b> precisam ser compreendidos e coordenados com o esquema de aterramento, tensão da instalação e proteção a montante.</p>",
    "highlights": [
      "DR Tipo AC não é escolha automática para carregadores VE.",
      "RDC-DD de 6 mA CC pode permitir uso de DR Tipo A quando o fabricante/norma assim especificarem.",
      "Sem informação sobre detecção CC, não se deve presumir que Tipo A é suficiente.",
      "DR de 30 mA aparece nos exemplos oficiais ABB/Schneider consultados; confirme o equipamento e o projeto.",
      "DPS exige análise de Uc, Up, In/Imax e, no Tipo 1, Iimp.",
      "DPS Tipo 3 é complementar; coordenação a montante continua necessária."
    ],
    "formula": "Ib ≤ In ≤ Iz,corr  |  DR: verificar tipo + IΔn + RDC-DD  |  DPS: Uc, Up, In/Imax, Iimp e coordenação",
    "example": "Exemplo 1 — ABB Terra AC: documentação oficial informa RCD a montante Tipo A mínimo, IΔn ≤ 30 mA e monitoramento interno de corrente CC > 6 mA. Exemplo 2 — Schneider EVlink Home: fabricante informa RDC-DD 6 mA integrado e necessidade de RCD Tipo A com IΔn ≤ 30 mA. A lição é: <b>ler a documentação do modelo específico antes de selecionar o DR.</b>",
    "activity": "Selecione um modelo real de wallbox. Localize no manual: proteção de sobrecorrente recomendada, tipo e sensibilidade do DR, existência de RDC-DD 6 mA, esquema de aterramento permitido e informações de proteção contra surtos. Monte um diagrama: Rede → DPS → Disjuntor/RCBO → DR/RDC-DD → SAVE → Veículo.",
    "norms": [
      "ABNT NBR 17019",
      "ABNT NBR 5410",
      "IEC 61851-1",
      "IEC 62955 — RDC-DD para Modo 3",
      "IEC 61643-11 — DPS em baixa tensão",
      "ABNT NBR 5419 quando aplicável ao risco de descargas atmosféricas"
    ],
    "supportImage": "ficha-tecnica-carregador.webp",
    "supportCaption": "Leitura da ficha técnica: proteção interna e requisitos externos precisam ser conferidos no modelo selecionado.",
    "references": [
      [
        "ABB Terra AC — manual de instalação",
        "https://new.abb.com/docs/librariesprovider53/ep/terra-ac-installation-manual-v001.pdf?sfvrsn=16d26d17_2"
      ],
      [
        "ABB Terra AC — especificação técnica",
        "https://library.e.abb.com/public/146478cbc88248268547560f47b47c8d/9AKK108467A1774_rev%20G2_Terra_AC_wallbox_Brochure.pdf"
      ],
      [
        "Schneider — EVlink Home RDC-DD 6 mA",
        "https://www.se.com/pt/pt/faqs/FAQ000234506/"
      ],
      [
        "IEC 62955 — RDC-DD",
        "https://webstore.iec.ch/en/publication/32963"
      ],
      [
        "IEC 61643-11:2025 — DPS",
        "https://webstore.iec.ch/en/publication/65314"
      ],
      [
        "Schneider — DPS Tipo 1/1+2",
        "https://www.se.com/br/pt/product-range/61706-dps-classe-1-e-classe-2-acti9/"
      ]
    ],
    "quiz": [
      [
        "Qual é a função do RDC-DD em um SAVE Modo 3?",
        "Detectar corrente residual contínua associada à recarga",
        [
          "Substituir o disjuntor geral",
          "Detectar corrente residual contínua associada à recarga",
          "Elevar a tensão do veículo",
          "Medir somente energia ativa"
        ]
      ],
      [
        "Quando um fabricante comprova RDC-DD 6 mA integrado e especifica RCD Tipo A a montante, o projetista deve:",
        "Seguir a combinação indicada pelo fabricante e pelas normas aplicáveis",
        [
          "Instalar sempre Tipo AC",
          "Ignorar o manual",
          "Seguir a combinação indicada pelo fabricante e pelas normas aplicáveis",
          "Retirar o DR"
        ]
      ],
      [
        "Se a proteção CC integrada do carregador é desconhecida, a conduta correta é:",
        "Consultar o manual e avaliar a solução exigida antes de definir o tipo de DR",
        [
          "Assumir Tipo A automaticamente",
          "Usar Tipo AC sempre",
          "Consultar o manual e avaliar a solução exigida antes de definir o tipo de DR",
          "Instalar qualquer DR disponível"
        ]
      ],
      [
        "Qual parâmetro do DPS representa o nível de proteção de tensão?",
        "Up",
        [
          "Iimp",
          "Up",
          "In apenas",
          "FP"
        ]
      ],
      [
        "O DPS Tipo 3 deve ser entendido como:",
        "Proteção complementar próxima à carga sensível",
        [
          "Substituto universal do Tipo 1 e Tipo 2",
          "Proteção complementar próxima à carga sensível",
          "Dispositivo de corrente residual",
          "Disjuntor de sobrecorrente"
        ]
      ]
    ],
    "simulatorType": "protection",
    "technicalSections": [
      {
        "title": "DR — comparação técnica",
        "html": "<div class=\"tech-table-wrap\"><table class=\"tech-table\"><thead><tr><th>Tipo</th><th>O que detecta</th><th>Uso didático no contexto SAVE</th></tr></thead><tbody><tr><td>AC</td><td>CA senoidal</td><td>Não adotar como solução automática para carregadores com eletrônica de potência.</td></tr><tr><td>A</td><td>CA + CC pulsante</td><td>Pode compor a solução quando o carregador possui detecção CC apropriada e o fabricante/norma permitem.</td></tr><tr><td>F</td><td>Formas adicionais associadas a certas cargas eletrônicas</td><td>Não substitui automaticamente Tipo B ou solução definida pelo fabricante.</td></tr><tr><td>B</td><td>Inclui CC lisa</td><td>Avaliar quando não há proteção CC adequada integrada ou quando exigido pelo projeto/fabricante.</td></tr></tbody></table></div>"
      },
      {
        "title": "DPS — o que o aluno deve dimensionar",
        "html": "<div class=\"tech-table-wrap\"><table class=\"tech-table\"><thead><tr><th>Parâmetro</th><th>Significado</th><th>O que verificar</th></tr></thead><tbody><tr><td>Uc</td><td>Tensão máxima de operação contínua</td><td>Compatível com tensão e esquema de aterramento.</td></tr><tr><td>Up</td><td>Nível de proteção</td><td>Deve ser adequado à suportabilidade dos equipamentos protegidos.</td></tr><tr><td>In</td><td>Corrente nominal de descarga</td><td>Capacidade repetitiva do DPS Tipo 2.</td></tr><tr><td>Imax</td><td>Corrente máxima de descarga</td><td>Capacidade máxima em ensaio 8/20 µs.</td></tr><tr><td>Iimp</td><td>Corrente de impulso</td><td>Parâmetro característico de DPS Tipo 1, ensaio 10/350 µs.</td></tr></tbody></table></div>"
      },
      {
        "title": "Regra de projeto — não simplificar",
        "html": "<div class=\"warning-box\"><b>Não use a regra “carregador = DR Tipo A” sem ler o manual.</b><br>Primeiro verifique se existe RDC-DD/monitoramento CC de 6 mA e o que o fabricante exige a montante. Se a informação for desconhecida, interrompa a especificação e consulte a documentação técnica.</div>"
      }
    ]
  },
  {
    "id": 14,
    "num": "14",
    "title": "Aterramento, PE e Equipotencialização",
    "description": "Conceitos indispensáveis para segurança e confiabilidade da recarga.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Compreender função do PE e da equipotencialização.",
      "Relacionar aterramento à proteção contra choque.",
      "Evitar a visão simplista de que resistência de aterramento, isoladamente, resolve o problema.",
      "Integrar o SAVE ao sistema de proteção existente."
    ],
    "theory": "<p>A segurança em recarga veicular depende da integração correta entre <b>condutor de proteção (PE)</b>, sistema de aterramento, equipotencialização e dispositivos de proteção. O SAVE não pode ser tratado como elemento isolado. Ele faz parte da instalação elétrica e, portanto, herda seus critérios de segurança e continuidade de proteção.</p>\n <p>Medir resistência de aterramento é importante, mas insuficiente para, sozinho, atestar a segurança do sistema. O projetista precisa verificar continuidade do PE, integração com barramentos principais, equipotencialização e correta coordenação com dispositivos de proteção.</p>\n <p>Ambientes externos, áreas abertas e estacionamentos podem impor atenção extra à proteção mecânica, umidade e manutenção preventiva dos pontos de conexão.</p>",
    "highlights": [
      "PE, aterramento e equipotencialização trabalham juntos.",
      "Resistência de aterramento sozinha não encerra a análise.",
      "SAVE deve ser integrado ao sistema de proteção da edificação.",
      "Continuidade do PE é um requisito essencial."
    ],
    "formula": "Segurança contra choque = aterramento + PE + equipotencialização + proteção + verificação",
    "example": "Um bom resultado de resistência de aterramento não compensa uma conexão deficiente do PE ou a ausência de equipotencialização apropriada.",
    "activity": "Desenhe o caminho do PE desde o carregador até o barramento principal de equipotencialização e indique pontos de verificação.",
    "norms": [
      "ABNT NBR 5410",
      "ABNT NBR 5419 (quando aplicável)",
      "ABNT NBR 17019"
    ],
    "supportImage": "save-ferramenta.png",
    "supportCaption": "Segurança elétrica precisa ser tratada como sistema integrado.",
    "references": [
      [
        "ABNT Catálogo",
        "https://www.abntcatalogo.com.br/"
      ]
    ],
    "quiz": [
      [
        "A proteção contra choque em SAVE depende da coordenação entre:",
        "PE, aterramento, equipotencialização e dispositivos de proteção",
        [
          "Somente a pintura do poste",
          "PE, aterramento, equipotencialização e dispositivos de proteção",
          "Apenas a resistência de aterramento",
          "Somente o DR"
        ]
      ],
      [
        "Medir apenas a resistência de aterramento é:",
        "Importante, porém insuficiente sozinho",
        [
          "Totalmente suficiente em qualquer situação",
          "Importante, porém insuficiente sozinho",
          "Desnecessário",
          "Mais importante que o PE"
        ]
      ],
      [
        "O carregador deve ser tratado como:",
        "Parte integrante da instalação elétrica",
        [
          "Equipamento isolado sem relação com a instalação",
          "Parte integrante da instalação elétrica",
          "Apenas acessório do veículo",
          "Elemento puramente mecânico"
        ]
      ],
      [
        "A continuidade do PE é:",
        "Essencial",
        [
          "Opcional",
          "Essencial",
          "Apenas recomendável esteticamente",
          "Substituível por software"
        ]
      ],
      [
        "Em áreas externas, o projetista deve observar:",
        "Umidade, proteção mecânica e manutenção",
        [
          "Somente o piso",
          "Umidade, proteção mecânica e manutenção",
          "Apenas o acesso do síndico",
          "Somente a cor do wallbox"
        ]
      ]
    ]
  },
  {
    "id": 15,
    "num": "15",
    "title": "Curto-circuito, Icc e Capacidade de Interrupção",
    "description": "Análise de Icc presumida e compatibilidade dos dispositivos de proteção.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Entender o conceito de Icc presumida.",
      "Relacionar impedância do circuito e corrente de curto-circuito.",
      "Verificar capacidade de interrupção do dispositivo.",
      "Registrar o ponto analisado e o raciocínio adotado."
    ],
    "theory": "<p>A corrente de curto-circuito presumida em um ponto da instalação depende da tensão e da impedância equivalente do sistema até esse ponto. Quanto menor a impedância, maior tende a ser a corrente de curto-circuito. Esse conceito é vital para selecionar dispositivos com capacidade de interrupção compatível.</p>\n <p>Em circuitos de recarga, o projetista precisa verificar se o disjuntor escolhido suporta a Icc presumida no ponto onde será instalado. Dispositivos subdimensionados em capacidade de interrupção podem representar risco técnico grave.</p>\n <p>O memorial deve indicar o ponto analisado, o método simplificado ou detalhado adotado e o valor de capacidade de interrupção exigido.</p><p>Em sistemas trifásicos, uma aproximação para curto trifásico pode usar <b>Icc ≈ VLL/(√3×Zeq)</b>. Em análise fase-neutro ou monofásica, a tensão aplicada ao circuito equivalente deve ser escolhida coerentemente com o tipo de falta. O valor final de Icn/Icu do dispositivo precisa atender ao critério normativo e ao equipamento selecionado.</p>",
    "highlights": [
      "Icc depende fortemente da impedância.",
      "Capacidade de interrupção deve ser compatível com o ponto de instalação.",
      "Quanto mais próximo e mais “forte” o sistema, maior tende a ser a Icc.",
      "Raciocínio precisa ser documentado."
    ],
    "formula": "Icc ≈ V / Z",
    "example": "Se a impedância equivalente diminui, a Icc aumenta. Por isso, quadros próximos à origem costumam exigir maior atenção na capacidade de interrupção.",
    "activity": "Faça um exemplo simplificado de cálculo de Icc usando tensão conhecida e impedância estimada.",
    "norms": [
      "ABNT NBR 5410"
    ],
    "supportImage": "save-ferramenta.png",
    "supportCaption": "Capacidade de interrupção e análise de curto devem constar no raciocínio técnico.",
    "references": [
      [
        "ABNT Catálogo",
        "https://www.abntcatalogo.com.br/"
      ]
    ],
    "quiz": [
      [
        "A Icc presumida tende a aumentar quando:",
        "A impedância diminui",
        [
          "A impedância aumenta",
          "A impedância diminui",
          "A tensão zera",
          "O carregador fica branco"
        ]
      ],
      [
        "O disjuntor deve possuir capacidade de interrupção:",
        "Compatível com a Icc do ponto",
        [
          "Definida apenas pela marca",
          "Compatível com a Icc do ponto",
          "Sempre igual para qualquer ponto",
          "Inferior à Icc"
        ]
      ],
      [
        "Em quadros mais próximos da origem, a Icc tende a ser:",
        "Maior",
        [
          "Menor",
          "Igual em todos os pontos",
          "Maior",
          "Irrelevante"
        ]
      ],
      [
        "O cálculo de Icc deve indicar:",
        "Ponto analisado e critério adotado",
        [
          "Somente o CPF do cliente",
          "Ponto analisado e critério adotado",
          "A cor do quadro",
          "Somente a foto do disjuntor"
        ]
      ],
      [
        "A relação simplificada Icc ≈ V/Z mostra que a corrente depende de:",
        "Tensão e impedância",
        [
          "Somente corrente nominal",
          "Tensão e impedância",
          "Apenas da marca do transformador",
          "Somente do DR"
        ]
      ]
    ],
    "simulatorType": "shortcircuit",
    "technicalSections": [
      {
        "title": "Do cálculo à escolha do disjuntor",
        "html": "<ol><li>Defina o ponto da instalação.</li><li>Obtenha ou estime a impedância equivalente da fonte + transformador + cabos.</li><li>Calcule Icc para o tipo de falta analisado.</li><li>Selecione dispositivo com capacidade de interrupção compatível.</li><li>Verifique coordenação/seletividade quando requerida.</li></ol><p class=\"tech-note\">O cálculo simplificado não substitui estudo de curto-circuito detalhado em instalações de maior porte.</p>"
      }
    ]
  },
  {
    "id": 16,
    "num": "16",
    "title": "Transformador, Alimentadores e Balanceamento de Fases",
    "description": "Capacidade da infraestrutura principal e distribuição entre fases.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Avaliar capacidade do transformador e dos alimentadores.",
      "Entender o impacto do balanceamento de fases.",
      "Distribuir carregadores monofásicos de forma técnica.",
      "Relacionar infraestrutura principal à escalabilidade do sistema."
    ],
    "theory": "<p>Em empreendimentos com muitos carregadores, a análise não pode parar nos circuitos terminais. O transformador, os alimentadores principais e os quadros de distribuição podem se tornar gargalos. O projetista precisa avaliar limite térmico, reserva de capacidade e necessidade de expansão da infraestrutura.</p>\n <p>Quando os carregadores são monofásicos, o <b>balanceamento entre fases</b> é particularmente importante. Distribuições inadequadas aumentam o desequilíbrio, pioram o uso da infraestrutura e podem gerar sobrecarga localizada.</p>\n <p>Uma arquitetura bem distribuída facilita expansão futura e melhora a qualidade da solução técnica apresentada ao cliente.</p><p>Para avaliar carregamento, transforme potência ativa em aparente quando necessário: <b>S=P/FP</b>. Compare a demanda aparente total com a potência nominal do transformador e com o limite operacional adotado. Para carregadores monofásicos, calcule a corrente de cada grupo por fase e acompanhe o desequilíbrio.</p>",
    "highlights": [
      "Infraestrutura principal precisa ser checada.",
      "Balanceamento entre fases melhora o uso da capacidade instalada.",
      "Planejamento de expansão deve ser pensado desde a primeira etapa.",
      "Carregadores monofásicos exigem atenção especial à distribuição entre R, S e T."
    ],
    "formula": "S ≈ P / FP",
    "example": "Doze carregadores monofásicos podem ser distribuídos 4-4-4 entre as fases como ponto de partida, desde que o restante das cargas do sistema também seja analisado.",
    "activity": "Monte uma distribuição entre fases para 12 carregadores monofásicos e justifique seu critério.",
    "norms": [
      "ABNT NBR 5410",
      "ABNT NBR 17019"
    ],
    "supportImage": "desafio-projeto.png",
    "supportCaption": "A análise do conjunto passa pelo alimentador e pelo sistema principal.",
    "references": [
      [
        "ABNT Catálogo",
        "https://www.abntcatalogo.com.br/"
      ]
    ],
    "quiz": [
      [
        "Ao instalar vários carregadores, deve-se avaliar:",
        "Transformador, alimentadores e quadros",
        [
          "Somente a tomada do veículo",
          "Transformador, alimentadores e quadros",
          "Apenas o app de recarga",
          "Somente a vaga do síndico"
        ]
      ],
      [
        "O balanceamento de fases é especialmente relevante quando os carregadores são:",
        "Monofásicos",
        [
          "Azuis",
          "Monofásicos",
          "Somente DC",
          "Com conector Type 2"
        ]
      ],
      [
        "Distribuição equilibrada entre fases ajuda a:",
        "Reduzir desequilíbrio",
        [
          "Aumentar desequilíbrio",
          "Reduzir desequilíbrio",
          "Eliminar toda necessidade de cálculo",
          "Substituir o transformador"
        ]
      ],
      [
        "Planejar expansão futura é importante porque:",
        "A infraestrutura pode crescer gradualmente com menor retrabalho",
        [
          "Nunca haverá expansão",
          "A infraestrutura pode crescer gradualmente com menor retrabalho",
          "A norma proíbe ampliação",
          "Só importa para carros importados"
        ]
      ],
      [
        "A análise do sistema principal deve considerar:",
        "Limites térmicos e reserva de capacidade",
        [
          "Somente pintura do painel",
          "Limites térmicos e reserva de capacidade",
          "Apenas o comprimento do estacionamento",
          "Somente a conta de água"
        ]
      ]
    ],
    "simulatorType": "transformer",
    "technicalSections": [
      {
        "title": "Indicadores úteis",
        "html": "<div class=\"calc-steps\"><b>Carregamento do transformador</b><br>%Carga = 100 × S<sub>total</sub>/S<sub>trafo</sub><br><br><b>Margem aparente</b><br>S<sub>margem</sub> = S<sub>trafo</sub> − S<sub>total</sub><br><br><b>Balanceamento</b><br>Distribua carregadores monofásicos considerando também as demais cargas já presentes em R/S/T.</div>"
      }
    ]
  },
  {
    "id": 17,
    "num": "17",
    "title": "Projeto, Checklist e NDU 042 Energisa",
    "description": "Documentação, pré-validação e pontos de atenção para protocolo.",
    "image": "multiplos-carregadores.webp",
    "objectives": [
      "Conhecer a função da NDU 042 na área Energisa.",
      "Organizar documentação do projeto.",
      "Distinguir pré-validação interna de aprovação formal da concessionária.",
      "Montar checklist técnico antes do protocolo."
    ],
    "theory": "<p>A documentação é parte inseparável do projeto. Para a área da Energisa, a <b>NDU 042</b> estabelece diretrizes e critérios mínimos para fornecimento de energia a unidades com Sistemas de Alimentação de Veículos Elétricos. O documento revisto na versão 2.0 consolida referências nacionais e internacionais e precisa ser sempre verificado em sua versão vigente antes do protocolo.</p>\n <p>É importante adotar a expressão <b>pré-validação</b> na plataforma e no curso. A ferramenta pode apoiar o profissional a conferir checklist, diagramas, memorial e dados do equipamento, mas a aprovação formal continua pertencendo à distribuidora. Isso protege o curso e reforça a responsabilidade técnica do projetista.</p>\n <p>Um pacote técnico maduro costuma incluir: identificação do empreendimento, levantamento, memória de cálculo, curva de carga, diagrama unifilar, especificação dos equipamentos, ART/TRT quando aplicável e checklist final de conformidade.</p><p>A NDU 042 também referencia outras normas da própria Energisa, como NDU-001, NDU-002, NDU-003 e NDU-034 conforme o tipo de fornecimento e a situação do empreendimento. Portanto, o checklist deve identificar se o caso é baixa tensão individual, agrupamento/múltiplas unidades ou atendimento em média tensão.</p>",
    "highlights": [
      "NDU 042 é referência específica da distribuidora.",
      "Versão vigente da norma deve ser conferida antes do protocolo.",
      "Pré-validação não é aprovação da concessionária.",
      "Checklist documental reduz risco de pendências."
    ],
    "formula": "Pré-validação interna ≠ aprovação formal da distribuidora",
    "example": "A plataforma pode apontar ausência de diagrama ou informação do carregador antes do envio do projeto, mas não pode afirmar aprovação pela distribuidora.",
    "activity": "Monte o índice completo de um dossiê técnico para protocolo de um condomínio com vários carregadores.",
    "norms": [
      "NDU 042 Energisa (versão vigente)",
      "ABNT NBR 17019",
      "ABNT NBR 5410",
      "REN ANEEL 1000/2021 (contexto regulatório)"
    ],
    "supportImage": "multiplos-carregadores.webp",
    "supportCaption": "Checklist inicial e resultado esperado da análise de múltiplos carregadores.",
    "references": [
      [
        "NDU 042 Energisa",
        "https://www.energisa.com.br/sites/energisa/files/media/documents/2025-11/NDU%20042%20-%20FORNECIMENTO%20DE%20ENERGIA%20EL%C3%89TRICA%20PARA%20SISTEMAS%20DE%20ALIMENTA%C3%87%C3%83O%20DE%20VE%C3%8DCULOS%20EL%C3%89TRICOS_0.pdf"
      ],
      [
        "NDU 042 v2.0 — Energisa",
        "https://www.energisa.com.br/sites/energisa/files/media/documents/2025-11/NDU%20042%20-%20FORNECIMENTO%20DE%20ENERGIA%20EL%C3%89TRICA%20PARA%20SISTEMAS%20DE%20ALIMENTA%C3%87%C3%83O%20DE%20VE%C3%8DCULOS%20EL%C3%89TRICOS_0.pdf"
      ]
    ],
    "quiz": [
      [
        "A NDU 042 é importante porque:",
        "Traz diretrizes para fornecimento de energia a unidades com SAVE na área Energisa",
        [
          "Define a cor das vagas",
          "Traz diretrizes para fornecimento de energia a unidades com SAVE na área Energisa",
          "Substitui todas as normas ABNT",
          "É apenas um folder comercial"
        ]
      ],
      [
        "A plataforma deve usar a expressão:",
        "Pré-validação",
        [
          "Aprovação garantida",
          "Pré-validação",
          "Homologação automática",
          "Dispensa normativa"
        ]
      ],
      [
        "A aprovação formal do projeto compete a:",
        "Distribuidora",
        [
          "Curso",
          "Aplicativo",
          "Distribuidora",
          "Fabricante do wallbox"
        ]
      ],
      [
        "Antes do protocolo, o projetista deve conferir:",
        "Checklist documental e memorial técnico",
        [
          "Somente a foto do estacionamento",
          "Checklist documental e memorial técnico",
          "Apenas o logo da empresa",
          "Somente o valor da mensalidade"
        ]
      ],
      [
        "A versão da NDU 042 a ser considerada deve ser:",
        "A vigente na data do projeto/protocolo",
        [
          "Qualquer uma encontrada na internet",
          "A vigente na data do projeto/protocolo",
          "Sempre a primeira versão",
          "Uma versão resumida sem validade"
        ]
      ]
    ],
    "simulatorType": "energisa",
    "technicalSections": [
      {
        "title": "Pré-validação antes do protocolo",
        "html": "<div class=\"check-matrix\"><div>☐ Dados da unidade consumidora e responsável técnico</div><div>☐ Potência dos SAVE e fichas técnicas</div><div>☐ Curva/demanda e estratégia de operação</div><div>☐ Diagrama unifilar</div><div>☐ Cabos, proteções, DR/RDC-DD e DPS</div><div>☐ Aterramento/equipotencialização</div><div>☐ Transformador/entrada quando aplicável</div><div>☐ ART/TRT e documentos exigidos</div><div>☐ Versão vigente da NDU 042 e normas correlatas</div></div>"
      }
    ]
  },
  {
    "id": 18,
    "num": "18",
    "title": "Estudo de Caso — Condomínio com Vários Carregadores",
    "description": "Aplicação integrada dos conceitos em um cenário realista.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Integrar todas as etapas do curso em um caso aplicado.",
      "Comparar alternativas de especificação.",
      "Defender tecnicamente cada decisão adotada.",
      "Preparar o aluno para o projeto final."
    ],
    "theory": "<p>No estudo de caso, o aluno deixa de ver os temas como assuntos isolados e passa a trabalhar o projeto como sistema. A edificação possui carga existente, curva de carga, transformador, alimentadores, estratégia operacional e uma frota com comportamento definido. Cabe ao projetista transformar esse conjunto em um projeto coerente.</p>\n <p>O cenário proposto — por exemplo, um condomínio com múltiplos carregadores — exige avaliar potência instalada, simultaneidade, DLM, dimensionamento de circuitos, proteção, aterramento e documentação. Essa abordagem desenvolve o raciocínio de engenharia que o mercado espera do profissional.</p>\n <p>O produto final deve ser defensável: cada decisão precisa estar conectada a dados, premissas e normas.</p>",
    "highlights": [
      "Projeto é integração, não soma de tópicos.",
      "Cada escolha deve ser justificada.",
      "Cenários comparativos ajudam na defesa técnica.",
      "O caso aplicado prepara a entrega final do curso."
    ],
    "formula": "Projeto = dados + cálculo + norma + documentação + verificação",
    "example": "Dois cenários podem ser comparados: 20 carregadores sem DLM e 20 carregadores com DLM a 60 kW. A escolha depende da instalação e da estratégia operacional.",
    "activity": "Entregue a versão 1 do estudo de caso com memorial de cálculo, diagrama e checklist.",
    "norms": [
      "ABNT NBR 17019",
      "ABNT NBR 5410",
      "NDU 042 Energisa"
    ],
    "supportImage": "desafio-projeto.png",
    "supportCaption": "Aplicação integrada da formação em um projeto realista.",
    "references": [
      [
        "NDU 042 Energisa",
        "https://www.energisa.com.br/sites/energisa/files/media/documents/2025-11/NDU%20042%20-%20FORNECIMENTO%20DE%20ENERGIA%20EL%C3%89TRICA%20PARA%20SISTEMAS%20DE%20ALIMENTA%C3%87%C3%83O%20DE%20VE%C3%8DCULOS%20EL%C3%89TRICOS_0.pdf"
      ]
    ],
    "quiz": [
      [
        "No estudo de caso, os temas do curso aparecem:",
        "De forma integrada",
        [
          "De forma isolada sem relação",
          "De forma integrada",
          "Sem necessidade de cálculo",
          "Apenas como teoria"
        ]
      ],
      [
        "Uma decisão de projeto deve ser:",
        "Justificada por dados, normas e premissas",
        [
          "Tomada ao acaso",
          "Justificada por dados, normas e premissas",
          "Baseada só em marketing",
          "Sem memorial"
        ]
      ],
      [
        "Comparar cenários com e sem DLM ajuda a:",
        "Defender tecnicamente a solução",
        [
          "Apenas aumentar o número de slides",
          "Defender tecnicamente a solução",
          "Eliminar a necessidade de curva de carga",
          "Substituir a vistoria"
        ]
      ],
      [
        "O estudo de caso prepara o aluno para:",
        "Projeto final e atuação profissional",
        [
          "Apenas responder prova teórica",
          "Projeto final e atuação profissional",
          "Mudar a marca do veículo",
          "Ignorar normas"
        ]
      ],
      [
        "O memorial do caso aplicado deve registrar:",
        "Premissas, cálculos e verificações",
        [
          "Somente fotos bonitas",
          "Premissas, cálculos e verificações",
          "Apenas o nome do condomínio",
          "Só o valor do carregador"
        ]
      ]
    ]
  },
  {
    "id": 19,
    "num": "19",
    "title": "Leitura de Ficha Técnica e Especificação de Equipamentos",
    "description": "Como interpretar fichas técnicas e transformar dados de fabricante em decisão de projeto.",
    "image": "ficha-tecnica-carregador.webp",
    "objectives": [
      "Interpretar fichas técnicas de fabricantes.",
      "Transformar dados de catálogo em critérios de especificação.",
      "Reconhecer erros comuns na leitura de dados.",
      "Relacionar ficha técnica a conector, proteção, ambiente e conectividade."
    ],
    "theory": "<p>A ficha técnica é um dos documentos mais importantes do projeto. Nela o profissional encontra informações como potência nominal, tensão de alimentação, corrente máxima, modo de recarga, tipo de conector, grau de proteção IP, resistência mecânica IK, conectividade, medição de energia e eventuais requisitos de proteção.</p>\n <p>O erro comum é escolher o equipamento apenas pela potência. A boa leitura da ficha técnica conecta os dados do fabricante às condições reais de projeto: compatibilidade com o veículo, compatibilidade com a instalação, necessidade de software de gestão, exigência ambiental e requisitos de medição.</p>\n <p>Ao dominar esse processo, o aluno deixa de ser mero operador de catálogo e passa a atuar como especificador técnico.</p>",
    "highlights": [
      "Ficha técnica é documento de projeto.",
      "Potência nominal sozinha não basta.",
      "IP, IK, conectividade e proteção influenciam a especificação.",
      "Fabricante, norma e aplicação precisam conversar."
    ],
    "formula": "Especificação adequada = dados do fabricante + normas + realidade da instalação",
    "example": "Dois carregadores de mesma potência podem ser inadequados em contextos distintos se um não oferecer IP/IK suficiente ou se não possuir comunicação necessária para a gestão de carga.",
    "activity": "Escolha uma ficha técnica real de carregador AC e extraia: potência, tensão, corrente, conector, IP, IK, conectividade, medição e requisitos de proteção.",
    "norms": [
      "IEC 61851",
      "IEC 62196",
      "ABNT NBR 17019"
    ],
    "supportImage": "ficha-tecnica-carregador.webp",
    "supportCaption": "Mapa visual de como interpretar a ficha técnica de um carregador VE.",
    "references": [
      [
        "ABB Terra AC Wallbox",
        "https://new.abb.com/ev-charging/pt/terra-ac-wallbox"
      ],
      [
        "Schneider EVlink Home Smart - Technical data",
        "https://productinfo.se.com/wiser_home/evlink-home-smart_device-user-guide_wiser_home/Portuguese/EVlink%20Home%20Smart_Wiser%20Home_Device%20user%20guide_pt_DD00573198.xml/%24/Technicaldata_WSE_EVlinkREF_pt_0001084361"
      ],
      [
        "WEG WEMOB Wall",
        "https://static.weg.net/medias/downloadcenter/h78/h95/WEG_WEMOB_50158988_EN.pdf"
      ]
    ],
    "quiz": [
      [
        "Qual informação a ficha técnica normalmente apresenta?",
        "Potência, tensão, corrente e conector",
        [
          "Somente o preço",
          "Potência, tensão, corrente e conector",
          "Apenas a logomarca",
          "Somente o peso do veículo"
        ]
      ],
      [
        "Escolher um carregador apenas pela potência é um erro porque:",
        "Outros critérios técnicos também influenciam a adequação",
        [
          "Potência nunca importa",
          "Outros critérios técnicos também influenciam a adequação",
          "Conector não existe",
          "IP e IK não têm função"
        ]
      ],
      [
        "O grau IP informa:",
        "Proteção contra poeira e água",
        [
          "Nível de bateria do carro",
          "Proteção contra poeira e água",
          "Tipo de software",
          "Fator de potência"
        ]
      ],
      [
        "Recursos como OCPP, Wi-Fi, Ethernet e RFID estão ligados a:",
        "Conectividade e gestão",
        [
          "Aterramento apenas",
          "Conectividade e gestão",
          "Tipo de pintura",
          "Somente aterramento"
        ]
      ],
      [
        "A leitura da ficha técnica conecta os dados do fabricante a:",
        "Decisões reais de projeto",
        [
          "Somente propaganda comercial",
          "Decisões reais de projeto",
          "Apenas decoração do estacionamento",
          "Somente certificado do curso"
        ]
      ]
    ]
  },
  {
    "id": 20,
    "num": "20",
    "title": "Projeto Final, Comissionamento e Entrega Técnica",
    "description": "Estrutura da entrega profissional e liberação do SAVE Engenharia.",
    "image": "conclusao.png",
    "objectives": [
      "Concluir o projeto final da formação.",
      "Aplicar checklist de comissionamento.",
      "Organizar a entrega profissional ao cliente.",
      "Compreender o desbloqueio do SAVE Engenharia como benefício de conclusão."
    ],
    "theory": "<p>A etapa final consolida a jornada do aluno. O projeto deve reunir identificação do empreendimento, levantamento, memória de cálculo, curva de carga, cenários de demanda, DLM quando aplicável, dimensionamento dos circuitos, proteções, diagrama unifilar, lista de materiais e checklist de comissionamento.</p>\n <p>O comissionamento é a ponte entre o projeto e a realidade da obra. O profissional precisa verificar montagem, continuidade do PE, identificação dos circuitos, parametrização dos equipamentos, conferência dos dispositivos de proteção e testes funcionais compatíveis com o escopo da instalação.</p>\n <p>Com a conclusão das microaulas e do projeto final, o aluno libera o acesso ao SAVE Engenharia como ferramenta profissional de apoio, mantendo a filosofia do curso: fundamento primeiro, software depois.</p>",
    "highlights": [
      "Projeto final é prova de competência aplicada.",
      "Comissionamento e documentação fecham o ciclo.",
      "Checklist final reduz falhas de entrega.",
      "SAVE Engenharia é benefício de conclusão, não substituto do conhecimento."
    ],
    "formula": "Conclusão = 20 microaulas + projeto final + checklist",
    "example": "Uma entrega madura inclui memorial de cálculo, unifilar, lista de materiais, critérios adotados e registro de testes/comissionamento.",
    "activity": "Finalize seu projeto e marque no sistema cada item do checklist de entrega antes de confirmar a conclusão.",
    "norms": [
      "ABNT NBR 17019",
      "ABNT NBR 5410",
      "NR-10"
    ],
    "supportImage": "conclusao.png",
    "supportCaption": "Etapa final da formação: entrega técnica, comissionamento e benefício liberado.",
    "references": [
      [
        "NR-10 - Gov.br",
        "https://www.gov.br/"
      ],
      [
        "ABNT Catálogo",
        "https://www.abntcatalogo.com.br/"
      ]
    ],
    "quiz": [
      [
        "O projeto final deve integrar:",
        "Levantamento, cálculos, diagrama, proteção e checklist",
        [
          "Somente o certificado",
          "Levantamento, cálculos, diagrama, proteção e checklist",
          "Apenas a lista de materiais",
          "Somente a foto da vaga"
        ]
      ],
      [
        "O comissionamento serve para:",
        "Verificar a instalação e sua operação conforme o escopo",
        [
          "Somente imprimir relatório",
          "Verificar a instalação e sua operação conforme o escopo",
          "Substituir o projeto",
          "Dispensar a vistoria"
        ]
      ],
      [
        "O SAVE Engenharia é liberado após:",
        "Conclusão das aulas e do projeto final",
        [
          "Primeiro acesso ao curso",
          "Conclusão das aulas e do projeto final",
          "Somente o pagamento",
          "Apenas a aula 1"
        ]
      ],
      [
        "A filosofia pedagógica do curso é:",
        "Fundamento primeiro, software depois",
        [
          "Software primeiro e norma nunca",
          "Fundamento primeiro, software depois",
          "Apenas marketing do aplicativo",
          "Memorização sem prática"
        ]
      ],
      [
        "Checklist final é importante porque:",
        "Reduz falhas e organiza a entrega",
        [
          "Não tem valor técnico",
          "Reduz falhas e organiza a entrega",
          "Serve só para estética",
          "Substitui o memorial"
        ]
      ]
    ]
  }
];
