# QA V8 — Relatório de validação

## Banco de conteúdo e questões
- [x] 20 microaulas encontradas.
- [x] 5 questões em cada microaula.
- [x] 100 questões totais.
- [x] Cada gabarito aparece exatamente uma vez entre as alternativas.
- [x] Nenhuma questão duplicada.
- [x] Questão de desbloqueio do SAVE corrigida para refletir a regra real: 20 aulas + Projeto Final + emissão do certificado.
- [x] Migração/saneamento remove respostas armazenadas que não pertencem mais às alternativas atuais.

## Certificado / PDF
- [x] A4 horizontal confirmado: 841,92 x 594,96 pt.
- [x] Duas páginas: certificado + anexo programático.
- [x] Zona segura de aproximadamente 10 mm ao redor do conteúdo.
- [x] Renderização visual verificada sem cortes de moldura, textos, assinaturas, rodapé ou QR.

## QR Code
- [x] Geração local em PNG por JavaScript, sem dependência de serviço externo.
- [x] Quiet zone de 4 módulos.
- [x] Payload reduzido para diminuir densidade do QR.
- [x] Tamanho físico no PDF: 30 mm.
- [x] QR gerado em runtime pelo JavaScript decodificado com sucesso.
- [x] QR extraído da página 2 do PDF decodificado com sucesso: `JM|JM-IRV-2026-000184|A1B2C3D4E5F6`.

## Cache / atualização
- [x] Service Worker mudou para cache V8.
- [x] Caches antigos são removidos no evento activate.
- [x] Arquivos críticos usam estratégia network-first para reduzir risco de versão antiga em cache.
