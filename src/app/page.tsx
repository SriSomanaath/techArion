"use client";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import ServicesList from "@/sections/ServicesList";
import ContactUs from "@/sections/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServicesList />
      <ContactUs />
    </main>
  );
}
