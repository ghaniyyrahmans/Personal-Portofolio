import { Inter, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ghaniyyirrahmans.me"),
  alternates: { canonical: "/" },
  title: {
    default: "Ghaniyyir Rahman Sudarsono | Backend Developer",
    template: "%s | Ghaniyyir Rahman Sudarsono",
  },
  description:
    "Portfolio of Ghaniyyir Rahman Sudarsono, a backend and full-stack developer focused on scalable systems, data engineering, and cybersecurity.",
  keywords: [
    "Ghaniyyir Rahman Sudarsono",
    "backend developer",
    "full-stack developer",
    "data engineering",
    "cybersecurity",
    "TypeScript developer",
    "Go developer",
    "PostgreSQL",
  ],
  authors: [{ name: "Ghaniyyir Rahman Sudarsono" }],
  creator: "Ghaniyyir Rahman Sudarsono",
  publisher: "Ghaniyyir Rahman Sudarsono",
  icons: { icon: "/icon.png" },
  openGraph: {
    type: "website",
    url: "https://ghaniyyirrahmans.me",
    title: "Ghaniyyir Rahman Sudarsono | Backend Developer",
    description:
      "Explore the projects, technical skills, and experience of backend developer Ghaniyyir Rahman Sudarsono.",
    siteName: "Ghaniyyir Rahman Sudarsono Portfolio",
    images: [{ url: "/images/hero/myphoto.png", width: 450, height: 450, alt: "Ghaniyyir Rahman Sudarsono" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghaniyyir Rahman Sudarsono | Backend Developer",
    description:
      "Portfolio covering backend development, full-stack applications, data engineering, and cybersecurity.",
    images: ["/images/hero/myphoto.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ghaniyyir Rahman Sudarsono",
              jobTitle: "Backend Developer",
              description:
                "Backend and full-stack developer focused on scalable systems, data engineering, and cybersecurity.",
              image: "/images/hero/myphoto.png",
              sameAs: [
                "https://github.com/ghaniyyrahmans",
                "https://www.linkedin.com/in/ghaniyyrahmans/",
                "https://www.instagram.com/ghaniyyrahmans/",
              ],
              knowsAbout: [
                "Backend development",
                "Full-stack development",
                "Data engineering",
                "Cybersecurity",
                "TypeScript",
                "Go",
                "PostgreSQL",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
