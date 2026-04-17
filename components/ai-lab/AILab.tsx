import React from "react";
import { Section } from "@/components/ui/Section";
import ResumeChatbot from "@/components/ai-lab/ResumeChatbot";

export const AILab: React.FC = () => {
  return (
    <Section
      id="ai-lab"
      eyebrow="AI LAB"
      title="Ask Me Anything About My Work"
      subtitle="Ask questions about my projects, skills, and experience."
    >
      <ResumeChatbot />
    </Section>
  );
};

