"use client";
import React, { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import type { GithubRepo } from "@/lib/github";

export const GithubProjects: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setRepos(data.repos ?? []);
      } catch {
        setRepos([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Section
      id="github"
      eyebrow="GITHUB"
      title="Live GitHub Projects"
      subtitle="Repositories auto-loaded from GitHub to reflect ongoing work and code quality."
    >
      <Card className="p-5 text-xs">
        {loading && <p className="text-slate-400">Loading repositories...</p>}
        {!loading && repos.length === 0 && (
          <p className="text-slate-400">
            No repositories found. Set NEXT_PUBLIC_GITHUB_USERNAME to enable this
            section.
          </p>
        )}
        <div className="mt-2 space-y-3">
          {repos.slice(0, 8).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3 hover:border-purple-500/70"
            >
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  {repo.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  {repo.description || "No description provided."}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between text-[11px] text-slate-300">
                <span className="rounded-full bg-slate-900/80 px-2 py-1">
                  {repo.language || "Unknown"}
                </span>
                <span className="mt-1 text-xs text-amber-400">
                  ★ {repo.stargazers_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Card>
    </Section>
  );
};

