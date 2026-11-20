import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ghaniyyir Rahman Sudarsono, a backend developer and data enthusiast building reliable, scalable digital systems.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "80px", minHeight: "80vh" }}>
        <About />
      </div>
      <Footer />
    </main>
  );
}
