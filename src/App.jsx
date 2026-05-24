import ParticlesBg from "./components/ParticlesBg";
//import mineSafety from "./assets/mine-safety.jpg"
//import irrigation from "./assets/irrigation.jpg"
import hyacinth from "./assets/hyacinth.jpeg"
import enactus from "./assets/enactus.jpeg"
import turnall from "./assets/turnall.jpg"
import { useState } from "react"

export default function App() {
  const [selected, setSelected] = useState(null)

  // =========================
  // PROJECTS
  // =========================
  const projects = [
    {
      title: "Smart Proactive Mine Safety System",
      desc: "Intelligent, IoT-based gas detection and mine monitoring robot for enhanced worker and mine safety. With rise in dust related illnesses, this solution aimes to reduce them through early detection and proactive safety measures. The system uses a network of sensors to monitor air quality and detect hazardous gases, while the mobile robot can navigate through mine tunnels to provide real-time data and alerts to workers and management.",
      image: "/src/assets/projects/mine-safety.jpg"
    },
    {
      title: "Smart Irrigation System",
      desc: "IoT-based automated irrigation and remote monitoring for smart farming. This helps farmers to monitor irrigation remotely with manual override.",
      image: "/src/assets/projects/irrigation.jpg"
    },
    {
      title: "Hyacinth Pulp Making Plant at Van Leer Zimbabwe",
      desc: "Designed a pilot plant for hyacinth pulp production on behalf of Enactus university of Zimbabwe in attempt to eradicate water hyacinth problems. Water hyacinth is an invasive species with high regenerative growth hence the need to eradicate it using waste to value principles.",
      image: hyacinth
    },
    {
      title: "ENACTUS University of Zimbabwe Projects",
      desc: "Carried out various projects under engineering section aimed at addressing social issues through innovative solutions and these include smart AI-based breathlyzer, lithium-battery recycling and egg crate making using hyacinth. Project leader for Delta Smart Drinking and Moderation Challenge which came second in National  Competitions. Part of the team which won early stage Enactus world cup competitions on entrepreneurship, sustainability and innovation.",
      image: enactus
    },
    {
      title: "Turnall Holdings Plant Process Analysis",
      desc: "Conducted a comprehensive analysis of the manufacturing process to identify inefficiencies and recommend improvements. As a team of three, we did time and motion study to identify critical bottlenecks that slowed the process and we proposed solutions which would improve the throughput. We also carried out an automation audit and identied gaps which could hinder full autmation of the plant.",
      image: turnall
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">

      {/* =========================
          PARTICLES BACKGROUND
      ========================= */}
      <div className="fixed inset-0 -z-10">
        <ParticlesBg />
      </div>

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black tracking-widest">
            OWEN MANDEBVU
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">

          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Open for Innovation & Collaborations
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              OWEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">M</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mb-10">
              Mechatronics Engineering student building AI, IoT, Robotics, and Industrial Automation systems for real-world impact.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
              >
                View Projects
              </a>

              <a
                href="mailto:owennmandebvu@gmail.com"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="flex justify-center">
            <div className="w-[380px] h-[500px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 text-center">

              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-5xl font-black mb-8">
                OM
              </div>

              <h2 className="text-3xl font-bold">Owen Mandebvu</h2>
              <p className="text-cyan-300 mb-10">
                Engineer • Innovator • Entrepreneur • Visionary for Great Africa
              </p>

              <div className="flex justify-between">
                <div>
                  <h3 className="text-3xl text-cyan-400 font-bold">5+</h3>
                  <p className="text-sm text-slate-300">Projects</p>
                </div>

                <div>
                  <h3 className="text-3xl text-purple-400 font-bold">3+</h3>
                  <p className="text-sm text-slate-300">Competitions</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-10">About Me</h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            I am a Mechatronics Engineering student at the University of Zimbabwe with a strong passion for intelligent systems, automation, and real-world engineering innovation. My technical foundation spans across PLC programming, Automation Studio, MATLAB, SolidWorks, and Python programming for IoT and AI systems. I am actively involved in Enactus University of Zimbabwe where I contribute to innovation-driven projects focused on sustainability, entrepreneurship, and engineering solutions for real-world challenges. My goal is to become a multidisciplinary engineer creating impactful technologies for Africa and beyond.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelected(p)}
                className="cursor-pointer rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:scale-105 transition"
              >

                <img src={p.image} className="h-44 w-full object-cover" alt={p.title} />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-300 text-sm">{p.desc}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-16">Skills</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "IoT",
              "Robotics",
              "Programming",
              "Industrial Automation",
              "Process Analysis and Optimization",
              "Embedded Systems",
              "Entrepreneurship"
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold">{s}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 text-center">

        <h2 className="text-5xl font-black mb-6">Contact</h2>

        <p className="text-slate-300 mb-3">
          Email: <span className="text-cyan-400">owennmandebvu@gmail.com</span>
        </p>

        <p className="text-slate-300 mb-3">
          Phone: <span className="text-cyan-400">+263 784 882 920</span>
        </p>

        <p className="text-slate-300 mb-10">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/owenmandebvu"
            target="_blank"
            className="text-cyan-400 underline"
          >
            www.linkedin.com/in/owenmandebvu
          </a>
        </p>

        <a
          href="mailto:owennmandebvu@gmail.com"
          className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-2xl"
        >
          Send Email
        </a>

      </section>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6">

          <div className="bg-white/10 border border-white/20 p-10 rounded-2xl max-w-lg">

            <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
            <p className="text-slate-300 mb-6">{selected.desc}</p>

            <button
              onClick={() => setSelected(null)}
              className="px-5 py-2 bg-cyan-500 text-black rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  )
}