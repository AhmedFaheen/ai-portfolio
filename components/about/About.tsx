import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { resumeOwner, resumeSummary, topSkills } from "@/data/resumeData";

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      eyebrow="ABOUT"
      title="Who is Nalgar Ahmed Faheen?"
      subtitle="Generative AI engineer building LLM-integrated systems, NLP pipelines, time-series models, and data-driven analytics."
    >
      <div className="grid gap-6 md:grid-cols-[1.6fr,1.2fr]">
        <Card className="p-6 text-sm leading-relaxed text-slate-200">
          <p className="whitespace-pre-line">{resumeSummary.trim()}</p>
          <p className="mt-4">
            I specialize in{" "}
            <span className="font-semibold text-emerald-300">
              Generative AI, Machine Learning, NLP, and Data Science
            </span>
            , taking problems from raw data to evaluated models and production-
            ready interfaces. My projects span{" "}
            <span className="font-semibold">
              LSTM-based rainfall forecasting, interactive NLP dashboards, HR
              analytics, and explainable ML advisors
            </span>
            , all grounded in real-world datasets.
          </p>
          <p className="mt-4">
            I enjoy translating ambiguous questions into structured experiments,
            combining{" "}
            <span className="font-semibold">
              Python, TensorFlow, scikit-learn, HuggingFace, LangChain, SQL,
              Power BI, and cloud fundamentals
            </span>{" "}
            to build AI systems that stakeholders can trust and understand.
          </p>
        </Card>
        <div className="space-y-4 text-xs">
          <Card className="p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Snapshot
            </p>
            <p className="mt-2 text-slate-100">
              {resumeOwner.name} – {resumeOwner.location}
            </p>
            <p className="mt-1 text-slate-300">
              Email:{" "}
              <a
                href={`mailto:${resumeOwner.email}`}
                className="font-semibold text-emerald-300"
              >
                {resumeOwner.email}
              </a>
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Focus Areas & Skills
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-100 ring-1 ring-slate-600/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

