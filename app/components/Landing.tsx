"use client";

import { useEffect } from "react";
import { site, services, stack, approach } from "@/lib/site";

function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="grid h-8 w-8 place-items-center rounded-lg text-sm font-black text-black"
        style={{ background: "linear-gradient(135deg,#fb923c,#f43f5e)" }}
      >
        SF
      </span>
      <span className="text-lg font-bold tracking-tight">
        StackForge <span className="text-orange-400">Labs</span>
      </span>
    </span>
  );
}

export default function Landing() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative z-10">
      <span className="blob" style={{ width: 340, height: 340, background: "#fb923c", top: -40, right: -60 }} />
      <span className="blob" style={{ width: 300, height: 300, background: "#38bdf8", top: 700, left: -80, animationDelay: "-8s" }} />

      {/* nav */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0c12]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <div className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#approach" className="hover:text-white">Approach</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
          <a href="#contact" className="rounded-lg px-4 py-2 text-sm font-semibold text-black" style={{ background: "linear-gradient(135deg,#fb923c,#f43f5e)" }}>
            Get in touch
          </a>
        </nav>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-16 text-center">
        <p className="reveal mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/60">
          Software Development Studio
        </p>
        <h1 className="reveal mx-auto max-w-4xl bg-gradient-to-r from-orange-300 via-rose-300 to-sky-300 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-6xl">
          {site.tagline}
        </h1>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-white/60">{site.intro}</p>
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="rounded-xl px-6 py-3 font-semibold text-black" style={{ background: "linear-gradient(135deg,#fb923c,#f43f5e)" }}>
            Start a project
          </a>
          <a href="#services" className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/80 hover:bg-white/5">
            See what we do
          </a>
        </div>
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">{s}</span>
          ))}
        </div>
      </section>

      {/* services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="reveal text-center text-3xl font-bold">What we build</h2>
        <p className="reveal mx-auto mt-2 max-w-xl text-center text-white/55">Custom software across the Microsoft stack — designed, built and deployed properly.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-orange-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* approach */}
      <section id="approach" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="reveal text-center text-3xl font-bold">Why StackForge Labs</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {approach.map((a, i) => (
            <div key={a.title} className="reveal rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
              <div className="text-2xl font-black text-orange-400">0{i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-white/55">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* about */}
      <section id="about" className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="reveal text-3xl font-bold">About</h2>
        <p className="reveal mx-auto mt-4 text-white/60">
          StackForge Labs is a software studio focused on custom .NET and React
          applications. With five years of engineering across the Microsoft stack
          and Azure, we turn business requirements into clean, maintainable systems
          that teams can rely on — and keep building on.
        </p>
      </section>

      {/* contact */}
      <section id="contact" className="mx-auto max-w-3xl px-5 py-20 text-center">
        <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-rose-500/10 p-10">
          <h2 className="text-3xl font-bold">Let&apos;s build something solid.</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/60">Tell us what you need — internal tool, web app, API, or an Azure deployment. We&apos;ll take it from requirements to production.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${site.email}`} className="rounded-xl px-6 py-3 font-semibold text-black" style={{ background: "linear-gradient(135deg,#fb923c,#f43f5e)" }}>
              Email us
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/80 hover:bg-white/5">
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-white/40">{site.location}</p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {site.name}. Forged with .NET & React.
      </footer>
    </div>
  );
}
