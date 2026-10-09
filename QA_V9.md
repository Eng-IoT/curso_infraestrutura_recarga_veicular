# QA V9 — Relatório de validação

## Plataforma
- [x] Nome do curso atualizado para **Instalador de Carregadores Veiculares e Infraestrutura de Recarga**.
- [x] Novo menu **Laboratório de Ligações** carregando 9 esquemas.
- [x] Modal de esquema ampliado funcionando.
- [x] Fontes oficiais acessíveis nos estudos de caso de fabricante.
- [x] Teste do HTML standalone em Chromium/Playwright sem erros de JavaScript.
- [x] Armazenamento local protegido com fallback quando o navegador bloquear `localStorage`.

## Banco de questões
- [x] 20 microaulas.
- [x] 5 questões por microaula.
- [x] 100 questões no total.
- [x] Cada gabarito aparece exatamente uma vez entre as alternativas.
- [x] Microaula 13 revisada para ligação física do quadro SAVE.

## Laboratório de ligações
- [x] 9 esquemas SVG vetoriais em alta resolução.
- [x] Condutores L/L1/L2/L3, N e PE diferenciados visualmente.
- [x] PE não atravessa o DR nos esquemas didáticos.
- [x] DPS representado em derivação.
- [x] Esquema brasileiro 220 V fase-fase sem neutro fictício.
- [x] Exemplos de 3,7 kW, 7,4 kW, 11 kW e 22 kW.
- [x] Estudos de caso WEG WEMOB e ABB Terra AC.
- [x] Referências Schneider EVlink e Wallbox Pulsar Plus.

## Certificado
- [x] Nome oficial atualizado nas duas páginas.
- [x] Código atualizado para `JM-ICV-...`.
- [x] A4 paisagem com área segura de 277 × 190 mm.
- [x] Duas páginas renderizadas sem cortes.
- [x] QR do PDF decodificado após renderização: `JM|JM-ICV-2026-000184|A1B2C3D4E5F6`.

## Cache / atualização
- [x] Service Worker alterado para cache V9.
- [x] `wiring-data.js` tratado como arquivo crítico de rede-primeiro.
- [x] Compatibilidade de leitura com progressos V8/V7/V6.
