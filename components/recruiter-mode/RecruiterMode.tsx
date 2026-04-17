"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { resumeOwner, resumeSummary, topSkills } from "@/data/resumeData";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export const RecruiterMode: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const bestProjects = projects.slice(0, 3);

  return (
    <Section
      id="recruiter-mode"
      eyebrow="RECRUITER MODE"
      title="Recruiter-Optimized Snapshot"
      subtitle="Toggle a compressed view with top skills, best projects, and a clear contact action."
    >
      <Card className="p-5 text-xs">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Recruiter Mode
            </p>
            <p className="text-sm font-semibold text-slate-50">
              {resumeOwner.name} · Generative AI / ML / Data Science
            </p>
          </div>
          <button
            onClick={() => setEnabled((v) => !v)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] ${
              enabled
                ? "border-emerald-500/70 bg-emerald-900/40 text-emerald-100"
                : "border-slate-600/70 bg-slate-900/60 text-slate-200"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                enabled ? "bg-emerald-400" : "bg-slate-500"
              }`}
            />
            {enabled ? "Enabled" : "Disabled"}
          </button>
        </div>

        {enabled && (
          <div className="space-y-4">
            <p className="text-[11px] text-slate-200">
              {resumeSummary.trim().slice(0, 260)}...
            </p>

            <div className="grid gap-4 md:grid-cols-[1.4fr,1.2fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Best Projects
                </p>
                <ul className="mt-1 space-y-1.5">
                  {bestProjects.map((p) => (
                    <li key={p.id}>
                      <span className="font-semibold text-slate-50">
                        {p.name}
                      </span>
                      <span className="text-slate-400">
                        {" "}
                        – {p.problem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Top Skills
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {topSkills.slice(0, 8).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-100 ring-1 ring-emerald-500/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-slate-300">
                Ready for roles in Generative AI, Machine Learning, NLP, and Data Science.
              </p>

              <div className="flex gap-2">
                {/* Scroll to Contact Form */}
                <Button
                  variant="primary"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Let’s Connect
                </Button>

                {/* Direct Email Option */}
                <Button
                  variant="primary"
                  onClick={() => {
                    const subject = encodeURIComponent("Interview Opportunity for AI Engineer");
                    const body = encodeURIComponent(
                      "Hello Ahmed,\n\nI came across your portfolio and would like to connect regarding an opportunity.\n\nBest regards,"
                    );

                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${resumeOwner.email}&su=${subject}&body=${body}`,
                      "_blank"
                    );
                  }}
                >
                  Email Me  
                </Button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </Section>
  );
};