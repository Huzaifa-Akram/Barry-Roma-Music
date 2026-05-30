import { createFileRoute } from "@tanstack/react-router";
import { ReservationForm } from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Cake,
  GlassWater,
  Briefcase,
  Star,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-band.jpeg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import featureBand from "@/assets/feature-band.jpg";
import featureEvent from "@/assets/feature-event.jpg";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr Barry Roma — Gruppi musicali dal vivo a Roma" },
      {
        name: "description",
        content:
          "Mr Barry Roma — Una band italiana dal vivo in stile cinematografico per matrimoni, compleanni, addii al celibato ed eventi aziendali a Roma. Contattaci per organizzare il tuo evento.",
      },
      { property: "og:title", content: "Mr Barry Roma — Gruppi musicali dal vivo a Roma" },
      {
        property: "og:description",
        content:
          "Musica dal vivo in stile “dolce vita” per matrimoni, feste ed eventi in tutta Italia.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <RichHeadline />
      <EventCards />
      <ImageText />
      <PhotoText />
      <Reviews />
      <Booking />
      <Footer />
    </main>
  );
}

function TopBanner() {
  return (
    <div className="relative z-40 bg-gradient-red py-2.5 text-center text-xs uppercase tracking-[0.3em] text-primary-foreground">
      <span className="opacity-90">
        ✦ Prenotazioni aperte per la primavera e l'estate 2026 — Roma · Italia · ✦
      </span>
    </div>
  );
}

function Nav() {
  const navLinks = [
    { href: "#events", label: "Eventi" },
    { href: "#story", label: "Trama" },
    { href: "#stage", label: "Palcoscenico" },
    { href: "#reviews", label: "Recensioni" },
    { href: "#book", label: "Libro" },
  ];

  return (
    <header className="absolute inset-x-0 top-2 z-30 bg-transparent bg-gradient-to-b from-foreground/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-display text-2xl tracking-wide text-cream"></a>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 text-sm text-cream/80 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cream">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-cream hover:bg-white/20 hover:text-cream"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/95 backdrop-blur-md border-l-0 w-[300px] sm:w-[400px]"
            >
              <SheetTitle className="sr-only">Navigazione</SheetTitle>
              <SheetDescription className="sr-only">Menu di navigazione del sito</SheetDescription>
              <nav className="flex flex-col gap-6 mt-12 text-center">
                {navLinks.map((link) => (
                  <SheetTrigger asChild key={link.href}>
                    <a
                      href={link.href}
                      className="font-display text-2xl text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetTrigger>
                ))}
                <div className="pt-8 mt-8 border-t border-border">
                  <SheetTrigger asChild>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-95"
                    >
                      <a href="#book">PRENOTA ORA</a>
                    </Button>
                  </SheetTrigger>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Mr Barry Roma performing live with brass instruments and candlelight"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-overlay" />

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-44">
        <p className="animate-fade-up font-display text-sm uppercase tracking-[0.3em] text-accent">
          <a href="#top" className="font-display text-3xl tracking-wide text-cream">
            Mr Barry <span className="text-accent">Roma</span>
          </a>
        </p>
        <h1 className="mt-4 max-w-3xl animate-fade-up font-display text-3xl leading-[0.95] text-cream text-balance sm:text-4xl md:text-6xl">
          Organizza il tuo evento privato
        </h1>
        <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-cream/85"></p>
        <div className="mt-10 flex animate-fade-up flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-95"
          >
            <a href="#book">PRENOTA ORA</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function RichHeadline() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">— Mr Barry</p>
        <h4 className="mt-6 font-display text-4xl leading-tight text-foreground text-balance sm:text-6xl md:text-3xl">
          Non affitti uno spazio crei un ricordo
          {/* Non affitti uno spazio.<em className="text-primary">Crei</em> un ricordo.
          <br className="hidden md:block" />
          Ci sono luoghi a Roma dove puoi fare una{" "}
          <span className="bg-gradient-gold bg-clip-text text-transparent">festa.</span>
          come un{" "}
          <span className="underline decoration-primary decoration-4 underline-offset-8">
            E poi c'è Mr Barry.
          </span>
          . */}
        </h4>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Ci sono luoghi a Roma dove puoi fare una festa. E poi c&rsquo;&egrave; Mr Barry. Non
          affitti uno spazio porti via un&rsquo;esperienza.
        </p>
      </div>
    </section>
  );
}

