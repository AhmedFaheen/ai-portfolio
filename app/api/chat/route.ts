import { NextResponse } from "next/server";
import { resumeContext } from "@/data/resumeContext";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "system",
            content: `
You are an AI assistant answering questions about Nalgar Ahmed Faheen.

Rules:
- Answer ONLY from resume
- Be clear and concise
- If unrelated, say: "I can only answer questions about my profile"

Resume:
${resumeContext}
`
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      "Error generating response";

    return NextResponse.json({ reply });

  } catch (error: any) {
    return NextResponse.json({
      reply: "API Error: " + error.message
    });
  }
}