import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const EVENT_TYPES = ["Wedding", "Private Party", "Corporate", "Restaurant / Venue", "Festival", "Other"];

export function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      full_name: String(fd.get("full_name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      event_date: String(fd.get("event_date") || ""),
      event_type: String(fd.get("event_type") || ""),
      location: String(fd.get("location") || "").trim(),
      guest_count: fd.get("guest_count") ? Number(fd.get("guest_count")) : null,
      message: String(fd.get("message") || "").trim() || null,
    };

    setLoading(true);

    try {
      // NOTE: Replace "YOUR_FORMSPREE_ENDPOINT" with the actual Formspree endpoint URL
      // Example: https://formspree.io/f/xknk...
      const formspreeEndpoint = "YOUR_FORMSPREE_ENDPOINT";
      
      if (formspreeEndpoint !== "YOUR_FORMSPREE_ENDPOINT") {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Formspree submission failed");
        }
      } else {
        // Dummy waiting for visual feedback until API is attached
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setLoading(false);
      setDone(true);
      toast.success("Grazie! Your request has been received.", {
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error: any) {
      setLoading(false);
      toast.error("Could not send your request", { description: error.message });
    }
  };

  if (done) {
    return (
      <div className="rounded-xl border border-border bg-card p-10 text-center shadow-elegant">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold">
          <span className="text-2xl">♪</span>
        </div>
        <h3 className="font-display text-3xl text-primary">Mr Barry Roma</h3>
        <p className="mt-3 text-muted-foreground">
          La tua richiesta è stata ricevuta. Ti contatteremo entro 24 ore per confermare i dettagli.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setDone(false)}>
          Send another request
        </Button>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-xl border border-border bg-card p-6 shadow-elegant sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="full_name">Nome completo</Label>
          <Input id="full_name" name="full_name" required minLength={2} maxLength={120} placeholder="Marco Rossi" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required maxLength={254} placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Telefono </Label>
          <Input id="phone" name="phone" maxLength={40} placeholder="+39 ..." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="event_date">Data dell'evento</Label>
          <Input id="event_date" name="event_date" type="date" required min={today} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="event_type">Tipo di evento</Label>
          <select
            id="event_type"
            name="event_type"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>Seleziona…</option>
            {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="guest_count">Ospiti (circa..)</Label>
          <Input id="guest_count" name="guest_count" type="number" min={1} max={100000} placeholder="80" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="location">Luogo / sede</Label>
        <Input id="location" name="location" required maxLength={200} placeholder="Roma, Villa Borghese" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Raccontaci del tuo evento</Label>
        <Textarea id="message" name="message" maxLength={2000} rows={4} placeholder="Style, repertoire wishes, timing…" />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="bg-gradient-warm text-primary-foreground hover:opacity-95">
        {loading ? "Sending…" : "Richiedi la band"}
      </Button>
    </form>
  );
}