function EventCards() {
  const events = [
    {
      icon: Cake,
      title: "COMPLEANNO",
      body: "La notte che ti aspettavi / da anni Quello che vuoi è semplice: entrare, festeggiare, non pensare a niente. Noi ci occupiamo del resto tavolo riservato, bottiglia di benvenuto, playlist, torta, sorprese se vuoi.",
      tag: "",
    },
    {
      icon: GlassWater,
      title: "ADDIO AL CELIBATO:",
      body: "Una notte / irripetibile Ultima serata da single o prima di una nuova vita in entrambi i casi, non è una serata normale. È quella. Mr Barry la tratta come tale: area riservata, animazione, momenti costruiti apposta per fare rumore.",
      tag: "",
    },
    {
      icon: Briefcase,
      title: "EVENTO AZIENDALE:",
      body: "Quando vuoi / stupire davvero La cena aziendale classica funziona. Ma se vuoi che la gente ne parli ancora il lunedì, serve qualcosa di diverso. Mr Barry è il contesto esclusivo, discreto, di livello. Il contenuto lo costruiamo insieme: cena, networking, lancio, team. ",
      tag: "",
    },
  ];
  return (
    <section id="events" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">— Eventi</p>
            <h2 className="mt-3 font-display text-4xl text-foreground text-balance sm:text-5xl">
              Quali eventi puoi organizzare con Mr. Barry:
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 [perspective:1200px]">
          {events.map(({ icon: Icon, title, body, tag }, i) => (
            <FlipCard key={title} index={i} Icon={Icon} title={title} body={body} tag={tag} />
          ))}
        </div>
      </div>
    </section>
  );
}

type FlipCardProps = {
  index: number;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  tag: string;
};

