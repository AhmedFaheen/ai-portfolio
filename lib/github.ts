const USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME || "AhmedFaheen";

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

export async function fetchGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json"
        },
        cache: "no-store"
      }
    );

    if (!res.ok) {
      console.error("GitHub API Error:", res.status);
      return [];
    }

    const data = (await res.json()) as GithubRepo[];

    // 🔥 IMPORTANT: Force include key projects
    const priorityProjects = [
      "Short-Term-Rainfall-Prediction-LSTM",
      "nlp-pipeline-text-vectorization-dashboard",
      "Indian-Car-Resale-Price-Prediction",
      "AI-Hand-Gesture-Recognition",
      "AI-Personal-Voice-Assistant"
    ];

    // ❌ Remove only unwanted repos
    const filtered = data.filter(
      (repo) =>
        repo.name !== "localrepo" &&
        repo.name !== "apnacollege-demo"
    );

    // 🔥 Sort: priority projects first
    const sorted = filtered.sort((a, b) => {
      const aPriority = priorityProjects.includes(a.name) ? 1 : 0;
      const bPriority = priorityProjects.includes(b.name) ? 1 : 0;
      return bPriority - aPriority;
    });

    // ✅ Final cleaned list
    const cleanedRepos = sorted
      .map((repo) => ({
        ...repo,
        description: repo.description || "No description available"
      }))
      .slice(0, 8); // limit for UI

    return cleanedRepos;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}