import React, { useState } from "react";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-indigo-500/40">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Community />
        <Events />
         <Projects />
         <Timeline />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

  function Projects() {
    const projects = [
      {
        title: "Campus Navigator App",
        description: "An intuitive map app to help new students navigate the NUS campus with ease.",
        image: "/project1.png",
      },
      {
        title: "Sustainability Tracker",
        description: "A tool used to promote sustainable practices among students on campus.",
        image: "/project2.png",
      },
      {
        title: "AI-Powered Tutor",
        description: "A personal learning assistant for students, powered by Google's AI technologies.",
        image: "/project3.png",
      },
    ];

    return (
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Our Projects</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                <a
                  href="#details"
                  className="mt-3 inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-400"
                >
                  View Details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function Timeline() {
    const steps = [
      {
        title: "Initial Consultation",
        description: "We start by understanding your needs and goals.",
        icon: "📋",
      },
      {
        title: "Project Scoping & Proposal",
        description: "We define the project scope and deliver a detailed proposal.",
        icon: "📝",
      },
      {
        title: "Development Sprints",
        description: "Our team works in agile sprints to build and iterate.",
        icon: "💻",
      },
      {
        title: "Final Showcase & Handover",
        description: "We present the final project and hand over all assets.",
        icon: "🎉",
      },
    ];
    return (
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Partner With Us: Our Timeline</h2>
        <p className="mt-2 text-slate-600">Here's how we work with our partners from idea to launch.</p>

        {/* Timeline container */}
        <div className="relative mt-8">
          {/* Center vertical line (hidden on small screens) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200" />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="flex flex-col items-start md:flex-row md:items-center"
                >
                  {/* Left side card (or spacer on the right) */}
                  <div
                    className={`md:w-1/2 md:px-8 ${
                      isLeft ? "md:pr-8 md:flex md:justify-end" : "md:pl-8"
                    } w-full`}
                  >
                    {isLeft && (
                      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow">
                        <h3 className="font-semibold text-slate-800">{step.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center marker */}
                  <div className="relative flex items-center justify-center md:mx-0 mx-auto z-10">
                    <div className="h-0 w-0 md:h-auto md:w-auto" />
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow`}> 
                      <span className="text-base">{step.icon}</span>
                    </div>
                  </div>

                  {/* Right side card (or spacer on the left) */}
                  <div
                    className={`md:w-1/2 md:px-8 ${
                      !isLeft ? "md:pl-8 md:flex md:justify-start" : "md:pr-8"
                    } w-full mt-4 md:mt-0`}
                  >
                    {!isLeft && (
                      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow">
                        <h3 className="font-semibold text-slate-800">{step.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white-200">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="inline-flex items-center gap-2">
          <GdscDots />
          <span className="font-bold">GDSC NUS</span>
        </a>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#community">
            Community
          </a>
          <a className="hover:text-white" href="#events">
            Events
          </a>
          <a className="hover:text-white" href="#projects">
            Projects
          </a>
        </div>
        <a
          href="#join"
          className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-blue-400"
        >
          Join Upcoming Events
        </a>
      </nav>
    </header>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "GDSC NUS has been an incredible place to learn and connect. The workshops are top-notch and the community is very supportive.",
      name: "Sarah L.",
      role: "Computer Science, Year 2",
      avatar: "/avatars/sarah.jpg",
    },
    {
      quote:
        "I've gained so many practical skills through the projects here. It's a great bridge between my coursework and the real world.",
      name: "Michael C.",
      role: "Information Systems, Year 3",
      avatar: "/avatars/michael.jpg",
    },
    {
      quote:
        "The networking opportunities are fantastic. I've met people from Google and other amazing tech companies through GDSC events.",
      name: "Emily T.",
      role: "Business Analytics, Year 4",
      avatar: "/avatars/emily.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">What Our Members Say</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <blockquote
            key={i}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-slate-700 shadow-sm"
          >
            <p className="text-sm italic text-slate-600">“{it.quote}”</p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={it.avatar}
                alt={it.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-slate-800">{it.name}</div>
                <div className="text-xs text-slate-500">{it.role}</div>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  const logos = [
    { src: "/partners/volunteer.png", alt: "Volunteer Switchboard" },
    { src: "/partners/siloam.png", alt: "SiloamXperience" },
    { src: "/partners/itsraining.png", alt: "ItsRainingRaincoats" },
    { src: "/partners/caring.png", alt: "Caring for Life" },
    { src: "/partners/asd.png", alt: "Action for Singapore Dogs" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 bg-slate-50">
      <h2 className="text-2xl font-semibold text-center">Our Partners</h2>
      <div className="mt-8 flex items-center justify-between gap-6 overflow-x-auto px-4">
        {logos.map((l, i) => (
          <div key={i} className="flex shrink-0 items-center justify-center px-4">
            <img src={l.src} alt={l.alt} className="h-16 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-[1.3fr_.9fr]"
    >
      {/* radial accents */}
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />

      <div>
        <h1 className="bg-gradient-to-r from-sky-400 via-emerald-300 to-amber-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Build. Learn. Connect.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Welcome to the Google Developer Student Club at the National
          University of Singapore. Join us to learn, build, and grow with a
          passionate community of developers.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#events"
            className="inline-flex items-center rounded-full bg-amber-300 px-4 py-2 font-semibold text-slate-900 hover:bg-amber-200"
          >
            See Events
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 font-semibold text-white hover:bg-white/5"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="md:justify-self-end">
        <div className="flex h-60 w-[360px] items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-500/15 to-sky-400/10 p-6 text-center md:h-64">
          <div>
            <div className="font-semibold">Add a club photo</div>
            <p className="mt-1 text-xs text-slate-400">
              Replace this box with an{" "}
              <code className="font-mono">&lt;img /&gt;</code> later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">About Us</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold">Our Mission</h3>
          <p className="mt-2 text-slate-600">
            To cultivate empathetic & passionate learners of technology while
            equipping them with relevant skills and industry insights.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5">
          <h3 className="text-sm font-semibold">Our Vision</h3>
          <p className="mt-2 text-slate-300">
            We strive for the betterment of society through technology.
          </p>
        </div>
      </div>
      <FAQ />
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "What is DSC?",
      a: "A student community supported by Google Developers to grow peer-to-peer learning and build real projects.",
    },
    {
      q: "How is DSC different?",
      a: "We emphasise hands-on learning through workshops, hacknights and open-source projects with impact.",
    },
    {
      q: "How did we start?",
      a: "We began as a small group of builders that wanted a welcoming space to learn modern dev tools together.",
    },
  ];
  return (
    <div className="mt-4 space-y-3">
      {items.map((it, i) => (
        <Accordion key={i} title={it.q}>
          <p className="text-slate-300">{it.a}</p>
        </Accordion>
      ))}
    </div>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between bg-slate-900 px-5 py-4 text-left text-white"
      >
        <span className="font-semibold">{title}</span>
        <span
          className={`transition-transform ${open ? "rotate-90" : "rotate-0"}`}
        >
          ▶
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden bg-slate-950/40 px-5 pb-5 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}

function Community() {
  const imgs = [
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529336953121-a9bf0127c2fc?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
  ];
  return (
    <section id="community" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Our Community In Action</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {imgs.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            <img
              className="h-60 w-full object-cover"
              src={src}
              alt="Community"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Events() {
  const upcoming = [
    {
      title: "Android Dev Workshop",
      date: "Oct 28, 2024",
      tag: "Workshop",
      description: "Join us for a hands-on workshop on building your first Android application with Kotlin.",
      color: "rose",
      icon: "📅",
    },
    {
      title: "Cloud Study Jam",
      date: "Nov 15, 2024",
      tag: "Study Jam",
      description: "A deep dive into Google Cloud Platform services. Perfect for beginners and experts alike.",
      color: "emerald",
      icon: "☁️",
    },
    {
      title: "Tech Talk: AI & ML",
      date: "Dec 05, 2024",
      tag: "Tech Talk",
      description: "Listen to industry experts discuss the latest trends and breakthroughs in AI and Machine Learning.",
      color: "amber",
      icon: "🔊",
    },
  ];

  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">Upcoming Events</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {upcoming.map((e, i) => {
          const colorClasses =
            e.color === "rose"
              ? "bg-rose-100 text-rose-600"
              : e.color === "emerald"
              ? "bg-emerald-100 text-emerald-600"
              : "bg-amber-100 text-amber-600";

          return (
            <article
              key={i}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colorClasses} shrink-0`} aria-hidden>
                  <span className="text-xl">{e.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-400">{e.date}</div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{e.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{e.description}</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#register"
                  className="block w-full rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-blue-400"
                >
                  Register Now
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-slate-200 px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3">
          <GdscDots />
          <div>
            <div className="font-semibold">GDSC NUS</div>
            <div className="text-xs text-slate-500">#TECHFORGOOD</div>
          </div>
        </div>
        <small className="text-slate-400">
          © {new Date().getFullYear()} GDSC NUS • Built with React + Vite
        </small>
      </div>
    </footer>
  );
}

function GdscDots() {
  const Dot = ({ c }: { c: string }) => (
    <span
      className="inline-block h-2.5 w-2.5 rounded-sm"
      style={{ background: c }}
    />
  );
  return (
    <span className="inline-flex items-center gap-1.5">
      <Dot c="#34a853" />
      <Dot c="#4285f4" />
      <Dot c="#fbbc05" />
      <Dot c="#ea4335" />
    </span>
  );
}
