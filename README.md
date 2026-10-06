# Formação Profissional — Projetos de Infraestrutura de Recarga Veicular V5

## V5 — Certificação digital e conclusão profissional

Esta versão mantém todo o conteúdo técnico da V4 e acrescenta o fluxo de conclusão do aluno:

- cadastro do aluno antes/início da formação;
- dados salvos localmente no dispositivo;
- exigência de 20/20 microaulas concluídas;
- exigência do Projeto Final confirmado;
- tela de conferência dos dados antes da emissão;
- código único local de certificado;
- QR de consulta;
- certificado em A4 horizontal;
- segunda página com histórico completo das 20 microaulas;
- impressão/Salvar como PDF pelo navegador;
- desbloqueio do SAVE Engenharia somente após emissão do certificado;
- estrutura preparada para validação pública com Supabase.

## Fluxo do aluno

Cadastro → 20 microaulas → 100 questões → Projeto Final → Conferência de dados → Certificado + Histórico → SAVE Engenharia.

## Importante sobre o QR da V5 local

A versão local gera um QR de consulta contendo os dados do certificado. Isso é suficiente para demonstração e testes, mas **não é uma validação antifraude pública**. Para produção, use o backend Supabase incluído em `supabase/schema.sql` e emita certificados por uma Edge Function/servidor.

## Executar localmente

```bash
python -m http.server 8080
```

Depois acesse:

`http://localhost:8080`

## Publicar na Vercel

A pasta pode ser publicada como site estático. Para certificação pública real, configure também o backend de emissão/validação.

## SAVE Engenharia

O acesso continua apontando para:

https://saevengenharia.vercel.app/
