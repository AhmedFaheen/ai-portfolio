import { NextResponse } from "next/server";
import { fetchGithubRepos } from "@/lib/github";

export async function GET() {
  const repos = await fetchGithubRepos();
  return NextResponse.json({ repos });
}

