import { ragChunks } from "@/data/resumeData";

// Lightweight keyword-based retrieval to simulate RAG.
// In a production setup, replace this with LangChain + FAISS/Chroma vector store.

function scoreChunk(query: string, chunk: string): number {
  const qTokens = query.toLowerCase().split(/\W+/).filter(Boolean);
  const cLower = chunk.toLowerCase();
  let score = 0;
  for (const t of qTokens) {
    if (cLower.includes(t)) score += 1;
  }
  return score;
}

export function retrieveContext(question: string, k = 3): string {
  const scored = ragChunks
    .map((chunk) => ({
      chunk,
      score: scoreChunk(question, chunk)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);

  return scored.map((s) => s.chunk).join("\n\n");
}

