"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X, Car, Key, Building2, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">QuickKey Locksmith</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="tel:+1234567890"
          className="hidden md:flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-xl font-semibold"
        >
          <Phone size={18} /> Call Now
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white p-4 space-y-4">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6"
      >
        24/7 Emergency Locksmith Services
      </motion.h2>
      <p className="mb-8 text-lg">
        Fast response. Upfront pricing. Professional service.
      </p>
      <a
        href="tel:+1234567890"
        className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold"
      >
        <Phone /> Call (123) 456-7890
      </a>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-16">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-10">
        <Card
          icon={<Car size={32} />}
          title="Automotive"
          text="Car lockouts, ignition repair, key programming."
        />
        <Card
          icon={<Key size={32} />}
          title="Residential"
          text="Rekeying, lock repair, smart locks."
        />
        <Card
          icon={<Building2 size={32} />}
          title="Commercial"
          text="Master key systems, high-security locks."
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
    <div className="bg-gray-100 p-8 rounded-2xl shadow text-center">
      <div className="mb-4 text-yellow-500">{icon}</div>
      <h4 className="font-bold text-xl mb-3">{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-gray-100 py-24 px-6 text-center">
      <ShieldCheck size={48} className="mx-auto mb-6 text-yellow-500" />
      <h3 className="text-3xl font-bold mb-6">Licensed & Insured</h3>
      <p className="max-w-3xl mx-auto">
        Trusted locksmith professionals serving your area 24/7.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-center bg-gray-900 text-white"
    >
      <h3 className="text-3xl font-bold mb-6">Need Immediate Help?</h3>
      <p className="mb-8">Call now for fast assistance.</p>
      <a
        href="tel:+1234567890"
        className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold"
      >
        Call Now
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      © 2026 QuickKey Locksmith. All rights reserved.
    </footer>
  );
}
