import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="Applied AI & Analytics Projects"
      subtitle="From LSTM rainfall forecasting to NLP dashboards, explainable car price advisors, and HR analytics."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col gap-2 p-5 text-xs text-slate-200"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {project.name}
            </h3>
            {project.highlight && (
              <p className="text-[11px] text-emerald-300">{project.highlight}</p>
            )}
            <p className="mt-1 text-slate-300">{project.problem}</p>
            <p className="mt-1 text-[11px] text-slate-300">
              <span className="font-semibold text-slate-100">
                Dataset:
              </span>{" "}
              {project.dataset}
            </p>
            <p className="text-[11px] text-slate-300">
              <span className="font-semibold text-slate-100">
                Model:
              </span>{" "}
              {project.model}
            </p>
            <p className="text-[11px] text-slate-300">
              <span className="font-semibold text-slate-100">
                Metrics:
              </span>{" "}
              {project.metrics.join(", ")}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-100 ring-1 ring-slate-600/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

