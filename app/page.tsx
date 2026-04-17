import React from "react";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { AILab } from "@/components/ai-lab/AILab";
import { Projects } from "@/components/projects/Projects";
import { Experiments } from "@/components/experiments/Experiments";
import { RecruiterMode } from "@/components/recruiter-mode/RecruiterMode";
import { GithubProjects } from "@/components/github-loader/GithubProjects";
import { ExperienceTimeline } from "@/components/timeline/ExperienceTimeline";
import { Achievements } from "@/components/achievements/Achievements";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <div className="pb-20">
      <Hero />
      <About />
      <RecruiterMode />
      <AILab />
      <Projects />
      <Experiments />
      <GithubProjects />
      <ExperienceTimeline />
      <Achievements />
      <Contact />
    </div>
  );
}

