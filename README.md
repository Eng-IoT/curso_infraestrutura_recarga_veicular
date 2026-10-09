# Formação Profissional — Instalador de Carregadores Veiculares e Infraestrutura de Recarga — V11

Carga horária: 80 h • 20 microaulas • 100 questões • projeto aplicado • laboratório de ligações • certificado digital.

## Principais avanços da V9
- Nome oficial atualizado para **Instalador de Carregadores Veiculares e Infraestrutura de Recarga**.
- Certificado e anexo programático atualizados para o novo nome.
- Código de certificado atualizado para o padrão `JM-ICV-ANO-XXXXXX`.
- Novo menu **Laboratório de Ligações**.
- 9 esquemas técnicos em SVG, ampliáveis, com caminho visível dos cabos.
- Exemplos de 3,7 kW, 7,4 kW, 11 kW e 22 kW.
- Topologia brasileira 220 V fase-fase sem presumir neutro.
- Ligação didática do QD-SAVE: disjuntor, DR, DPS, barramentos N/PE e saída ao wallbox.
- Estudos de caso baseados em documentação oficial Schneider Electric, WEG, ABB e Wallbox.
- Conteúdo reforçado na Microaula 13 sobre ligação física e montagem em bancada desenergizada.
- Projeto Final agora exige esquema de ligação do QD-SAVE.

## Regras técnicas didáticas importantes
- PE não atravessa o DR; segue ao barramento PE e ao borne de proteção do SAVE.
- DPS deve ser representado em derivação conforme configuração, esquema TT/TN e projeto — não em série com toda a corrente da carga.
- Condutores ativos pertencentes ao circuito diferencial devem atravessar o dispositivo correspondente.
- Neutros de circuitos diferentes não devem ser compartilhados indevidamente a jusante de DRs distintos.
- Em 220 V fase-fase, não se adiciona neutro ao desenho por conveniência: o carregador precisa ser compatível com a topologia real.
- Todo esquema de fabricante deve ser conferido na revisão vigente do manual do modelo efetivamente instalado.

## Fontes de fabricante usadas como referência
- Schneider Electric EVlink Home — manual GEX4292700-00.
- WEG WEMOB PARKING — guias oficiais de instalação para 32 A.
- ABB Terra AC Wallbox — documentação oficial de proteção upstream.
- Wallbox Pulsar Plus Socket — guia oficial de instalação.

## Certificado
O certificado mantém o modelo institucional em duas páginas:
1. Certificado de conclusão A4 horizontal.
2. Anexo com as 20 microaulas, 80 h, QR e código de autenticidade.

A impressão continua com área segura de 277 × 190 mm dentro do A4 paisagem para evitar cortes.

## Executar localmente
Na pasta:

```bash
python -m http.server 8080
```

Acesse `http://localhost:8080`.

## Publicar
Projeto estático compatível com Vercel. Para QR público antifraude, configurar `publicValidationBase` e conectar `validar.html` ao backend de certificados/Supabase.


## Ajustes V11 — legibilidade do certificado
- Conteúdo programático do anexo ampliado para **12 pt** na impressão/PDF.
- Textos principais, dados do aluno e blocos laterais do anexo revisados para leitura confortável.
- Assinaturas da página 1 organizadas em grade fixa para manter **linhas, nomes, descrições e funções alinhados**.
- Área segura A4 paisagem mantida para evitar cortes.
- PDF de QA renderizado e verificado visualmente.


## V11 — Certificado revisado
- corpo do certificado em 12 pt reais na impressão;
- nome do aluno ampliado;
- nome do curso destacado em linha própria;
- texto final quebrado em blocos para melhorar leitura;
- três assinaturas com linhas, nomes e identificações alinhadas;
- rodapé preservado em área segura A4 horizontal.
