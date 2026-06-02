-- Meridian Estates — contact inquiries
-- Run this once in your Supabase project (SQL Editor) for:
--   https://hbxspxvigrrdlgymdddg.supabase.co
--
-- No auth is used. Public/anonymous visitors may SUBMIT inquiries, but
-- nobody can READ them via the public API — submissions are only visible in
-- the Supabase dashboard (or to the service-role key).

create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  interest    text,
  message     text not null,
  created_at  timestamptz not null default now()
);

-- Lock the table down, then open a single, explicit hole for inserts.
alter table public.inquiries enable row level security;

-- Allow anyone (anon + authenticated) to submit an inquiry.
drop policy if exists "Public can submit inquiries" on public.inquiries;
create policy "Public can submit inquiries"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);

-- (No SELECT/UPDATE/DELETE policy: the public key cannot read or modify rows.)
