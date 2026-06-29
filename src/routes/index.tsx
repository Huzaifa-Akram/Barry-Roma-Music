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
  FileText,
} from "lucide-react";
import { useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { useReveal } from "@/hooks/useReveal";
import heroImg from "@/assets/hero-band.jpeg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
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
  CarouselDots,
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
    <main className="relative min-h-screen bg-background text-foreground">
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
    { href: "#contact", label: "CONTATTI" },
    { href: "#careers", label: "LAVORA CON NOI" },
  ];

  const headerRef = useRef<HTMLElement>(null);
  const [navTilt, setNavTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const [navHover, setNavHover] = useState(false);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleNavMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const rect = headerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setNavTilt({
      rx: (0.5 - py) * 18,
      ry: (px - 0.5) * 22,
      gx: px * 100,
      gy: py * 100,
    });
  };

  const handleNavMouseLeave = () => {
    setNavHover(false);
    setNavTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });
  };

  return (
    <header
      ref={headerRef}
      onMouseMove={handleNavMouseMove}
      onMouseEnter={() => setNavHover(true)}
      onMouseLeave={handleNavMouseLeave}
      className={`nav-tilt-bar sticky inset-x-0 top-0 z-50 overflow-hidden bg-foreground/95 backdrop-blur-md shadow-lg border-b border-cream/10 py-5 ${navHover ? "is-hovering" : ""}`}
      style={{ ["--glow-x" as string]: `${navTilt.gx}%`, ["--glow-y" as string]: `${navTilt.gy}%` }}
    >
      <span className="nav-glow-overlay" aria-hidden="true" />
      <div
        className="nav-tilt-inner mx-auto flex max-w-7xl items-center justify-center px-6"
        style={{
          transform: `rotateX(${navTilt.rx}deg) rotateY(${navTilt.ry}deg) scale(${navHover ? 1.06 : 1})`,
          transition: navHover ? "transform 120ms ease-out" : "transform 450ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="flex items-center">
          <a href="#top">
            <Logo className="h-20 w-auto" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 text-sm text-cream/80 md:flex">
          {/* {navLinks.map((link) => (
            // <a key={link.href} href={link.href} className="transition hover:text-cream">
            //   {link.label}
            // </a>
          ))} */}
        </nav>

        {/* Mobile Nav (hidden) */}
        {/* <div className="md:hidden">
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
              </nav>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroImg}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      >
        <source src="/hero-video-optimized.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-overlay" />

      <div className="mx-auto flex min-h-[55vh] sm:min-h-[65vh] md:min-h-[85vh] max-w-7xl flex-col justify-end px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 pt-20 sm:pt-28 md:pt-44">
        <h1 className="max-w-3xl animate-fade-up font-display text-2xl leading-[0.95] text-cream text-balance sm:text-3xl md:text-6xl">
          Organizza il tuo evento privato
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl animate-fade-up text-base sm:text-lg leading-relaxed text-cream/85"></p>
        <div className="mt-6 sm:mt-8 md:mt-10 flex animate-fade-up flex-wrap gap-4">
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
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-24">
      <div ref={ref} className={`reveal-up mx-auto max-w-5xl px-6 text-center ${inView ? "in-view" : ""}`}>
        <p className="font-subtitle text-sm uppercase tracking-[0.3em] text-primary">— Mr Barry</p>
        <h4 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-6xl md:text-3xl">
          <span className="whitespace-nowrap">L’eleganza prende vita </span>{" "}
          <span className="whitespace-nowrap">al calare della sera</span>
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
          L’atmosfera di un locale esclusivo, il fascino del piano bar e l’energia del {" "}
          <span className="whitespace-nowrap">DJ set si fondono in un’esperienza</span>{" "}
          <span className="whitespace-nowrap">che lascia il segno.</span>
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
      body: "Una notte, un brindisi, ricordi che dureranno per sempre. Vivi il tuo addio al celibato con lo stile inconfondibile di MrBarry.",
      tag: "",
    },
    {
      icon: Briefcase,
      title: "EVENTO AZIENDALE:",
      body: "Trasforma un incontro di lavoro in un’esperienza esclusiva. Un ambiente raffinato, servizio dedicato e un’atmosfera perfetta per celebrare successi, networking e occasioni speciali. ",
      tag: "",
    },
  ];
  const heading = useReveal<HTMLDivElement>();
  const cards = useReveal<HTMLDivElement>();
  return (
    <section id="events" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={heading.ref}
          className={`reveal-up flex items-end justify-between gap-6 ${heading.inView ? "in-view" : ""}`}
        >
          <div>
            <p className="font-subtitle text-sm uppercase tracking-[0.3em] text-primary">
              — Eventi
            </p>
            <h2 className="mt-3 font-display text-4xl text-foreground text-balance sm:text-5xl">
              Quali eventi puoi organizzare con Mr. Barry:
            </h2>
          </div>
        </div>

        <div
          ref={cards.ref}
          className={`reveal-stagger mt-14 grid gap-6 md:grid-cols-3 [perspective:1200px] ${cards.inView ? "in-view" : ""}`}
        >
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
  const image = useReveal<HTMLDivElement>();
  const text = useReveal<HTMLDivElement>();
  return (
    <section id="story" className="bg-background py-14 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div
          ref={image.ref}
          className={`reveal-left relative ${image.inView ? "in-view" : ""}`}
        >
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
            <p className="font-display text-3xl text-accent">9 anni</p>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/70">di esperienza</p>
          </div>
        </div>

        <div ref={text.ref} className={`reveal-right ${text.inView ? "in-view" : ""}`}>
          <p className="font-subtitle text-sm uppercase tracking-[0.3em] text-primary">
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

          <Button
            asChild
            size="lg"
            className="mt-6 bg-foreground text-background hover:opacity-90 md:mt-10"
          >
            <a href="#book">PRENOTA ORA</a>
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
    gallery11,
    gallery12,
    gallery13,
    gallery14,
  ];
  const mobilePages = Array.from({ length: Math.ceil(images.length / 4) }, (_, pageIndex) => ({
    startIndex: pageIndex * 4,
    images: images.slice(pageIndex * 4, pageIndex * 4 + 4),
  }));
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const text = useReveal<HTMLDivElement>();

  return (
    <section id="stage" className="bg-foreground py-28 text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div
          ref={text.ref}
          className={`reveal-left order-2 md:order-1 ${text.inView ? "in-view" : ""}`}
        >
          <p className="font-subtitle text-sm uppercase tracking-[0.3em] text-accent">
            — Sul palco
          </p>
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
              <dt className="font-display text-4xl text-accent">75</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-cream/60">Compleanni</dd>
            </div>
            <div>
              <dt className="font-display text-4xl text-accent">28</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-cream/60">
                Adii al celibato
              </dd>
            </div>
            <div>
              <dt className="font-display text-4xl text-accent">42</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-cream/60">
                Eventi aziendali
              </dd>
            </div>
          </dl>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-95"
            >
              <a href="#book">PRENOTA ORA</a>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          {/* Mobile version (2x2 grid in carousel) */}
          <div className="md:hidden">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
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
              <CarouselDots className="mt-6" />
              <CarouselPrevious className="flex left-2 h-10 w-10 border-none bg-black/20 text-white backdrop-blur-md hover:bg-black/40 xl:-left-12 xl:bg-transparent" />
              <CarouselNext className="flex right-2 h-10 w-10 border-none bg-black/20 text-white backdrop-blur-md hover:bg-black/40 xl:-right-12 xl:bg-transparent" />
            </Carousel>
          </div>

          {/* Desktop version (1 image single slider) */}
          <div className="hidden md:block">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="ml-0">
                {images.map((img, idx) => (
                  <CarouselItem key={idx} className="basis-full pl-0 pr-0">
                    <div
                      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-transparent transform-[translateZ(0)]"
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-8" />
              <CarouselPrevious className="flex -left-6 z-10 h-12 w-12 border-none bg-black/50 text-white backdrop-blur-md hover:bg-black/80 xl:-left-14 xl:bg-transparent xl:hover:bg-white/10" />
              <CarouselNext className="flex -right-6 z-10 h-12 w-12 border-none bg-black/50 text-white backdrop-blur-md hover:bg-black/80 xl:-right-14 xl:bg-transparent xl:hover:bg-white/10" />
            </Carousel>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-screen max-h-screen w-screen h-screen m-0 p-0 border-none rounded-none bg-black/95 flex flex-col justify-center items-center shadow-none [&>button:last-child]:fixed [&>button:last-child]:right-4 md:[&>button:last-child]:right-8 [&>button:last-child]:top-4 md:[&>button:last-child]:top-8 [&>button:last-child]:z-[100] [&>button:last-child]:flex [&>button:last-child]:h-12 [&>button:last-child]:w-12 [&>button:last-child]:items-center [&>button:last-child]:justify-center [&>button:last-child]:rounded-full [&>button:last-child]:bg-white/10 [&>button:last-child]:text-white/70 hover:[&>button:last-child]:bg-white/20 hover:[&>button:last-child]:text-white [&>button:last-child]:transition-all [&>button:last-child]:outline-none [&>button:last-child]:ring-0 focus:[&>button:last-child]:ring-0 focus-visible:[&>button:last-child]:ring-0 [&>button:last-child]:ring-offset-0 [&>button:last-child_svg]:h-6 [&>button:last-child_svg]:w-6 data-[state=open]:[&>button:last-child]:bg-white/10 data-[state=open]:[&>button:last-child]:text-white/70">
              <DialogTitle className="sr-only">Gallery Image Viewer</DialogTitle>
              <DialogDescription className="sr-only">
                View full size images in carousel
              </DialogDescription>
              <div className="w-full h-full max-w-[100vw] flex items-center justify-center relative select-none">
                <Carousel
                  opts={{ startIndex, loop: true, align: "center" }}
                  className="w-full h-[100dvh] flex items-center"
                >
                  <CarouselContent className="h-full w-full flex items-center ml-0">
                    {images.map((img, idx) => (
                      <CarouselItem
                        key={idx}
                        className="h-full w-full flex items-center justify-center pl-0 cursor-zoom-out p-4 md:p-12"
                        onClick={(e) => {
                          if (e.target === e.currentTarget) setOpen(false);
                        }}
                      >
                        <img
                          src={img}
                          alt={`Gallery image ${idx + 1}`}
                          className="max-h-[85dvh] max-w-full object-contain shadow-2xl cursor-default rounded-md"
                          draggable="false"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="flex fixed left-4 md:left-8 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-white/10 text-white/70 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all z-50 [&_svg]:h-6 [&_svg]:w-6 outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none" />
                  <CarouselNext className="flex fixed right-4 md:right-8 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-white/10 text-white/70 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all z-50 [&_svg]:h-6 [&_svg]:w-6 outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none" />
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
      name: "Elena",
      stars: 5,
      body: "Serata fantastica al Mr Barry! Atmosfera elegante, musica ottima e cocktail di livello. Location perfetta per festeggiare in grande stile nel cuore di Trastevere. Torneremo sicuramente!",
    },
    {
      name: "Lorenzo",
      stars: 5,
      body: "Abbiamo festeggiato una laurea qui e siamo rimasti colpiti dall'organizzazione e dallo staff. Privé comodi, sala bellissima, aperitivo ottimo. Da provare per ogni occasione speciale.",
    },
    {
      name: "Chiara",
      stars: 5,
      body: "Mr Barry è una gemma di Roma. locale raffinato, musica live coinvolgente e un'energia unica. Perfetto sia per una serata tranquilla che per festeggiare. Consigliato!",
    },
  ];
  const heading = useReveal<HTMLDivElement>();
  const cards = useReveal<HTMLDivElement>();
  return (
    <section id="reviews" className="bg-secondary py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={heading.ref}
          className={`reveal-up max-w-2xl ${heading.inView ? "in-view" : ""}`}
        >
          <p className="font-subtitle text-sm uppercase tracking-[0.3em] text-primary">
            — Recensioni
          </p>
          <h2 className="mt-4 font-display text-4xl text-foreground text-balance sm:text-4xl">
            Chi ha già organizzato eventi insieme a noi.
          </h2>
        </div>
        <div
          ref={cards.ref}
          className={`reveal-stagger mt-14 grid gap-6 md:grid-cols-3 ${cards.inView ? "in-view" : ""}`}
        >
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
  const info = useReveal<HTMLDivElement>();
  const form = useReveal<HTMLDivElement>();
  return (
    <section id="book" className="relative overflow-hidden bg-background py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-5">
        <div
          ref={info.ref}
          className={`reveal-up md:col-span-2 ${info.inView ? "in-view" : ""}`}
        >
          <p className="font-subtitle text-sm uppercase tracking-[0.3em] text-primary">— Prenota</p>
          <h2 className="mt-4 font-display text-4xl text-foreground text-balance sm:text-6xl">
            Organizza il tuo evento
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            inserisci i dettagli del tuo evento, Ti rispondiamo entro 24 ore. Ti prepariamo una
            proposta a misura basata sulla tua idea
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          ref={form.ref}
          className={`reveal-up md:col-span-3 ${form.inView ? "in-view" : ""}`}
          style={{ transitionDelay: form.inView ? "120ms" : "0ms" }}
        >
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-foreground text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#top">
              <Logo className="h-24 w-auto" />
            </a>
            <p className="mt-4 hidden max-w-sm text-sm leading-relaxed text-cream/70 md:block">
              Trastevere's finest club. Aperitivi, cene, DJ set e serate live nel cuore di Roma.
              Prenota il tuo tavolo o organizza il tuo evento privato.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/mrbarry.roma"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-cream/15 px-4 transition hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@mrbarry.roma</span>
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
          {/* <div className="hidden md:block md:col-span-3">
            <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-accent">Esplora</p>
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
          </div> */}

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-subtitle text-xs uppercase tracking-[0.3em] text-accent">Contatti</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>MrRoma, Piazza dei Ponziani 8/C, Roma</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <a href="mailto:mrbarryroma@gmail.com" className="transition hover:text-accent">
                  mrbarryroma@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <a href="tel:+393453599345" className="transition hover:text-accent">
                  +39 345 359 9345
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="mt-0.5 h-4 w-4 text-accent" />
                <span>P.iva 14722821007</span>
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
