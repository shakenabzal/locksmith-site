"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  Car,
  Key,
  Building2,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-neutral-50 text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <Contact />
      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur border-b border-neutral-200 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold tracking-wide text-lg text-neutral-900">
          QuickKey Locksmith
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-neutral-600">
          <a href="#services" className="hover:text-neutral-900 transition">
            Services
          </a>
          <a href="#trust" className="hover:text-neutral-900 transition">
            Why Us
          </a>
          <a href="#contact" className="hover:text-neutral-900 transition">
            Contact
          </a>
        </nav>

        <a
          href="tel:+1234567890"
          className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold transition"
        >
          <Phone size={16} /> Call Now
        </a>

        <button
          className="md:hidden text-neutral-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-4 text-neutral-700">
          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>
          <a href="#trust" onClick={() => setOpen(false)}>
            Why Us
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 text-center bg-gradient-to-b from-white via-neutral-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight max-w-4xl mx-auto"
      >
        24/7 Emergency Locksmith Services You Can Trust
      </motion.h2>

      <p className="mt-6 text-neutral-600 text-lg max-w-2xl mx-auto">
        Locked out? Lost your keys? We respond fast with professional,
        transparent pricing and real local technicians.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="tel:+1234567890"
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition shadow-md"
        >
          Call (123) 456-7890
        </a>
        <a
          href="#services"
          className="border border-neutral-300 hover:border-neutral-400 px-8 py-4 rounded-full text-neutral-700 hover:text-neutral-900 transition"
        >
          View Services
        </a>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */

function Services() {
  return (
    <section id="services" className="py-28 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold text-center text-neutral-900 mb-16">
        Our Services
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        <Card
          icon={<Car size={28} />}
          title="Automotive"
          text="Car lockouts, ignition repair, key programming and replacement."
        />
        <Card
          icon={<Key size={28} />}
          title="Residential"
          text="Rekeying, lock repair, smart lock installation and upgrades."
        />
        <Card
          icon={<Building2 size={28} />}
          title="Commercial"
          text="Master key systems and high-security lock solutions."
        />
      </div>
    </section>
  );
}

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

function Card({ icon, title, text }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white border border-neutral-200 hover:border-neutral-300 transition rounded-2xl p-8 shadow-sm"
    >
      <div className="text-yellow-500 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-neutral-900 mb-3">
        {title}
      </h4>
      <p className="text-neutral-600 leading-relaxed">{text}</p>
    </motion.div>
  );
}

/* ================= TRUST SECTION ================= */

function TrustSection() {
  return (
    <section id="trust" className="py-24 px-6 bg-neutral-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <TrustItem
          icon={<ShieldCheck size={32} />}
          title="Licensed & Insured"
          text="Certified professionals you can rely on."
        />
        <TrustItem
          icon={<Clock size={32} />}
          title="Fast Response"
          text="Average arrival time under 30 minutes."
        />
        <TrustItem
          icon={<MapPin size={32} />}
          title="Local Experts"
          text="Serving your area 24/7 year-round."
        />
      </div>
    </section>
  );
}

function TrustItem({ icon, title, text }: CardProps) {
  return (
    <div>
      <div className="text-yellow-500 mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-neutral-900 mb-2">
        {title}
      </h4>
      <p className="text-neutral-600 text-sm">{text}</p>
    </div>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 text-center bg-white"
    >
      <h3 className="text-3xl font-semibold text-neutral-900 mb-6">
        Need Immediate Help?
      </h3>
      <p className="text-neutral-600 mb-10">
        Available 24 hours a day, 7 days a week.
      </p>
      <a
        href="tel:+1234567890"
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-full text-xl font-semibold transition shadow-md"
      >
        Call Now
      </a>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="border-t border-neutral-200 text-neutral-500 text-center py-8 text-sm bg-white">
      © 2026 QuickKey Locksmith. All rights reserved.
    </footer>
  );
}
