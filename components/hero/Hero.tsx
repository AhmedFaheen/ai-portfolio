"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { resumeOwner } from "@/data/resumeData";
import Image from "next/image"; // ✅ ADDED

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const Points = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Points),
  { ssr: false }
);

const PointMaterial = dynamic(
  () => import("@react-three/drei").then((mod) => mod.PointMaterial),
  { ssr: false }
);

const roles = [
  "GenAI Engineer",
  "Machine Learning Engineer",
  "NLP Engineer",
  "Data Scientist"
];

const TypingRole: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const role = roles[index];
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      i++;
      setDisplayed(role.slice(0, i));
      if (i >= role.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1800);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <span className="font-mono text-sm text-sky-300">
      {displayed}
      <span className="ml-0.5 animate-pulse text-slate-400">▌</span>
    </span>
  );
};

function NeuralParticleField() {
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    const arr: number[] = [];
    for (let i = 0; i < 1800; i++) {
      arr.push(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 6
      );
    }
    setPositions(new Float32Array(arr));
  }, []);

  if (!positions) return null;

  return (
    <Points positions={positions}>
      <PointMaterial
        size={0.03}
        color="#a855f7"
        transparent
        depthWrite={false}
      />
    </Points>
  );
}

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative mx-auto mb-16 mt-8 flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center">
      
      {/* LEFT SIDE (EXISTING CARD) */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-ai-border bg-slate-950/70 p-6 shadow-glass md:p-8">
        <div className="pointer-events-none absolute inset-0">
          {mounted && typeof window !== "undefined" && (
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
              <ambientLight intensity={0.45} />
              <directionalLight position={[4, 4, 2]} intensity={0.6} />
              <NeuralParticleField />
            </Canvas>
          )}
        </div>

        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-900/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-purple-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Bangalore · AI Engineer Portfolio Lab
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              {resumeOwner.name}
            </h1>
            <p className="mt-2 text-sm font-medium text-slate-200 md:text-base">
              {resumeOwner.title}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                FOCUS
              </span>
              <TypingRole />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("ai-lab")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              AI Lab
            </Button>
            <a
              href={resumeOwner.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-slate-400"
            >
              GitHub
            </a>
            <Button
              variant="ghost"
              onClick={() =>
                document
                  .getElementById("recruiter-mode")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Recruiter Mode
            </Button>
            <a
              href="/resume.pdf"
              download="Nalgar_Ahmed_Faheen_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-slate-400"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE (PROFILE IMAGE) ✅ ADDED */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <Image
          src="/profile.jpeg"
          alt="Nalgar Ahmed Faheen"
          width={200}
          height={200}
          className="rounded-full border-2 border-purple-500 shadow-lg"
        />
      </div>

    </section>
  );
};