function FlipCard({ index, Icon, title, body, tag }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="group relative h-72 cursor-pointer [transform-style:preserve-3d]"
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <article className="absolute inset-0 flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm [backface-visibility:hidden]">
          <div className="flex items-center justify-between">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="font-display text-5xl text-primary/20">0{index + 1}</span>
          </div>
          <h3 className="mt-auto font-display text-3xl text-foreground">{title}</h3>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>{tag}</span>
            <span className="text-primary">Leggi di più →</span>
          </div>
        </article>
        {/* Back */}
        <article
          className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-black p-8 text-primary-foreground shadow-elegant [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-6 font-display text-xl">{title}</h3>
            <p className="mt-3 text-primary-foreground/90 text-xs">{body}</p>
          </div>
          <div className="flex items-center justify-between border-t border-cream/20 pt-4 text-xs uppercase tracking-[0.25em] text-cream/80">
            <span>{tag}</span>
            <a
              href="#book"
              className="text-accent transition hover:opacity-80"
              onClick={(e) => e.stopPropagation()}
            >
              Prenota →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

function ImageText() {
  return (
    <section id="story" className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={featureBand}
              alt="Mr Barry Roma band on stage with red lights and brass"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-foreground px-6 py-4 text-cream shadow-elegant md:block">
            <p className="font-display text-3xl text-accent">9 yrs</p>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/70">insieme sul palco</p>
          </div>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            — La nostra storia
          </p>
          <h2 className="mt-4 font-display text-4xl text-foreground text-balance sm:text-5xl">
            Mr. Barry Roma
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-justify">
            C'è una differenza tra un locale che fa eventi privati e un locale che sa fare eventi
            privati. La differenza si sente nell'aria, nel modo in cui ti risponde il team, in come
            finisce la serata.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-justify">
            In sei anni abbiamo organizzato centinaia di eventi, oggi sappiamo esattamente cosa
            serve per far funzionare una serata e cosa basta perché vada storta. L'obiettivo non è
            fare una bella serata. È fare quella di cui parlate ancora dopo sei mesi.
          </p>

          <ul className="mt-8 space-y-3 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-primary"></span>{" "}
            </li>
            <li className="flex gap-3">
              <span className="text-primary"></span>{" "}
            </li>
            <li className="flex gap-3">
              <span className="text-primary"></span>{" "}
            </li>
          </ul>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-foreground text-background hover:opacity-90"
          >
            <a href="#book">Contattaci</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PhotoText() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
  ];
  const mobilePages = Array.from({ length: Math.ceil(images.length / 4) }, (_, pageIndex) => ({
    startIndex: pageIndex * 4,
    images: images.slice(pageIndex * 4, pageIndex * 4 + 4),
  }));
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <section id="stage" className="bg-foreground py-28 text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">— Sul palco</p>
          <h2 className="mt-4 font-display text-4xl text-cream text-balance sm:text-3xl">
            Ogni completo, realizzato su misura come un capo di alta moda.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            Non una sala. Un'identità. Porti i tuoi ospiti in un posto che ha già una storia,
            un'energia, una reputazione. Non devono immaginare l'atmosfera la respirano appena
            entrano.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            <div>
              <dt className="font-display text-4xl text-accent">270</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-cream/60">Compleanni</dd>
            </div>
            <div>
              <dt className="font-display text-4xl text-accent">120 </dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-cream/60">
                Adii al celibato
              </dd>
            </div>
            <div>
              <dt className="font-display text-4xl text-accent">97</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-cream/60">
                Eventi aziendali
              </dd>
            </div>
          </dl>
        </div>

        <div className="order-1 md:order-2">
          <div className="md:hidden">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="ml-0">
                {mobilePages.map((page, pageIndex) => (
                  <CarouselItem key={pageIndex} className="basis-full pl-0 pr-0">
                    <div className="grid grid-cols-2 gap-3 px-1">
                      {page.images.map((img, imageOffset) => {
                        const imageIndex = page.startIndex + imageOffset;

                        return (
                          <div
                            key={imageIndex}
                            className="group relative aspect-4/5 cursor-pointer overflow-hidden rounded-2xl bg-transparent transform-[translateZ(0)]"
                            onClick={() => {
                              setStartIndex(imageIndex);
                              setOpen(true);
                            }}
                          >
                            <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />
                            <img
                              src={img}
                              alt={`Gallery image ${imageIndex + 1}`}
                              loading="lazy"
                              className="block h-full w-full object-cover transition-transform duration-800 ease-out scale-[1.01] group-hover:scale-105 will-change-transform"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-4/5 cursor-pointer overflow-hidden rounded-2xl bg-transparent transform-[translateZ(0)]"
                onClick={() => {
                  setStartIndex(idx);
                  setOpen(true);
                }}
              >
                <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />
                <img
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-800 ease-out scale-[1.01] group-hover:scale-105 will-change-transform"
                />
              </div>
            ))}
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-screen max-h-screen w-screen h-screen m-0 p-0 border-none rounded-none bg-black/95 flex flex-col justify-center items-center shadow-none [&>button]:text-white/60 [&>button]:hover:text-white [&>button]:bg-transparent [&>button]:border-none [&>button]:ring-0 [&>button:focus]:ring-0 [&>button]:outline-none [&>button]:w-16 [&>button]:h-16 [&>button]:top-4 [&>button]:right-4 md:[&>button]:right-8 md:[&>button]:top-8 [&>button_svg]:w-8 [&>button_svg]:h-8 [&>button]:transition-all [&>button]:z-50 [&>button]:flex [&>button]:items-center [&>button]:justify-center">
              <DialogTitle className="sr-only">Gallery Image Viewer</DialogTitle>
              <DialogDescription className="sr-only">
                View full size images in carousel
              </DialogDescription>
              <div className="w-full h-full max-w-[100vw] flex items-center justify-center relative select-none">
                <Carousel
                  opts={{ startIndex, loop: true, align: "center" }}
                  className="w-full h-full flex items-center"
                >
                  <CarouselContent className="h-full w-full flex items-center ml-0">
                    {images.map((img, idx) => (
                      <CarouselItem
                        key={idx}
                        className="h-full w-full flex items-center justify-center pl-0 cursor-zoom-out"
                        onClick={(e) => {
                          if (e.target === e.currentTarget) setOpen(false);
                        }}
                      >
                        <img
                          src={img}
                          alt={`Gallery image ${idx + 1}`}
                          className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl cursor-default"
                          draggable="false"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious
                    variant="ghost"
                    className="fixed left-4 md:left-10 h-16 w-16 bg-transparent hover:bg-white/10 text-white/60 hover:text-white border-none rounded-full transition-all [&_svg]:w-8 [&_svg]:h-8 z-50"
                  />
                  <CarouselNext
                    variant="ghost"
                    className="fixed right-4 md:right-10 h-16 w-16 bg-transparent hover:bg-white/10 text-white/60 hover:text-white border-none rounded-full transition-all [&_svg]:w-8 [&_svg]:h-8 z-50"
                  />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Giulia & Marco",
      role: "Matrimonio · Villa Aurelia",
      stars: 5,
      body: "Non hanno semplicemente interpretato quella notte: l’hanno creata. Un sussurro a cena, una tempesta a mezzanotte. Puro cinema.",
    },
    {
      name: "Luca R.",
      role: "Laurea triennale · Roma",
      stars: 5,
      body: "Hanno reso il nostro terrazzo come un film. Ottaviano, soul, classici italiani — tutti parlano ancora di questo.",
    },
    {
      name: "Acme Italia",
      role: "Gala aziendale",
      stars: 5,
      body: "Raffinata, in linea con lo spirito del marchio e indimenticabile. La band ha accompagnato l'intera serata con eleganza.",
    },
  ];
  return (
    <section id="reviews" className="bg-secondary py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            — Recensioni
          </p>
          <h2 className="mt-4 font-display text-4xl text-foreground text-balance sm:text-4xl">
            Chi ha già organizzato eventi insieme a noi.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:shadow-elegant"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-2xl italic leading-snug text-foreground">
                “{r.body}”
              </blockquote>
              <div className="mt-auto pt-8">
                <p className="font-display text-lg text-foreground">{r.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="book" className="relative overflow-hidden bg-background py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">— Prenota</p>
          <h2 className="mt-4 font-display text-4xl text-foreground text-balance sm:text-6xl">
            Orgamizza il tuo evento
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Raccontaci della tua serata. Di solito rispondiamo entro 24 ore con la disponibilità e
            una proposta su misura — repertorio, line-up e tecnica incluse.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#top" className="font-display text-3xl tracking-wide">
              Mr Barry <span className="text-accent">Roma</span>
            </a>
            <p className="mt-4 hidden max-w-sm text-sm leading-relaxed text-cream/70 md:block">
              Una band italiana dal sound cinematografico, radicata nella tradizione della dolce
              vita. Calde note di ottoni, voci intime, serate indimenticabili: da Roma a qualsiasi
              luogo ci chiamiate.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/mrbarry.roma"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              {/* <a
                href="mailto:hello@mrbarryroma.com"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a> */}
            </div>
          </div>

          {/* Explore */}
          <div className="hidden md:block md:col-span-3">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">Esplora</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li>
                <a href="#events" className="transition hover:text-accent">
                  Eventi
                </a>
              </li>
              <li>
                <a href="#story" className="transition hover:text-accent">
                  La nostra storia
                </a>
              </li>
              <li>
                <a href="#stage" className="transition hover:text-accent">
                  Sul palco
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition hover:text-accent">
                  Recensioni
                </a>
              </li>
              <li>
                <a href="#book" className="transition hover:text-accent">
                  Contattaci
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">Contatti</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>Roma, Italia · disponibile in tutto il mondo</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <a href="mailto:hello@mrbarryroma.com" className="transition hover:text-accent">
                  hello@mrbarryroma.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <a href="tel:+390000000000" className="transition hover:text-accent">
                  +39 000 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Mr Barry Roma. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em]">
            Realizzato a Roma · Utilizzato in tutto il mondo
          </p>
        </div>
      </div>
    </footer>
  );
}
