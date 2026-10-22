-- ============================================================
--  Contacts Exchange - Supabase setup
--  Supabase > SQL Editor > New query > paste everything > Run
--  !! BEFORE RUNNING: replace CHANGE_ME_STRONG_PASSWORD below !!
-- ============================================================

-- 1) Tables
create table if not exists contacts(
  id bigserial primary key,
  name text not null check (char_length(name) between 2 and 40),
  phone text unique not null check (phone ~ '^\+[0-9]{7,15}$'),
  created_at timestamptz default now()
);

create table if not exists settings(
  id int primary key default 1 check (id = 1),
  goal int not null default 5000 check (goal > 0),
  released boolean not null default false,
  admin_hash text not null
);

-- Your admin password (stored hashed, never readable from the website)
insert into settings(admin_hash)
values (extensions.crypt('693517598GAIN', extensions.gen_salt('bf')))
on conflict do nothing;

-- 2) Security: visitors can only INSERT a contact; they can't read any table directly
alter table contacts enable row level security;
alter table settings enable row level security;
drop policy if exists "anyone can join" on contacts;
create policy "anyone can join" on contacts for insert to anon with check (true);

-- 3) Public functions
create or replace function get_status() returns json
language sql security definer set search_path=public as $$
  select json_build_object(
    'goal', s.goal,
    'count', (select count(*) from contacts),
    'released', s.released,
    'open', s.released or (select count(*) from contacts) >= s.goal
  ) from settings s $$;

create or replace function check_user(p_name text, p_phone text) returns boolean
language sql security definer set search_path=public as $$
  select exists(select 1 from contacts where phone = p_phone and lower(name) = lower(p_name)) $$;

-- Only returns contacts if the visitor is registered AND the file is open
create or replace function get_contacts(p_name text, p_phone text) returns table(name text, phone text)
language sql security definer set search_path=public as $$
  select c.name, c.phone from contacts c
  where check_user(p_name, p_phone)
    and exists(select 1 from settings s where s.released or (select count(*) from contacts) >= s.goal)
  order by c.id $$;

-- 4) Admin functions (need your admin password)
create or replace function admin_check(p text) returns boolean
language sql security definer set search_path=public,extensions as $$
  select exists(select 1 from settings where admin_hash = crypt(p, admin_hash)) $$;

create or replace function admin_set(p text, g int, r boolean) returns void
language plpgsql security definer set search_path=public,extensions as $$
begin
  if not admin_check(p) then raise exception 'denied'; end if;
  update settings set goal = greatest(g, 1), released = r where id = 1;
end $$;

create or replace function admin_contacts(p text) returns table(name text, phone text)
language plpgsql security definer set search_path=public,extensions as $$
begin
  if not admin_check(p) then raise exception 'denied'; end if;
  return query select c.name, c.phone from contacts c order by c.id;
end $$;

-- Delete one contact (use it for deletion requests: admin panel > view contacts > trash icon)
create or replace function admin_delete(p text, p_phone text) returns void
language plpgsql security definer set search_path=public,extensions as $$
begin
  if not admin_check(p) then raise exception 'denied'; end if;
  delete from contacts where phone = p_phone;
end $$;

grant execute on function get_status(), check_user(text,text), get_contacts(text,text),
  admin_check(text), admin_set(text,int,boolean), admin_contacts(text), admin_delete(text,text) to anon;

-- To change the admin password later, run:
-- update settings set admin_hash = extensions.crypt('NEW_PASSWORD', extensions.gen_salt('bf'));
