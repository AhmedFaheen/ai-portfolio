# ai-portfolio – Nalgar Ahmed Faheen

Premium AI Engineer portfolio platform for **Nalgar Ahmed Faheen** – Generative AI Engineer, Data Scientist, and AI/ML Engineer.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Three.js**. Backend features **Next.js API routes** with placeholders for **OpenAI / Gemini**, **LangChain**, and vector DBs (FAISS / Chroma).

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion
- **3D / Graphics**: Three.js via @react-three/fiber and @react-three/drei
- **Backend**: Next.js API routes (`pages/api`)
- **AI Integration Placeholders**:
  - OpenAI / Gemini via `OPENAI_API_KEY`
  - LangChain-style RAG in `lib/rag.ts`
  - Vector DB (FAISS / Chroma) – ready to plug in

## Features

- Futuristic dark **AI system interface** with neon gradients and glassmorphism
- **Hero** section with:
  - Three.js neural particle background
  - Animated typing roles (GenAI Engineer, ML Engineer, NLP Engineer, Data Scientist)
  - CTAs: View Projects, AI Lab, GitHub, Recruiter Mode, Download Resume
- **AI Lab** with interactive demos:
  - Resume Analyzer (`/api/resume-analyze`)
  - Text Summarizer (`/api/summarize`)
  - Prompt Playground (`/api/generate`)
  - AI Portfolio Chatbot (`/api/chatbot`, RAG placeholder)
- **Projects**: Rainfall LSTM, NLP Pipeline Dashboard, Car Price AI Advisor, HR Analytics Dashboard
- **Experiments**: Model comparison table (ARIMA vs LSTM) and hyperparameter snapshots
- **Recruiter Mode**: Toggleable snapshot with top skills, best projects, quick summary, and hire button
- **GitHub Loader**: Auto-loads repos from GitHub via `/api/github`
- **Experience Timeline**, **Achievements**, and **Contact** section with form
- Floating **AI Portfolio Chatbot** using RAG-style context over resume data

## Getting Started

### 1. Install dependencies

From the `ai-portfolio` directory:

```bash
npm install
```

### 2. Environment variables

Create a `.env.local` file in the project root:

```bash
OPENAI_API_KEY=YOUR_API_KEY_HERE          # optional; enables real LLM responses
NEXT_PUBLIC_GITHUB_USERNAME=AhmedFaheen
NEXT_PUBLIC_GITHUB_URL=https://github.com/AhmedFaheen
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/nalgar-ahmed-faheen-2a28b022a/
```

If `OPENAI_API_KEY` is not set, the AI Lab and chatbot fall back to **mock responses**, so the UI remains fully interactive.

### 3. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to see the portfolio.

### 4. Build for production

```bash
npm run build
npm start
```

## Deployment

Recommended: **Vercel**

1. Push this project to GitHub.
2. Import the repo into Vercel as a Next.js app.
3. Set environment variables (`OPENAI_API_KEY`, `NEXT_PUBLIC_GITHUB_*`).
4. Deploy with default build settings (`npm run build`).

The portfolio is fully responsive, SEO-friendly, and optimized with lazy-loaded sections and smooth animations.

