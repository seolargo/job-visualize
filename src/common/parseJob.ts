export type ParsedJob = {
  title: string;
  seniority: string | null;
  location: string | null;
  experience: string | null;
  salary: string | null;
  techStack: string[];
  jargon: { phrase: string; meaning: string }[];
  goodFit: string[];
  notFit: string[];
};

const JARGON_MAP: Record<string, string> = {
  "fast-paced": "High workload & tight deadlines",
  "fast paced": "High workload & tight deadlines",
  "self-motivated": "Minimal guidance from management",
  "self motivated": "Minimal guidance from management",
  "startup mentality": "Unclear boundaries & shifting priorities",
  "wear many hats": "You'll be doing multiple jobs for one salary",
  rockstar: "Unrealistic expectations, no extra pay",
  ninja: "Unrealistic expectations, no extra pay",
  "work hard, play hard": "Long hours dressed up as fun",
  "other duties as assigned": "Undefined scope creep",
  "competitive salary": "Salary won't be disclosed upfront",
  "flexible hours": "Expect to be reachable outside 9-5",
  "dynamic environment": "Priorities change constantly",
  "team player": "Expected to cover for under-staffing",
  "detail-oriented": "Zero tolerance for mistakes",
  "results-driven": "Output matters more than hours or wellbeing",
  "wide range of responsibilities": "Understaffed team, unclear role",
};

const TECH_KEYWORDS = [
  "React", "Vue", "Angular", "Svelte", "Solid", "TypeScript", "JavaScript",
  "Node.js", "Python", "Java", "Go", "Rust", "C++", "C#", "Ruby", "PHP",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "GraphQL", "REST", "SQL",
  "AWS", "GCP", "Azure", "Docker", "Kubernetes", "CSS", "HTML",
  "Next.js", "Tailwind", "Kafka", "Terraform", "Swift", "Kotlin",
  "Tableau", "Excel", "Figma", "Scala", "Spark", "Salesforce",
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function parseJobPosting(raw: string): ParsedJob {
  const text = raw.trim();
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const firstLine = lines[0] ?? "Untitled Role";

  const seniorityMatch = firstLine.match(/\b(Senior|Junior|Lead|Staff|Principal|Mid-level|Intern)\b/i);
  const seniority = seniorityMatch ? capitalize(seniorityMatch[0]) : null;

  const title = firstLine.replace(/[-–—]\s*(Remote|Hybrid|Onsite).*$/i, "").trim() || "Untitled Role";

  const locationMatch = text.match(/\bRemote(?:\s*\([^)]+\))?|\bHybrid\b|\bOnsite\b|\bOn-site\b/i);
  const location = locationMatch ? locationMatch[0] : null;

  const experienceMatch = text.match(/\d+\+?\s*(?:(?:[-–]|to)\s*\d+\+?\s*)?years?/i);
  const experience = experienceMatch ? experienceMatch[0].trim() : null;

  const salaryMatch = text.match(/[$€£]\s?\d[\d,.]*\s?[kK]?\s*[-–to]{1,3}\s*[$€£]?\s?\d[\d,.]*\s?[kK]?/);
  const salary = salaryMatch ? salaryMatch[0].trim() : null;

  const techStack = TECH_KEYWORDS.filter((kw) =>
    new RegExp(`\\b${kw.replace(".", "\\.").replace("+", "\\+")}\\b`, "i").test(text)
  );

  const lowerText = text.toLowerCase();
  const jargon = Object.entries(JARGON_MAP)
    .filter(([phrase]) => lowerText.includes(phrase))
    .map(([phrase, meaning]) => ({ phrase: capitalize(phrase), meaning }));

  const goodFit: string[] = [];
  const notFit: string[] = [];
  const jargonText = jargon.map((j) => j.phrase.toLowerCase()).join(" ");

  if (jargonText.includes("self")) {
    goodFit.push("You like autonomy");
    notFit.push("You expect close mentoring");
  }
  if (jargonText.includes("fast")) {
    goodFit.push("You enjoy fast delivery cycles");
    notFit.push("You prefer low-pressure environments");
  }
  if (jargonText.includes("startup")) {
    goodFit.push("You are comfortable with ambiguity");
    notFit.push("You need strict role definitions");
  }
  if (goodFit.length === 0) {
    goodFit.push("The role matches your listed skills");
    notFit.push("You're looking for a different tech stack");
  }

  return { title, seniority, location, experience, salary, techStack, jargon, goodFit, notFit };
}
