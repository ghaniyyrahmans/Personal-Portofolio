import Navbar from "@/components/Navbar";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "View professional and technical certificates earned by Ghaniyyir Rahman Sudarsono.",
};

export default function CertificatesPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "120px", minHeight: "80vh", maxWidth: "1200px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>
        <Link href="/#certificate" className="btn btn-outline" style={{ display: "inline-flex", marginBottom: "20px" }}>
          <i className="ri-arrow-left-line"></i> Back to Home
        </Link>
        <Certificates hideViewAll={true} />
      </div>
      <Footer />
    </main>
  );
}
