import { createMemo, For, Show } from "solid-js";
import "../styles/job-visualizer-workspace.css";
import { currentJob } from "~/common/jobStore";
import type { ParsedJob } from "~/common/parseJob";

const DEMO: ParsedJob = {
  title: "Senior Frontend Engineer",
  seniority: "Senior",
  location: "Remote (EU)",
  experience: "5–8 years",
  salary: "€70k – €90k",
  techStack: ["React", "TypeScript", "CSS", "REST"],
  jargon: [
    { phrase: "Fast-paced environment", meaning: "High workload & tight deadlines" },
    { phrase: "Startup mentality", meaning: "Unclear boundaries & shifting priorities" },
    { phrase: "Self-motivated", meaning: "Minimal guidance from management" },
  ],
  goodFit: ["You like autonomy", "You are comfortable with ambiguity", "You enjoy fast delivery cycles"],
  notFit: ["You need strict role definitions", "You prefer low-pressure environments", "You expect close mentoring"],
};

export default function ResultPage() {
  const job = createMemo<ParsedJob>(() => currentJob()?.parsed ?? DEMO);

  return (
    <div class="jv-root">
      <div class="jv-shell">
        {/* Sidebar (aynı) */}
        <aside class="jv-sidebar">
          <div class="jv-sidebarInner">
            <div>
              <div class="jv-brand">
                <div class="jv-logo">
                  <span class="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <div class="jv-brandTitle">Job Visualizer</div>
                  <div class="jv-brandSub">HR Workspace</div>
                </div>
              </div>

              <nav class="jv-nav">
                <a class="jv-navItem" href="#">Brand Assets</a>
                <a class="jv-navItem" href="#">Billing</a>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main class="jv-main">
          <header class="jv-topbar">
            <div class="jv-breadcrumb">
              <a class="jv-breadcrumbLink" href="/">Workspace</a>
              <span class="jv-breadcrumbSep">/</span>
              <span class="jv-breadcrumbCurrent">Result</span>
            </div>
          </header>

          <div class="jv-content">
            <h2 class="jv-h2">Job Visualization Result</h2>

            <div class="jv-resultGrid">
              {/* LEFT – VISUAL CARD */}
              <section class="jv-resultLeft">
                <div class="jv-visualCard">
                  <div class="jv-visualHero">
                    <div class="jv-heroOverlay"></div>
                  </div>

                  <div class="jv-visualBody">
                    <Show when={job().seniority}>
                      <span class="jv-badge">{job().seniority}</span>
                    </Show>
                    <h3 class="jv-jobTitle">{job().title}</h3>

                    <ul class="jv-metaList">
                      <Show when={job().location}>
                        <li><strong>Location:</strong> {job().location}</li>
                      </Show>
                      <Show when={job().experience}>
                        <li><strong>Experience:</strong> {job().experience}</li>
                      </Show>
                      <Show when={job().salary}>
                        <li><strong>Salary:</strong> {job().salary}</li>
                      </Show>
                    </ul>

                    <div class="jv-techStack">
                      <For each={job().techStack}>{(tech) => <span>{tech}</span>}</For>
                    </div>
                  </div>
                </div>

                <div class="jv-resultActions">
                  <button class="jv-cta">
                    <span class="material-symbols-outlined">download</span>
                    Download PNG
                  </button>

                  <button class="jv-secondaryBtn">
                    <span class="material-symbols-outlined">link</span>
                    Copy Share Link
                  </button>
                </div>
              </section>

              {/* RIGHT – ANALYSIS */}
              <section class="jv-resultRight">
                <div class="jv-analysisCard">
                  <h3 class="jv-h3">What This Job Really Means</h3>

                  <Show
                    when={job().jargon.length > 0}
                    fallback={<p class="jv-muted">No corporate jargon detected in this posting.</p>}
                  >
                    <table class="jv-meaningTable">
                      <tbody>
                        <For each={job().jargon}>
                          {(row) => (
                            <tr>
                              <td>{row.phrase}</td>
                              <td>{row.meaning}</td>
                            </tr>
                          )}
                        </For>
                      </tbody>
                    </table>
                  </Show>
                </div>

                <div class="jv-fitCard">
                  <div>
                    <h4>Good Fit If</h4>
                    <ul>
                      <For each={job().goodFit}>{(item) => <li>{item}</li>}</For>
                    </ul>
                  </div>

                  <div>
                    <h4>Not a Fit If</h4>
                    <ul>
                      <For each={job().notFit}>{(item) => <li>{item}</li>}</For>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
