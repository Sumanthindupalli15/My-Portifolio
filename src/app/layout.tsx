import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Indupalli Sumanth | Software Engineer",
  description:
    "Software Engineer with 2+ years of experience building scalable applications. Specializing in Java, Angular, Node.js, and PostgreSQL.",
  keywords: [
    "Indupalli Sumanth",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Angular",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Indupalli Sumanth" }],
  openGraph: {
    title: "Indupalli Sumanth | Software Engineer",
    description:
      "Software Engineer with 2+ years of experience building scalable applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {/* Noise texture overlay */}
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
