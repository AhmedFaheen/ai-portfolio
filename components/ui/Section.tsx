import React from "react";

type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  eyebrow,
  subtitle,
  children
}) => {
  return (
    <section id={id} className="mx-auto mb-16 max-w-6xl px-4">
      <div className="mb-6 space-y-1">
        {eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-400 md:text-[15px]">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

