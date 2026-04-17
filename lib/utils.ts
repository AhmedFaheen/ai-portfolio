import OpenAI from "openai";

export const hasOpenAIKey = Boolean(process.env.OPENAI_API_KEY);

const openaiClient = hasOpenAIKey
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  : null;

export async function callChatModel(params: {
  systemPrompt: string;
  userPrompt: string;
  temperature?: number;
}): Promise<{ content: string; mock: boolean }> {
  if (!openaiClient) {
    return {
      mock: true,
      content:
        "Mock response: configure OPENAI_API_KEY to enable real LLM-based responses."
    };
  }

  const completion = await openaiClient.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: params.temperature ?? 0.3,
    messages: [
      { role: "system", content: params.systemPrompt },
      { role: "user", content: params.userPrompt }
    ]
  });

  const content = completion.choices[0]?.message?.content ?? "";
  return { content, mock: false };
}

export function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

