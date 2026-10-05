window.COURSE_LESSONS = [
  {
    "id": 1,
    "num": "01",
    "title": "Fundamentos da Mobilidade Elétrica",
    "description": "Conheça a arquitetura do veículo elétrico, potência, energia, bateria, SOC e os principais cenários de recarga.",
    "image": "capa-curso.png",
    "objectives": [
      "Diferenciar potência (kW) de energia (kWh).",
      "Compreender SOC, capacidade da bateria e eficiência de recarga.",
      "Reconhecer a arquitetura básica da recarga veicular."
    ],
    "theory": "A infraestrutura de recarga precisa ser projetada a partir de duas grandezas que não podem ser confundidas: <b>potência</b>, que indica a velocidade instantânea de transferência de energia, e <b>energia</b>, que representa a quantidade acumulada ao longo do tempo. O veículo, o carregador e a instalação elétrica possuem limites próprios, e o menor deles define a potência efetiva de recarga.",
    "formula": "E = P × t",
    "example": "Um carregador operando a 7,4 kW durante 5 h transfere, idealmente, E = 7,4 × 5 = 37 kWh.",
    "activity": "Escolha um veículo elétrico e registre: capacidade da bateria, potência máxima AC, potência máxima DC e tempo estimado de recarga.",
    "quiz": [
      [
        "Qual unidade representa energia elétrica acumulada?",
        "kWh",
        [
          "kW",
          "kWh",
          "A",
          "V"
        ]
      ],
      [
        "Se a potência aumenta, mantendo a mesma energia necessária, o tempo tende a:",
        "Diminuir",
        [
          "Aumentar",
          "Diminuir",
          "Ficar sempre igual",
          "Zerar"
        ]
      ]
    ]
  },
  {
    "id": 2,
    "num": "02",
    "title": "Tipos, Modos e Conectores de Recarga",
    "description": "Diferencie recarga AC e DC, modos de recarga, conectores e limites do carregador e do veículo.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Distinguir recarga AC e DC.",
      "Entender que carregador e veículo impõem limites de potência.",
      "Identificar modos e conectores como parte da especificação."
    ],
    "theory": "Na recarga AC, a conversão para corrente contínua ocorre normalmente no carregador embarcado do veículo. Na recarga DC, a conversão ocorre na própria estação. A seleção não deve considerar somente potência nominal: tensão, corrente, conector, comunicação, ambiente de instalação e compatibilidade do veículo também fazem parte da engenharia.",
    "formula": "P ≈ V × I × FP  (monofásico)   |   P ≈ √3 × V × I × FP  (trifásico)",
    "example": "Um SAVE monofásico de 7,4 kW em 220 V e FP próximo de 1 solicita corrente da ordem de 33,6 A.",
    "activity": "Monte uma tabela comparando um carregador AC de 7,4 kW, um de 22 kW e uma estação DC rápida.",
    "quiz": [
      [
        "Na recarga AC, quem normalmente converte AC em DC para a bateria?",
        "O carregador embarcado do veículo",
        [
          "O medidor da concessionária",
          "O carregador embarcado do veículo",
          "O DPS",
          "O disjuntor"
        ]
      ],
      [
        "Um carregador de 22 kW sempre entregará 22 kW a qualquer veículo?",
        "Não",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 3,
    "num": "03",
    "title": "Normas Aplicáveis ao Projeto SAVE",
    "description": "Organize a base normativa: NBR 17019, NBR 5410, IEC 61851, IEC 62196, NR-10 e requisitos da distribuidora.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Reconhecer a NBR 17019 como referência central para alimentação de VE.",
      "Relacionar NBR 5410, IEC 61851, IEC 62196 e NR-10 ao projeto.",
      "Entender que normas e versões da distribuidora precisam ser verificadas na data do protocolo."
    ],
    "theory": "Projetos SAVE devem ser tratados por um conjunto de referências. A ABNT NBR 17019 complementa os requisitos de instalações de baixa tensão para alimentação de veículos elétricos. A NBR 5410 continua fundamental para circuitos, condutores, proteção e instalação. As séries IEC 61851 e IEC 62196 tratam de sistemas de recarga e interfaces/conectores. Para a área Energisa, a NDU 042 é a referência específica de fornecimento para SAVE e deve ser conferida em sua versão vigente.",
    "formula": "Projeto conforme = requisitos do equipamento + instalação + norma + distribuidora + segurança",
    "example": "Um projeto tecnicamente correto pode exigir revisão antes do protocolo se a distribuidora publicar uma nova versão normativa.",
    "activity": "Crie uma folha de controle de normas com: documento, versão, data de vigência, aplicação e link oficial.",
    "quiz": [
      [
        "Qual norma brasileira é específica para instalações de alimentação de veículos elétricos?",
        "ABNT NBR 17019",
        [
          "ABNT NBR 5419",
          "ABNT NBR 17019",
          "NR-35",
          "NBR 9050"
        ]
      ],
      [
        "As normas da distribuidora devem ser verificadas quando?",
        "Na versão vigente para o projeto/protocolo",
        [
          "Somente uma vez na carreira",
          "Na versão vigente para o projeto/protocolo"
        ]
      ]
    ]
  },
  {
    "id": 4,
    "num": "04",
    "title": "Levantamento da Instalação Existente",
    "description": "Aprenda a coletar dados do QGBT, entrada, alimentadores, transformador, demanda e condições do local.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Executar um levantamento técnico orientado.",
      "Identificar dados indispensáveis da entrada e distribuição.",
      "Separar dado medido, documental e estimado."
    ],
    "theory": "Antes de dimensionar novos carregadores, o projetista precisa conhecer a instalação existente. O levantamento deve registrar sistema elétrico, tensão, esquema de aterramento, proteção geral, seções dos alimentadores, capacidade do transformador, demanda conhecida, espaço em quadros, trajetos e condições ambientais. Quanto melhor o levantamento, menor o risco de retrabalho.",
    "formula": "Capacidade disponível ≠ potência nominal da entrada sem análise da carga existente",
    "example": "Uma instalação com transformador de 225 kVA não possui automaticamente 225 kVA livres para novos carregadores.",
    "activity": "Faça um checklist de vistoria de campo com fotos, placas, disjuntores, condutores, medição e infraestrutura.",
    "quiz": [
      [
        "O valor nominal do transformador representa potência totalmente livre para novos carregadores?",
        "Não",
        [
          "Sim",
          "Não"
        ]
      ],
      [
        "Uma fotografia da placa do transformador é um dado útil de levantamento?",
        "Sim",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 5,
    "num": "05",
    "title": "Potência, Energia e Perfil de Recarga",
    "description": "Calcule potência, energia necessária, tempo de recarga, eficiência e disponibilidade do veículo.",
    "image": "capa-curso.png",
    "objectives": [
      "Calcular energia requerida entre dois níveis de SOC.",
      "Considerar eficiência da recarga.",
      "Relacionar janela de permanência e potência média necessária."
    ],
    "theory": "Para planejar a recarga, não basta conhecer a potência do wallbox. É necessário saber quanta energia o veículo precisa receber e quanto tempo ficará conectado. A energia solicitada pela rede é superior ao aumento de energia útil da bateria por causa das perdas do processo.",
    "formula": "E_bat = C_bat × (SOCf − SOCi)   |   E_rede = E_bat / η",
    "example": "Bateria de 60 kWh, de 30% para 90%: E_bat = 60 × 0,60 = 36 kWh. Com eficiência de 92%, E_rede ≈ 39,13 kWh.",
    "activity": "Calcule a energia de rede e a potência média necessária para um veículo permanecer conectado por 8 horas.",
    "quiz": [
      [
        "De 30% para 90%, a variação de SOC é:",
        "60%",
        [
          "30%",
          "60%",
          "90%",
          "120%"
        ]
      ],
      [
        "Com perdas, a energia retirada da rede tende a ser:",
        "Maior que a energia adicionada à bateria",
        [
          "Menor",
          "Maior que a energia adicionada à bateria",
          "Sempre igual"
        ]
      ]
    ]
  },
  {
    "id": 6,
    "num": "06",
    "title": "Demanda e Simultaneidade",
    "description": "Entenda potência instalada, demanda, simultaneidade e por que vários carregadores alteram o comportamento da instalação.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Distinguir potência instalada de demanda.",
      "Entender simultaneidade em múltiplos SAVE.",
      "Preparar dados para a curva de carga."
    ],
    "theory": "Quando vários carregadores são instalados, o problema deixa de ser apenas um circuito terminal e passa a envolver o comportamento agregado da instalação. A potência instalada é a soma nominal dos equipamentos; a demanda representa o que efetivamente pode ocorrer em determinado período, considerando o critério normativo e, quando aplicável, um sistema real de controle de recarga.",
    "formula": "P_instalada,SAVE = Σ P_i",
    "example": "20 carregadores de 7,4 kW resultam em 148 kW de potência instalada SAVE.",
    "activity": "Monte três cenários para 20 carregadores: sem gerenciamento, limite DLM de 80 kW e limite DLM de 60 kW.",
    "quiz": [
      [
        "20 carregadores de 7,4 kW totalizam:",
        "148 kW",
        [
          "74 kW",
          "100 kW",
          "148 kW",
          "220 kW"
        ]
      ],
      [
        "DLM é usado para:",
        "Gerenciar a potência total de recarga",
        [
          "Aumentar a tensão",
          "Gerenciar a potência total de recarga",
          "Substituir o aterramento"
        ]
      ]
    ]
  },
  {
    "id": 7,
    "num": "07",
    "title": "Curva de Carga",
    "description": "Construa e interprete a curva de carga da instalação e identifique horários críticos e capacidade disponível.",
    "image": "curva-carga.png",
    "objectives": [
      "Construir uma curva de carga de 24 h.",
      "Calcular potência disponível em cada horário.",
      "Identificar picos e janelas adequadas à recarga."
    ],
    "theory": "A curva de carga representa a potência da instalação ao longo do tempo. Ao sobrepor a carga existente, a carga dos veículos e o limite operacional, o projetista consegue enxergar horários críticos e oportunidades de recarga. A curva pode ser simulada ou medida, e essa origem deve constar no relatório.",
    "formula": "P_EV,disp(t) = P_limite − P_instalação(t)",
    "example": "Se o limite é 200 kW e às 18 h a instalação utiliza 170 kW, restam 30 kW para os SAVE naquele instante.",
    "activity": "Desenhe uma curva de 24 h com pelo menos seis pontos e destaque o horário de menor margem.",
    "quiz": [
      [
        "Se P_limite=200 kW e P_instalação=170 kW, a margem é:",
        "30 kW",
        [
          "370 kW",
          "30 kW",
          "170 kW",
          "200 kW"
        ]
      ],
      [
        "Curva simulada e curva medida devem ser identificadas de forma diferente no relatório?",
        "Sim",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 8,
    "num": "08",
    "title": "Curva Medida x Curva Simulada",
    "description": "Trabalhe com dados de analisadores, medidores e simulações e saiba documentar a origem dos dados.",
    "image": "curva-carga.png",
    "objectives": [
      "Distinguir medição real de estimativa.",
      "Organizar dados CSV/Excel de analisadores.",
      "Avaliar período de amostragem."
    ],
    "theory": "A curva medida é produzida a partir de dados reais da instalação. A curva simulada é construída com premissas e perfis de uso. Ambas são úteis, mas possuem níveis de evidência diferentes. O relatório deve registrar fonte, período, intervalo de amostragem e eventuais limitações.",
    "formula": "Pico medido = max[P(t)]",
    "example": "Um analisador registrando a cada 15 minutos por sete dias permite observar diferenças entre dias úteis e fim de semana.",
    "activity": "Crie um modelo de planilha com Data/Hora, kW, kVA, FP, tensão, corrente e origem do dado.",
    "quiz": [
      [
        "Qual curva possui evidência direta do comportamento observado?",
        "Curva medida",
        [
          "Curva simulada",
          "Curva medida"
        ]
      ]
    ]
  },
  {
    "id": 9,
    "num": "09",
    "title": "Dimensionamento da Demanda dos Carregadores",
    "description": "Calcule cenários de operação e compare recarga simultânea, escalonada e gerenciada.",
    "image": "curva-carga.png",
    "objectives": [
      "Comparar cenários de demanda.",
      "Estimar impacto de diferentes quantidades e potências.",
      "Preparar restrições para o DLM."
    ],
    "theory": "O projetista deve avaliar cenários coerentes com a forma de operação. Sem um controle efetivo, hipóteses arbitrárias de diversidade podem produzir subdimensionamento. Quando há gerenciamento real e documentado, a potência máxima do conjunto pode ser limitada conforme a estratégia definida.",
    "formula": "P_total(t)=P_base(t)+P_SAVE(t)",
    "example": "Com 150 kW de pico existente e 60 kW de SAVE gerenciado, o cenário combinado pode atingir 210 kW se os picos coincidirem.",
    "activity": "Compare três limites SAVE e indique qual mantém o pico total abaixo do limite operacional cadastrado.",
    "quiz": [
      [
        "O pico combinado depende da coincidência entre carga base e recarga?",
        "Sim",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 10,
    "num": "10",
    "title": "DLM — Gerenciamento Dinâmico de Carga",
    "description": "Entenda como limitar a potência total dos carregadores e distribuir energia entre os veículos.",
    "image": "curva-carga.png",
    "objectives": [
      "Entender DLM estático e dinâmico.",
      "Calcular potência disponível para os veículos.",
      "Definir prioridades de recarga."
    ],
    "theory": "No gerenciamento dinâmico, a potência disponível para recarga é atualizada a partir do consumo da instalação. O sistema pode dividir a energia de forma igualitária ou priorizar veículos por SOC, horário de saída, energia necessária ou criticidade operacional.",
    "formula": "P_SAVE,max(t)=P_limite−P_base(t)",
    "example": "Limite de 200 kW e base de 120 kW permitem até 80 kW de recarga naquele instante, antes das margens de projeto.",
    "activity": "Defina uma política DLM para dez veículos com prioridades diferentes.",
    "quiz": [
      [
        "Se a carga base aumenta, a potência disponível ao DLM tende a:",
        "Diminuir",
        [
          "Aumentar",
          "Diminuir",
          "Ficar sempre igual"
        ]
      ]
    ]
  },
  {
    "id": 11,
    "num": "11",
    "title": "Dimensionamento dos Circuitos SAVE",
    "description": "Dimensione corrente de projeto, condutores, PE, eletrodutos e condições de instalação.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Calcular corrente de projeto.",
      "Selecionar seção inicial de condutor.",
      "Entender fatores de correção."
    ],
    "theory": "O dimensionamento do circuito exige corrente de projeto, método de instalação, material e isolação do condutor, temperatura, agrupamento, número de condutores carregados, proteção e queda de tensão. A seção final não deve ser escolhida por uma única tabela isolada.",
    "formula": "I=P/(V×FP)   ou   I=P/(√3×V×FP)",
    "example": "Para 7,4 kW, 220 V, monofásico e FP=1: I≈33,64 A.",
    "activity": "Dimensione preliminarmente um circuito de 7,4 kW e registre todas as premissas.",
    "quiz": [
      [
        "Em sistema trifásico equilibrado, a expressão de potência envolve:",
        "√3",
        [
          "π",
          "√2",
          "√3",
          "2π"
        ]
      ]
    ]
  },
  {
    "id": 12,
    "num": "12",
    "title": "Queda de Tensão",
    "description": "Calcule queda de tensão e avalie distância, seção e impacto no desempenho da recarga.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Calcular queda de tensão.",
      "Relacionar seção, corrente e distância.",
      "Revisar seção quando necessário."
    ],
    "theory": "A queda de tensão aumenta com corrente e comprimento e diminui com maior seção do condutor. Em circuitos de recarga, trajetos longos podem alterar significativamente a seção econômica e técnica.",
    "formula": "ΔV ≈ 2×L×I×ρ/S (monofásico) | ΔV ≈ √3×L×I×ρ/S (trifásico)",
    "example": "Aumentar a seção do cabo reduz a queda de tensão para a mesma corrente e distância.",
    "activity": "Compare a queda de tensão de duas seções diferentes no mesmo circuito.",
    "quiz": [
      [
        "Aumentar a seção do condutor tende a:",
        "Reduzir a queda de tensão",
        [
          "Aumentar",
          "Reduzir a queda de tensão",
          "Não alterar"
        ]
      ]
    ]
  },
  {
    "id": 13,
    "num": "13",
    "title": "Proteções: Disjuntor, DR e DPS",
    "description": "Aplique proteção contra sobrecorrente, corrente residual e surtos conforme o equipamento e a instalação.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Selecionar proteção contra sobrecorrente.",
      "Entender proteção diferencial em SAVE.",
      "Aplicar DPS de forma coordenada."
    ],
    "theory": "A proteção precisa considerar o circuito e as características do SAVE. A seleção do DR não deve ser feita apenas pelo valor da corrente nominal: a possibilidade de componente residual contínua e as funções internas do carregador precisam ser verificadas no fabricante e na norma aplicável. O DPS deve ser coordenado com o sistema da instalação.",
    "formula": "Ib ≤ In ≤ Iz",
    "example": "O disjuntor deve proteger o condutor, mas também suportar a corrente de projeto sem disparos indevidos.",
    "activity": "Analise o manual de um wallbox e identifique requisitos de DR, disjuntor e DPS.",
    "quiz": [
      [
        "A proteção diferencial deve considerar as características internas do SAVE?",
        "Sim",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 14,
    "num": "14",
    "title": "Aterramento e Equipotencialização",
    "description": "Analise esquemas de aterramento, PE, equipotencialização e segurança do sistema de recarga.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Reconhecer a função do PE.",
      "Entender equipotencialização.",
      "Relacionar aterramento à atuação das proteções."
    ],
    "theory": "A segurança contra choque depende da coordenação entre esquema de aterramento, condutores de proteção, equipotencialização e dispositivos de proteção. O SAVE deve ser integrado corretamente ao sistema existente e não tratado como elemento isolado.",
    "formula": "Segurança = aterramento + PE + equipotencialização + proteção + verificação",
    "example": "Uma resistência de aterramento isoladamente não comprova toda a segurança do sistema.",
    "activity": "Desenhe o caminho do PE do carregador até o barramento principal de equipotencialização.",
    "quiz": [
      [
        "Somente medir resistência de aterramento é suficiente para validar toda a proteção contra choque?",
        "Não",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 15,
    "num": "15",
    "title": "Curto-circuito e Capacidade de Interrupção",
    "description": "Verifique corrente de curto-circuito presumida, Icn/Icu e coordenação básica dos dispositivos.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Entender corrente de curto-circuito presumida.",
      "Relacionar Icc e capacidade de interrupção.",
      "Documentar o ponto analisado."
    ],
    "theory": "O dispositivo de proteção precisa possuir capacidade de interrupção compatível com a corrente de curto-circuito presumida no ponto de instalação. A impedância do circuito influencia a Icc disponível.",
    "formula": "Icc ≈ V/Z",
    "example": "Quanto menor a impedância equivalente do ponto, maior tende a ser a corrente de curto-circuito.",
    "activity": "Calcule um exemplo simplificado de Icc a partir de tensão e impedância conhecidas.",
    "quiz": [
      [
        "Se a impedância diminui, a Icc tende a:",
        "Aumentar",
        [
          "Diminuir",
          "Aumentar",
          "Zerar"
        ]
      ]
    ]
  },
  {
    "id": 16,
    "num": "16",
    "title": "Transformador, Alimentadores e Balanceamento",
    "description": "Avalie capacidade do transformador, carregamento dos alimentadores e distribuição entre fases.",
    "image": "desafio-projeto.png",
    "objectives": [
      "Avaliar margem no transformador.",
      "Verificar alimentadores.",
      "Balancear cargas monofásicas."
    ],
    "theory": "A inserção de vários SAVE pode exigir avaliação do transformador e dos alimentadores principais. Em instalações trifásicas com carregadores monofásicos, a distribuição equilibrada entre fases reduz desequilíbrios e melhora o uso da infraestrutura.",
    "formula": "S≈P/FP",
    "example": "Doze carregadores monofásicos podem ser distribuídos 4-4-4 entre as fases quando as demais condições permitirem.",
    "activity": "Monte uma tabela R/S/T para 12 carregadores e calcule a corrente aproximada por fase.",
    "quiz": [
      [
        "Balancear carregadores monofásicos entre fases ajuda a:",
        "Reduzir desequilíbrio",
        [
          "Aumentar desequilíbrio",
          "Reduzir desequilíbrio",
          "Eliminar todas as harmônicas"
        ]
      ]
    ]
  },
  {
    "id": 17,
    "num": "17",
    "title": "Projeto para Energisa e Documentação",
    "description": "Organize requisitos da NDU 042, documentos técnicos, diagrama, memorial e pré-validação para protocolo.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Conhecer a finalidade da NDU 042.",
      "Organizar documentação de projeto.",
      "Executar pré-validação sem prometer aprovação."
    ],
    "theory": "Na área Energisa, a NDU 042 estabelece diretrizes para fornecimento de energia a unidades com SAVE. A versão vigente precisa ser conferida antes do protocolo. A ferramenta e o curso devem usar a expressão <b>pré-validação</b>: a aprovação formal pertence à distribuidora e o responsável técnico continua responsável pelo projeto.",
    "formula": "Pré-validação ≠ aprovação da concessionária",
    "example": "Um checklist interno pode apontar ausência de diagrama, ART/TRT ou dados do carregador antes do protocolo.",
    "activity": "Monte o índice do pacote técnico que seria entregue à distribuidora para um condomínio.",
    "quiz": [
      [
        "A ferramenta pode afirmar que um projeto está 'aprovado pela Energisa' antes da análise formal?",
        "Não",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 18,
    "num": "18",
    "title": "Estudo de Caso — Condomínio com Vários Carregadores",
    "description": "Desenvolva um projeto aplicado integrando curva de carga, DLM, circuitos, proteções e documentação.",
    "image": "capa-curso.png",
    "objectives": [
      "Integrar todas as etapas.",
      "Comparar alternativas.",
      "Produzir memorial e unifilar."
    ],
    "theory": "O estudo de caso consolida o curso: levantamento, curva, carregadores, demanda, DLM, circuitos, proteção, aterramento, transformador, balanceamento, documentação e justificativas. O foco é defender tecnicamente cada decisão.",
    "formula": "Projeto = dados + cálculo + norma + documentação + verificação",
    "example": "Caso-base: condomínio com 20 carregadores de 7,4 kW e limite operacional definido.",
    "activity": "Entregue a versão 1 do seu projeto aplicado, com memorial de cálculo e diagrama unifilar.",
    "quiz": [
      [
        "Um projeto completo deve registrar premissas e justificativas?",
        "Sim",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 19,
    "num": "19",
    "title": "SAVE Engenharia — Laboratório Digital",
    "description": "Utilize a ferramenta para conferir cálculos, simular cenários, organizar o projeto e gerar resultados.",
    "image": "save-ferramenta.png",
    "objectives": [
      "Usar o SAVE Engenharia como ferramenta de conferência.",
      "Simular curva e DLM.",
      "Interpretar alertas sem substituir julgamento técnico."
    ],
    "theory": "A ferramenta SAVE Engenharia funciona como laboratório digital e apoio profissional. Durante o curso, o aluno aprende primeiro o fundamento e depois compara seus resultados com o software. O objetivo não é transformar o profissional em operador de botão, mas aumentar produtividade mantendo domínio técnico.",
    "formula": "Fundamento manual → software → interpretação → decisão técnica",
    "example": "O aluno calcula manualmente a corrente do wallbox e depois confere o resultado na ferramenta.",
    "activity": "Refaça parte do estudo de caso usando a SAVE Engenharia e registre eventuais diferenças.",
    "quiz": [
      [
        "O software substitui o responsável técnico?",
        "Não",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  },
  {
    "id": 20,
    "num": "20",
    "title": "Projeto Final, Comissionamento e Entrega",
    "description": "Finalize o projeto executivo, checklist de comissionamento, relatório e apresentação técnica.",
    "image": "conclusao.png",
    "objectives": [
      "Concluir o projeto executivo.",
      "Executar checklist de comissionamento.",
      "Apresentar e defender as decisões adotadas."
    ],
    "theory": "A conclusão da formação exige mais do que assistir às aulas. O aluno deve demonstrar capacidade de organizar o projeto, executar os cálculos, aplicar os critérios estudados e documentar as verificações. Ao concluir todas as microaulas e o projeto final, o acesso profissional ao SAVE Engenharia é liberado.",
    "formula": "Conclusão = 20 microaulas + projeto final + avaliação",
    "example": "O projeto final deve incluir identificação, levantamento, curva, demanda, DLM quando aplicável, dimensionamentos, proteções, diagrama, lista de materiais, checklist e relatório.",
    "activity": "Finalize e apresente o projeto completo. Depois marque o Projeto Final como entregue na plataforma.",
    "quiz": [
      [
        "O SAVE Engenharia é liberado após a conclusão integral definida pela plataforma?",
        "Sim",
        [
          "Sim",
          "Não"
        ]
      ]
    ]
  }
];
