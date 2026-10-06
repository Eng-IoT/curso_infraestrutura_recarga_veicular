# Backend de certificados — Supabase

A V5 funciona localmente para demonstração e impressão. Para transformar o QR em validação pública antifraude:

1. Crie/seleciona um projeto Supabase.
2. Execute `schema.sql` no SQL Editor.
3. Crie uma Edge Function `issue-certificate` que:
   - recebe os dados do aluno após conclusão;
   - valida a autorização de emissão;
   - gera `certificate_code` global único;
   - gera `verification_hash`;
   - grava em `certificates` usando service role;
   - retorna código/hash/data.
4. Atualize a emissão no `app.js` para chamar essa função.
5. Atualize `validar.html` para consultar `certificates` por código/hash usando a chave anon.

## Segurança
- Não coloque a `service_role` no navegador.
- Não exponha CPF na página pública.
- Para produção, a conclusão do curso também deve ser verificada no servidor antes da emissão.
