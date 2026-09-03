import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Preloader } from "@/components/site/Preloader";
import {
  WhatIs,
  WhyJoin,
  NotJustCoding,
  HowItWorks,
  GlobalConnection,
  SaltaEvent,
  Challenges,
  People,
  Collaborators,
  FAQ,
  FinalCTA,
} from "@/components/site/sections/Sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-deep-blue text-foreground overflow-x-clip">
      <Preloader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatIs />
        <WhyJoin />
        <NotJustCoding />
        <HowItWorks />
        <GlobalConnection />
        <SaltaEvent />
        <Challenges />
        <People />
        <Collaborators />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
