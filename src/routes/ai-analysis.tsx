// src/routes/ai-analysis.tsx
import type { Component } from "solid-js";
import { For } from "solid-js";
import { A } from "@solidjs/router";
import "../styles/job-visualizer-workspace.css";

const I18N = {
  // Top bar
  "aiAnalysis.brand": "VisualAd AI",
  "aiAnalysis.action.downloadPng": "Download PNG",
  "aiAnalysis.action.shareLink": "Share Link",

  // Breadcrumbs
  "aiAnalysis.breadcrumb.dashboard": "Dashboard",
  "aiAnalysis.breadcrumb.current": "AI Analysis & Results",

  // Page heading
  "aiAnalysis.title": "Job Visual Asset Preview",
  "aiAnalysis.subtitle":
    "AI has successfully processed your description. Review the visual output and strategic analysis below.",

  // Left preview header
  "aiAnalysis.preview.label": "LINKEDIN OPTIMIZED (1.91:1)",
  "aiAnalysis.preview.badge1": "SENIOR ROLE",
  "aiAnalysis.preview.badge2": "REMOTE FIRST",
  "aiAnalysis.preview.jobTitle": "Senior Frontend\nDeveloper",
  "aiAnalysis.preview.compensation": "$120k – $150k • Equity Package",
  "aiAnalysis.preview.tech1": "React",
  "aiAnalysis.preview.tech2": "TypeScript",
  "aiAnalysis.preview.tech3": "Tailwind",
  "aiAnalysis.preview.hiringAt": "HIRING AT",
  "aiAnalysis.preview.company": "TechFlow",

  // Regenerate bar
  "aiAnalysis.regen.text": "Need a different look? Try regenerating.",
  "aiAnalysis.regen.cta": "Regenerate",

  // Truth translator
  "aiAnalysis.truth.title": 'THE "TRUTH" TRANSLATOR',
  "aiAnalysis.truth.colSays": "WHAT THE AD SAYS",
  "aiAnalysis.truth.colMeans": "WHAT IT REALLY MEANS",
  "aiAnalysis.truth.row1.left": '"Fast-paced environment"',
  "aiAnalysis.truth.row1.right": "High workload; expect\nconsistent overtime.",
  "aiAnalysis.truth.row2.left": '"Wear many hats"',
  "aiAnalysis.truth.row2.right": "Roles aren't defined; startup\nchaos/multitasking.",
  "aiAnalysis.truth.row3.left": '"Self-starter wanted"',
  "aiAnalysis.truth.row3.right": "No formal onboarding; figure it\nout yourself.",

  // Candidate matching
  "aiAnalysis.match.title": "CANDIDATE MATCHING",
  "aiAnalysis.match.idealFor": "IDEAL FOR",
  "aiAnalysis.match.notFor": "NOT FOR",
  "aiAnalysis.match.ideal.1": "Product-minded engineers",
  "aiAnalysis.match.ideal.2": "Design-system lovers",
  "aiAnalysis.match.ideal.3": "Async communication fans",
  "aiAnalysis.match.not.1": "Strict 9-to-5 seekers",
  "aiAnalysis.match.not.2": "Corporate bureaucracy fans",
  "aiAnalysis.match.not.3": "Individual contributors only",

  // Toast
  "aiAnalysis.toast.title": "Ready to post?",
  "aiAnalysis.toast.desc": "PNG is formatted for LinkedIn posts.",
} as const;

