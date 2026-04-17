"use client";

import ReactMarkdown from "react-markdown";
import { useState } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ResumeChatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", text: trimmed }
    ];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: trimmed })
      });

      const data = (await res.json()) as { reply?: string };

      setMessages([
        ...newMessages,
        { role: "bot", text: data.reply ?? "Error generating response" }
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "bot", text: "Error getting response" }
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
      <h2 className="mb-1 text-lg font-semibold text-white">
        Ask Me About My Work
      </h2>
      <p className="mb-3 text-xs text-slate-400">
        Ask questions about my projects, skills, and experience.
      </p>

      <div className="mb-3 h-64 space-y-2 overflow-y-auto rounded-md border border-slate-800 bg-slate-950/70 p-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span className="text-sm text-slate-300">
              <ReactMarkdown>{m.text}</ReactMarkdown>
            </span>
          </div>
        ))}
        {loading && <p className="text-xs text-slate-400">Thinking...</p>}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-1 rounded bg-slate-800 p-2 text-white outline-none ring-1 ring-slate-700 focus:ring-purple-500"
          placeholder="Ask about my projects, skills, or experience..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="rounded bg-purple-600 px-3 py-2 text-white disabled:opacity-60"
        >
          Send
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {[
          "Explain your LSTM project",
          "What are your skills?",
          "Tell me about your internship"
        ].map((q) => (
          <button
            key={q}
            onClick={() => setInput(q)}
            className="rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-300 hover:border-slate-500"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

