"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { resumeOwner } from "@/data/resumeData";
import { Button } from "@/components/ui/Button";

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Failed to send message. Please email directly.");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Contact & Collaboration"
      subtitle="Reach out for AI Engineer, Data Science, and ML roles or collaborations."
    >
      <div className="grid gap-5 md:grid-cols-[1.2fr,1.4fr] text-xs">
        <Card className="space-y-2 p-5">
          <p className="text-sm font-semibold text-slate-50">
            {resumeOwner.name}
          </p>
          <p className="text-[11px] text-slate-300">
            {resumeOwner.location}
          </p>
          <p className="text-[11px] text-slate-300">
            Email:{" "}
            <a
              href={`mailto:${resumeOwner.email}`}
              className="font-semibold text-emerald-300"
            >
              {resumeOwner.email}
            </a>
          </p>
          <p className="text-[11px] text-slate-300">
            Phone: <span className="font-semibold">{resumeOwner.phone}</span>
          </p>
          <div className="mt-2 flex gap-2 text-[11px]">
            <a
              href={resumeOwner.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-600/80"
            >
              GitHub
            </a>
            <a
              href={resumeOwner.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-600/80"
            >
              LinkedIn
            </a>
          </div>
        </Card>

        <Card className="p-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-[11px] text-slate-300">
                  Name
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-purple-500/80"
                  />
                </label>
              </div>
              <div className="flex-1">
                <label className="block text-[11px] text-slate-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-purple-500/80"
                  />
                </label>
              </div>
            </div>
            <label className="block text-[11px] text-slate-300">
              Message
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-purple-500/80"
              />
            </label>
            <Button
              type="submit"
              variant="primary"
              disabled={status === "sending"}
              className="mt-1 self-start"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
            {status === "sent" && (
              <p className="text-[11px] text-emerald-400">
                Message sent. Thank you!
              </p>
            )}
            {status === "error" && error && (
              <p className="text-[11px] text-rose-400">{error}</p>
            )}
          </form>
        </Card>
      </div>
    </Section>
  );
};

