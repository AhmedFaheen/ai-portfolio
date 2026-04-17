import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { experienceTimeline } from "@/data/resumeData";

export const ExperienceTimeline: React.FC = () => {
  return (
    <Section
      id="experience"
      eyebrow="EXPERIENCE"
      title="Internships & Training Timeline"
      subtitle="Progression across data analytics, AI engineering, and entrepreneurship."
    >
      <Card className="p-5 text-xs">
        <ol className="relative border-l border-slate-700/80">
          {experienceTimeline.map((item) => (
            <li key={item.company} className="mb-6 ml-4">
              <div className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-slate-900 bg-gradient-to-tr from-purple-400 via-pink-400 to-sky-400" />
              <p className="text-[11px] text-slate-400">{item.period}</p>
              <h3 className="text-sm font-semibold text-slate-50">
                {item.role}
              </h3>
              <p className="text-[11px] text-slate-300">{item.company}</p>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-300">
                {item.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Card>
    </Section>
  );
};

