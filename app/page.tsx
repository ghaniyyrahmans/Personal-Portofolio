import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Developer Portfolio",
  description:
    "Discover the projects and technical work of Ghaniyyir Rahman Sudarsono in backend development, full-stack applications, data engineering, and cybersecurity.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Projects limit={3} />
      <Certificates limit={3} />
      <Footer />
    </main>
  );
}
