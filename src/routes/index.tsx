import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import type { FormEvent, HTMLAttributes } from "react";
import { useRef, useState } from "react";
import {
  Sparkles,
  Smile,
  Braces,
  Wand2,
  Baby,
  Gem,
  ShieldCheck,
  Award,
  Stethoscope,
  Clock,
  Phone,
  MapPin,
  Mail,
  ScanLine,
  Radio,
  Zap,
  Microscope,
  Star,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";

import heroSmile from "@/assets/hero-smile.jpg";
import dentist from "@/assets/maysa-01.png";
import clinicTech from "@/assets/clinic-tech.jpg";
import smileAfter from "@/assets/smile-after.jpg";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";

const clinicName = "Dra. Maysa Alves de Carlos";
const clinicDescription = "Dentista em Ribeirão Preto 24h";
const clinicWhatsApp = "5516993259612";
const clinicPhoneDisplay = "(16) 99325-9612";
const clinicAddress = "R55W+27 Jardim América, Ribeirão Preto - SP";
const clinicMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicAddress)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${clinicName} — ${clinicDescription}` },
      {
        name: "description",
        content:
          "Atendimento odontológico em Ribeirão Preto com agendamento pelo WhatsApp. Agende sua avaliação.",
      },
      { property: "og:title", content: `${clinicName} — ${clinicDescription}` },
      {
        property: "og:description",
        content: "Dentista em Ribeirão Preto com atendimento e agendamento direto pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-[var(--gradient-deep)] grid place-items-center text-white shadow-soft">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-display text-[15px] font-semibold tracking-tight text-deep">
            Dra. Maysa <span className="text-primary">Alves</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#tratamentos" className="hover:text-deep transition-colors">
            Tratamentos
          </a>
          <a href="#sobre" className="hover:text-deep transition-colors">
            Sobre
          </a>
          <a href="#resultados" className="hover:text-deep transition-colors">
            Resultados
          </a>
          <a href="#tecnologia" className="hover:text-deep transition-colors">
            Tecnologia
          </a>
          <a href="#contato" className="hover:text-deep transition-colors">
            Contato
          </a>
        </nav>
        <a
          href="#contato"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-deep text-white px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
        >
          Agendar
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* decorative orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl float-soft" />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-mint/30 blur-3xl float-soft"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-deep/10 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-deep"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {clinicDescription}
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-6 text-balance font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] text-deep"
          >
            Sorria com <span className="italic font-light text-primary">Confiança.</span>
            <br />
            Transforme seu{" "}
            <span className="relative inline-block">
              Sorriso
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path
                  d="M2 8 Q 100 -4 198 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-mint"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Odontologia de excelência com tecnologia de ponta e atendimento humanizado. Cada sorriso
            é cuidado com atenção, clareza e planejamento individual.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-2 rounded-full bg-deep text-white px-7 py-4 text-[15px] font-medium shadow-luxe hover:shadow-[0_20px_60px_-20px_var(--primary)] hover:-translate-y-0.5 transition-all"
            >
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shimmer transition-opacity" />
              Agende sua Avaliação Gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#tratamentos"
              className="text-sm font-medium text-deep hover:text-primary transition-colors inline-flex items-center gap-1.5"
            >
              Ver tratamentos <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.45 }}
            className="mt-12 grid grid-cols-3 max-w-md gap-6"
          >
            {[
              { k: "24h", l: "perfil de atendimento" },
              { k: "Rib.", l: "Ribeirão Preto" },
              { k: "WhatsApp", l: "agendamento direto" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-semibold text-deep">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-luxe ring-1 ring-deep/5">
            <img
              src={heroSmile}
              alt="Paciente com sorriso radiante e saudável"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent" />
          </div>

          {/* floating badge - quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 lg:-left-10 top-10 bg-white rounded-2xl shadow-soft p-4 flex items-center gap-3 ring-1 ring-border/60"
          >
            <div className="h-10 w-10 rounded-xl bg-mint/40 grid place-items-center text-deep">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-deep">Atendimento</div>
              <div className="text-muted-foreground">Ribeirão Preto 24h</div>
            </div>
          </motion.div>

          {/* floating badge - results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 lg:-right-6 bottom-10 bg-white rounded-2xl shadow-soft p-4 ring-1 ring-border/60 max-w-[200px]"
          >
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <div className="text-xs text-deep font-medium leading-snug">
              "Atendimento acolhedor e cuidado em cada detalhe."
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">— Paciente</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const treatments = [
  {
    icon: Smile,
    title: "Implantes Dentários",
    desc: "Reabilitação completa com implantes de titânio e coroas em zircônia, devolvendo função e estética.",
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    desc: "Protocolo seguro com até 8 tons mais claros, sem sensibilidade, em uma única sessão.",
  },
  {
    icon: Braces,
    title: "Ortodontia Invisível",
    desc: "Alinhadores transparentes Invisalign® planejados digitalmente para resultados previsíveis.",
  },
  {
    icon: Wand2,
    title: "Harmonização Facial",
    desc: "Toxina botulínica, preenchimentos e bioestimuladores integrados ao seu novo sorriso.",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    desc: "Atendimento lúdico e acolhedor para que cada criança ame cuidar dos próprios dentes.",
  },
  {
    icon: Gem,
    title: "Estética Avançada",
    desc: "Lentes de contato em porcelana e facetas ultrafinas desenhadas para o seu rosto.",
  },
];

function Treatments() {
  return (
    <section id="tratamentos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary">
            <span className="h-px w-8 bg-primary" /> Tratamentos
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-deep text-balance">
            Cada especialidade, executada com{" "}
            <span className="italic font-light text-primary">excelência.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Da primeira consulta ao acompanhamento, oferecemos um portfólio completo de tratamentos
            com padrão internacional.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {treatments.map((t) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              className="group relative rounded-3xl bg-card border border-border/70 p-8 hover:border-primary/40 hover:-translate-y-1 hover:shadow-luxe transition-all duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/10 to-mint/20 grid place-items-center text-deep group-hover:scale-110 transition-transform duration-500">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-deep">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
                Saiba mais <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutDentist() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md rounded-[2rem] overflow-hidden shadow-luxe">
            <img
              src={dentist}
              alt="Dra. Maysa Alves de Carlos, dentista"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 lg:right-10 bg-white rounded-2xl shadow-soft p-5 ring-1 ring-border/60 max-w-[220px]">
            <div className="flex items-center gap-2 text-deep">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm">Ribeirão Preto</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Atendimento odontológico com agendamento direto pelo WhatsApp.
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary">
            <span className="h-px w-8 bg-primary" /> Quem cuida de você
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-deep text-balance">
            {clinicName}
          </h2>
          <p className="mt-3 text-primary font-medium">{clinicDescription}</p>

          <p className="mt-7 text-muted-foreground text-lg leading-relaxed">
            Atendimento odontológico em Ribeirão Preto com foco em acolhimento, avaliação cuidadosa
            e orientação clara para cada etapa do tratamento.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Atendimento em Ribeirão Preto",
              "Agendamento direto pelo WhatsApp",
              "Avaliação individual do seu caso",
              "Perfil público disponível no Google Maps",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-deep">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-mint/40 grid place-items-center shrink-0">
                  <Check className="h-3 w-3 text-deep" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-deep/15 px-6 py-3 text-sm font-medium text-deep hover:bg-deep hover:text-white transition-colors"
          >
            Agendar avaliação <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section id="resultados" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary">
            <span className="h-px w-8 bg-primary" /> Antes & Depois
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-deep text-balance">
            Transformações reais.{" "}
            <span className="italic font-light text-primary">Resultados naturais.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Arraste o controle para revelar a transformação. Resultados obtidos em nossos pacientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch"
        >
          {/* Slider comparator */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-luxe ring-1 ring-deep/5 select-none group">
            <img
              src={smileAfter}
              alt="Resultado depois do tratamento"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={smileAfter}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover grayscale brightness-90 contrast-110"
                style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
              />
            </div>
            <div className="absolute top-4 left-4 text-[11px] font-semibold tracking-widest uppercase bg-white/90 backdrop-blur text-deep px-3 py-1.5 rounded-full">
              Antes
            </div>
            <div className="absolute top-4 right-4 text-[11px] font-semibold tracking-widest uppercase bg-deep text-white px-3 py-1.5 rounded-full">
              Depois
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-luxe"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white grid place-items-center shadow-luxe">
                <div className="flex gap-0.5 text-deep">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(+e.target.value)}
              aria-label="Comparar antes e depois"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>

          <div className="flex flex-col justify-between gap-6">
            {[
              {
                num: "01",
                title: "Diagnóstico digital 3D",
                desc: "Scaneamento intraoral e simulação do seu novo sorriso antes de iniciar.",
              },
              {
                num: "02",
                title: "Planejamento estético",
                desc: "Cada milímetro alinhado à proporção áurea do seu rosto.",
              },
              {
                num: "03",
                title: "Execução em consultório premium",
                desc: "Sessões confortáveis com sedação consciente quando desejado.",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="rounded-2xl bg-card border border-border/70 p-6 hover:border-primary/40 transition-colors"
              >
                <div className="text-xs font-mono text-primary">{s.num}</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-deep">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Paciente",
    img: patient1,
    stars: 5,
    text: "Resultado impecável e atendimento que me fez sentir cuidada do começo ao fim. Voltei a sorrir sem pensar duas vezes.",
  },
  {
    name: "Paciente",
    img: patient2,
    stars: 5,
    text: "Fiz implantes que pareciam impossíveis em outras clínicas. Equipe técnica, precisa e extremamente humana.",
  },
  {
    name: "Paciente",
    img: patient3,
    stars: 5,
    text: "Após 30 anos, finalmente um dentista que me ouviu. Tratamento sereno, ambiente sofisticado e resultado natural.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/40 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary">
            <span className="h-px w-8 bg-primary" /> Pacientes
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-deep text-balance">
            Histórias que falam por nós.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="rounded-3xl bg-card border border-border/70 p-8 hover:shadow-luxe transition-shadow"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-deep leading-relaxed text-[15px]">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border/60">
                <img
                  src={t.img}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-deep text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Paciente verificada</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const techItems = [
  {
    icon: ScanLine,
    title: "Scanner Intraoral 3D",
    desc: "Moldagens digitais precisas, sem desconforto da pasta tradicional.",
  },
  {
    icon: Radio,
    title: "Raio-X Digital",
    desc: "Até 90% menos radiação, com imagens em alta definição instantâneas.",
  },
  {
    icon: Zap,
    title: "Laser Odontológico",
    desc: "Procedimentos mais rápidos, recuperação suave e mínimo desconforto.",
  },
  {
    icon: Microscope,
    title: "Microscopia Clínica",
    desc: "Visão ampliada em cada detalhe para tratamentos verdadeiramente precisos.",
  },
];

function Technology() {
  return (
    <section id="tecnologia" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-luxe ring-1 ring-deep/5"
        >
          <img
            src={clinicTech}
            alt="Sala clínica com tecnologia odontológica avançada"
            width={1600}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent" />
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary">
            <span className="h-px w-8 bg-primary" /> Tecnologia & Infraestrutura
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-deep text-balance">
            Equipamentos que tornam o cuidado{" "}
            <span className="italic font-light text-primary">mais leve.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Investimos no que há de mais avançado para que seu tratamento seja preciso, confortável
            e previsível em cada etapa.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {techItems.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                className="group rounded-2xl bg-card border border-border/70 p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-deep text-white grid place-items-center group-hover:bg-primary transition-colors">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-deep">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Cta() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const treatment = String(formData.get("treatment") ?? "").trim();

    const message = [
      "Olá! Gostaria de agendar uma avaliação.",
      "",
      `Nome: ${name}`,
      `WhatsApp: ${phone}`,
      `E-mail: ${email || "Não informado"}`,
      `Tratamento de interesse: ${treatment}`,
    ].join("\n");

    window.open(
      `https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-12 lg:p-16 text-white"
          style={{ background: "var(--gradient-deep)" }}
        >
          {/* shimmer */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: "radial-gradient(600px 200px at 80% 0%, white, transparent 60%)",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/70">
                <span className="h-px w-8 bg-white/60" /> Comece agora
              </div>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-balance leading-[1.05]">
                Seu novo sorriso começa com uma{" "}
                <span className="italic font-light">avaliação.</span>
              </h2>
              <p className="mt-5 text-white/80 text-lg max-w-md">
                Agende sua primeira consulta sem custo. Conheça nosso espaço, nosso método e
                descubra o plano ideal para você.
              </p>

              <ul className="mt-10 space-y-4 text-sm">
                {[
                  { icon: Phone, label: clinicPhoneDisplay },
                  { icon: MapPin, label: clinicAddress, href: clinicMapsUrl },
                  { icon: Clock, label: "Atendimento odontológico 24h" },
                  { icon: Mail, label: "Agendamento pelo WhatsApp" },
                ].map((c) => (
                  <li key={c.label} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center backdrop-blur">
                      <c.icon className="h-4 w-4" />
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white underline-offset-4 hover:underline"
                      >
                        {c.label}
                      </a>
                    ) : (
                      <span className="text-white/90">{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white text-foreground p-7 sm:p-8 shadow-luxe"
            >
              <h3 className="font-display text-2xl font-semibold text-deep">
                Agende sua avaliação
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Retornamos em até 1 hora útil.</p>

              <div className="mt-6 space-y-4">
                <Field
                  label="Nome completo"
                  name="name"
                  placeholder="Como podemos te chamar"
                  autoComplete="name"
                  required
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="WhatsApp"
                    name="phone"
                    placeholder="(11) 90000-0000"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                  <Field
                    label="E-mail"
                    name="email"
                    placeholder="seu@email.com"
                    type="email"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="treatment" className="text-xs font-medium text-deep">
                    Tratamento de interesse
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  >
                    <option value="Avaliação geral">Avaliação geral</option>
                    <option value="Implantes dentários">Implantes dentários</option>
                    <option value="Clareamento">Clareamento</option>
                    <option value="Ortodontia invisível">Ortodontia invisível</option>
                    <option value="Lentes de contato">Lentes de contato</option>
                    <option value="Harmonização facial">Harmonização facial</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-deep text-white px-6 py-4 text-sm font-medium hover:bg-primary transition-colors group"
              >
                Quero agendar minha avaliação
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="mt-3 text-[11px] text-muted-foreground text-center">
                Ao enviar você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  inputMode,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-deep">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 text-sm">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-[var(--gradient-deep)] grid place-items-center text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display text-base font-semibold text-deep">
              Dra. Maysa <span className="text-primary">Alves</span>
            </span>
          </a>
          <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
            Atendimento odontológico em Ribeirão Preto com agendamento direto pelo WhatsApp.
          </p>
        </div>
        <div>
          <div className="font-semibold text-deep mb-3">Navegação</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href="#tratamentos" className="hover:text-deep">
                Tratamentos
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-deep">
                Sobre o dentista
              </a>
            </li>
            <li>
              <a href="#resultados" className="hover:text-deep">
                Resultados
              </a>
            </li>
            <li>
              <a href="#tecnologia" className="hover:text-deep">
                Tecnologia
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-deep mb-3">Contato</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>{clinicPhoneDisplay}</li>
            <li>Agendamento pelo WhatsApp</li>
            <li>
              <a
                href={clinicMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-deep"
              >
                {clinicAddress}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {clinicName}
        </span>
        <span>{clinicDescription}</span>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${clinicWhatsApp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 shadow-luxe pulse-ring hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">Fale no WhatsApp</span>
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      <Nav />
      <Hero />
      <Treatments />
      <AboutDentist />
      <BeforeAfter />
      <Testimonials />
      <Technology />
      <Cta />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