const AiAnalysis: Component = () => {
  const truthRows = [
    {
      leftKey: "aiAnalysis.truth.row1.left",
      rightKey: "aiAnalysis.truth.row1.right",
    },
    {
      leftKey: "aiAnalysis.truth.row2.left",
      rightKey: "aiAnalysis.truth.row2.right",
    },
    {
      leftKey: "aiAnalysis.truth.row3.left",
      rightKey: "aiAnalysis.truth.row3.right",
    },
  ] as const;

  const idealFor = [
    "aiAnalysis.match.ideal.1",
    "aiAnalysis.match.ideal.2",
    "aiAnalysis.match.ideal.3",
  ] as const;

  const notFor = [
    "aiAnalysis.match.not.1",
    "aiAnalysis.match.not.2",
    "aiAnalysis.match.not.3",
  ] as const;

  return (
    <div class="jv-root">
      {/* Top App Bar */}
      <header class="jv-appbar">
        <div class="jv-appbarInner">
          <div class="jv-appBrand">
            <div class="jv-appMark" aria-hidden="true">
              {/* simple cube mark */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22V12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M21 7L12 12L3 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="jv-appName">{I18N["aiAnalysis.brand"]}</div>
          </div>

          <div class="jv-appActions">
            <button class="jv-btn jv-btnPrimaryTop" type="button">
              <span class="material-symbols-outlined" aria-hidden="true">
                download
              </span>
              <span>{I18N["aiAnalysis.action.downloadPng"]}</span>
            </button>

            <button class="jv-btn" type="button">
              <span class="material-symbols-outlined" aria-hidden="true">
                share
              </span>
              <span>{I18N["aiAnalysis.action.shareLink"]}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Page */}
      <div class="jv-page">
        {/* Breadcrumbs */}
        <div class="jv-crumbs">
          <A href="/" class="">
            {I18N["aiAnalysis.breadcrumb.dashboard"]}
          </A>
          <span aria-hidden="true">/</span>
          <strong>{I18N["aiAnalysis.breadcrumb.current"]}</strong>
        </div>

        <h1 class="jv-pageTitle">{I18N["aiAnalysis.title"]}</h1>
        <p class="jv-pageDesc">{I18N["aiAnalysis.subtitle"]}</p>

        <div class="jv-previewGrid">
          {/* LEFT */}
          <section>
            <div class="jv-previewCard">
              <div class="jv-previewHeader">
                <div class="jv-previewLabel">{I18N["aiAnalysis.preview.label"]}</div>
                <div class="jv-windowDots" aria-hidden="true">
                  <span class="jv-dot jv-dotRed" />
                  <span class="jv-dot jv-dotYellow" />
                  <span class="jv-dot jv-dotGreen" />
                </div>
              </div>

              <div class="jv-previewCanvas">
                <div class="jv-previewInner">
                  <div>
                    <div class="jv-pillRow">
                      <span class="jv-pill">{I18N["aiAnalysis.preview.badge1"]}</span>
                      <span class="jv-pill">{I18N["aiAnalysis.preview.badge2"]}</span>
                    </div>

                    <h2 class="jv-previewTitle">
                      {I18N["aiAnalysis.preview.jobTitle"]}
                    </h2>

                    <div class="jv-previewSub">
                      {I18N["aiAnalysis.preview.compensation"]}
                    </div>

                    <div class="jv-techIcons" aria-label="Tech stack">
                      <div class="jv-techIcon" title={I18N["aiAnalysis.preview.tech1"]}>
                        {/* icon placeholder */}
                        <span class="material-symbols-outlined" aria-hidden="true">
                          code
                        </span>
                      </div>
                      <div class="jv-techIcon" title={I18N["aiAnalysis.preview.tech2"]}>
                        <span class="material-symbols-outlined" aria-hidden="true">
                          integration_instructions
                        </span>
                      </div>
                      <div class="jv-techIcon" title={I18N["aiAnalysis.preview.tech3"]}>
                        <span class="material-symbols-outlined" aria-hidden="true">
                          palette
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* empty spacer to mimic screenshot spacing */}
                  <div />
                </div>

                {/* Hiring badge */}
                <div class="jv-hiringBadge">
                  <div class="jv-hiringIcon" aria-hidden="true">
                    <span class="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <div class="jv-hiringTextSmall">
                      {I18N["aiAnalysis.preview.hiringAt"]}
                    </div>
                    <div class="jv-hiringTextBig">
                      {I18N["aiAnalysis.preview.company"]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regenerate bar */}
            <div class="jv-regenerateBar">
              <div class="jv-regenerateLeft">
                <span class="material-symbols-outlined" aria-hidden="true">
                  auto_awesome
                </span>
                <span>{I18N["aiAnalysis.regen.text"]}</span>
              </div>

              <button class="jv-regenerateBtn" type="button">
                <span class="material-symbols-outlined" aria-hidden="true">
                  refresh
                </span>
                <span>{I18N["aiAnalysis.regen.cta"]}</span>
              </button>
            </div>
          </section>

          {/* RIGHT */}
          <aside class="jv-rightStack">
            {/* Truth Translator */}
            <section class="jv-panelCard" aria-label={I18N["aiAnalysis.truth.title"]}>
              <div class="jv-cardPad">
                <div class="jv-cardTitleRow">
                  <span class="material-symbols-outlined" aria-hidden="true">
                    translate
                  </span>
                  <div class="jv-cardTitle">{I18N["aiAnalysis.truth.title"]}</div>
                </div>

                <div class="jv-tabRow" role="row">
                  <div class="jv-tab">{I18N["aiAnalysis.truth.colSays"]}</div>
                  <div class="jv-tab jv-tabActive">
                    {I18N["aiAnalysis.truth.colMeans"]}
                  </div>
                </div>
              </div>

              <div class="jv-truthRows">
                <For each={truthRows}>
                  {(row) => (
                    <div class="jv-truthRow">
                      <div class="jv-truthLeft">{I18N[row.leftKey]}</div>
                      <div class="jv-truthRight">{I18N[row.rightKey]}</div>
                    </div>
                  )}
                </For>
              </div>
            </section>

            {/* Candidate Matching */}
            <section class="jv-panelCard" aria-label={I18N["aiAnalysis.match.title"]}>
              <div class="jv-matchHeader">
                <span class="material-symbols-outlined" aria-hidden="true">
                  group
                </span>
                <span>{I18N["aiAnalysis.match.title"]}</span>
              </div>

              <div class="jv-matchBody">
                <div class="jv-matchGrid">
                  <div>
                    <div class="jv-matchColTitle">
                      <span class="jv-dotOk" aria-hidden="true">
                        ✓
                      </span>
                      <span>{I18N["aiAnalysis.match.idealFor"]}</span>
                    </div>

                    <ul class="jv-matchList">
                      <For each={idealFor}>
                        {(k) => (
                          <li class="jv-matchItem">
                            <span class="jv-miniBullet" aria-hidden="true" />
                            <span>{I18N[k]}</span>
                          </li>
                        )}
                      </For>
                    </ul>
                  </div>

                  <div>
                    <div class="jv-matchColTitle">
                      <span class="jv-dotNo" aria-hidden="true">
                        ×
                      </span>
                      <span>{I18N["aiAnalysis.match.notFor"]}</span>
                    </div>

                    <ul class="jv-matchList">
                      <For each={notFor}>
                        {(k) => (
                          <li class="jv-matchItem">
                            <span class="jv-miniBullet jv-miniBulletRed" aria-hidden="true" />
                            <span>{I18N[k]}</span>
                          </li>
                        )}
                      </For>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom toast */}
            <div class="jv-toast" role="note" aria-label={I18N["aiAnalysis.toast.title"]}>
              <div>
                <p class="jv-toastTitle">{I18N["aiAnalysis.toast.title"]}</p>
                <p class="jv-toastDesc">{I18N["aiAnalysis.toast.desc"]}</p>
              </div>

              <button class="jv-toastIconBtn" type="button" aria-label="Action">
                <span class="material-symbols-outlined" aria-hidden="true">
                  rocket_launch
                </span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AiAnalysis;
