import "../app/globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nalgar Ahmed Faheen | AI Engineer Portfolio Lab",
  description:
    "Futuristic AI Engineer portfolio platform for Nalgar Ahmed Faheen – Generative AI, Machine Learning, NLP, and Data Science.",
  openGraph: {
    title: "Nalgar Ahmed Faheen | AI Engineer Portfolio Lab",
    description:
      "AI product-style portfolio showcasing Generative AI, ML, NLP, and Data Science projects.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ai-bg text-slate-100">
        {children}
      </body>
    </html>
  );
}

