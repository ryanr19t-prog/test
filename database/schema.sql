-- TireDrop Supabase Database Schema

-- USERS (handled by Supabase Auth)
-- We extend user profiles here
create table profiles (
  id uuid primary key references auth.users(id),
  email text unique,
  role text check (role in ('admin','dealer')) default 'dealer',
  created_at timestamp default now()
);

-- TIRES
create table tires (
  id serial primary key,
  brand text,
  name text,
  season text,
  size text,
  wholesale_price numeric,
  retail_price numeric,
  stock int,
  created_at timestamp default now()
);

-- ORDERS
create table orders (
  id serial primary key,
  user_id uuid references profiles(id),
  tire_id int references tires(id),
  quantity int,
  total numeric,
  status text check (status in ('pending','processing','shipped')) default 'pending',
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table profiles enable row level security;
alter table tires enable row level security;
alter table orders enable row level security;
