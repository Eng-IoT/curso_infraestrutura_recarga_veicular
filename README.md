# Formação Profissional — Projetos de Infraestrutura de Recarga Veicular — V6

## Certificado institucional
A V6 substitui o certificado anterior pelo padrão institucional de duas páginas baseado no modelo de certificado fornecido pelo autor.

### Página 1
- logomarca Joelson Mendes;
- certificado nº / código único;
- campo TRT/ART configurável;
- título do curso;
- nome do aluno;
- CPF quando informado e autorizado;
- 80 horas, modalidade, período e local;
- resultado APROVADO(A);
- referências técnicas;
- assinatura do instrutor, aluno e responsável técnico;
- código de autenticidade.

### Página 2 — anexo
- 20 microaulas / conteúdo programático;
- carga horária total 80 h;
- período, local e modalidade;
- instrutor e responsabilidade técnica;
- QR e código de autenticidade.

## Configuração antes de uma turma real
No início de `app.js`, edite `CERT_CONFIG`, especialmente:
- `modality`;
- `location`;
- `responsible`;
- `responsibleRole`;
- `artTrt`.

Não emita certificados reais com ART/TRT fictícia.

## Executar localmente
`python -m http.server 8080`

Depois acesse `http://localhost:8080`.
