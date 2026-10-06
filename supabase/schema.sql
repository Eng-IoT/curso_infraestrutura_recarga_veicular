-- V5 - Registro público de certificados
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  certificate_code text unique not null,
  student_name text not null,
  student_email text not null,
  city text,
  uf char(2),
  course_name text not null default 'Projetos de Infraestrutura de Recarga Veicular',
  workload_hours integer not null default 80,
  completion_date date not null,
  verification_hash text unique not null,
  status text not null default 'valid' check (status in ('valid','revoked')),
  issued_at timestamptz not null default now()
);

alter table public.certificates enable row level security;

-- Consulta pública somente pelos campos necessários à validação.
create policy "public certificate verification"
on public.certificates for select
to anon
using (status = 'valid');

-- Em produção, NÃO permita INSERT direto por cliente anônimo.
-- Faça a emissão por Edge Function / servidor autenticado usando service role.

create index if not exists certificates_code_idx on public.certificates(certificate_code);
create index if not exists certificates_hash_idx on public.certificates(verification_hash);
