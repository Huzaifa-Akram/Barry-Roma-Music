
CREATE TABLE public.reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_date date NOT NULL,
  event_type text NOT NULL,
  location text NOT NULL,
  guest_count integer,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a reservation request (public booking form)
CREATE POLICY "Anyone can create reservations"
  ON public.reservations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No public read/update/delete — only the band (via admin/service role) can view submissions.
