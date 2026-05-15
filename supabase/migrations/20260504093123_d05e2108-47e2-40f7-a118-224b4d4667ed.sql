
CREATE OR REPLACE FUNCTION public.validate_reservation()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF length(trim(NEW.full_name)) < 2 OR length(NEW.full_name) > 120 THEN
    RAISE EXCEPTION 'Invalid full_name';
  END IF;
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' OR length(NEW.email) > 254 THEN
    RAISE EXCEPTION 'Invalid email';
  END IF;
  IF NEW.phone IS NOT NULL AND length(NEW.phone) > 40 THEN
    RAISE EXCEPTION 'Invalid phone';
  END IF;
  IF length(NEW.event_type) > 60 OR length(trim(NEW.event_type)) < 2 THEN
    RAISE EXCEPTION 'Invalid event_type';
  END IF;
  IF length(NEW.location) > 200 OR length(trim(NEW.location)) < 2 THEN
    RAISE EXCEPTION 'Invalid location';
  END IF;
  IF NEW.guest_count IS NOT NULL AND (NEW.guest_count < 1 OR NEW.guest_count > 100000) THEN
    RAISE EXCEPTION 'Invalid guest_count';
  END IF;
  IF NEW.message IS NOT NULL AND length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'Message too long';
  END IF;
  IF NEW.event_date < current_date THEN
    RAISE EXCEPTION 'Event date must be in the future';
  END IF;
  -- Force status to a safe default on insert
  NEW.status := 'new';
  RETURN NEW;
END;
$$;

CREATE TRIGGER reservations_validate
BEFORE INSERT ON public.reservations
FOR EACH ROW EXECUTE FUNCTION public.validate_reservation();
