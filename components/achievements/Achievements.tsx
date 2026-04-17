import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { achievements } from "@/data/resumeData";

export const Achievements: React.FC = () => {
  return (
    <Section
      id="achievements"
      eyebrow="ACHIEVEMENTS"
      title="Recognition & Milestones"
      subtitle="Signals of impact and performance across academics and internships."
    >
      <Card className="flex flex-wrap gap-3 p-5 text-xs">
        {achievements.map((a) => (
          <div
            key={a}
            className="flex min-w-[220px] flex-1 items-center gap-3 rounded-2xl bg-slate-950/80 px-3 py-2"
          >
            <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-emerald-300" />
            <p className="text-slate-100">{a}</p>
          </div>
        ))}
      </Card>
    </Section>
  );
};

