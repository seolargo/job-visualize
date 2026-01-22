import { createSignal } from "solid-js";
import "../styles/workspace.css";

export default function Workspace() {
  const [jobText, setJobText] = createSignal("");

  return (
    <div class="jv-layout">
      {/* Sidebar */}
      <aside class="jv-sidebar">
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
            <a class="jv-link jv-linkActive" href="#">
              <span class="material-symbols-outlined">work</span>
              My Ads
            </a>
            <a class="jv-link" href="#">
              <span class="material-symbols-outlined">bar_chart</span>
              Analytics
            </a>
            <a class="jv-link" href="#">
              <span class="material-symbols-outlined">palette</span>
              Brand Assets
            </a>
            <a class="jv-link" href="#">
              <span class="material-symbols-outlined">payments</span>
              Billing
            </a>
          </nav>
        </div>

        <div class="jv-sidebarBottom">
          <button class="jv-primaryBtn">New Asset</button>
        </div>
      </aside>

      {/* Main */}
      <main class="jv-main">
        <header class="jv-topbar">
          <div class="jv-breadcrumb">
            Dashboard / <strong>Workspace</strong>
          </div>
        </header>

        <div class="jv-content">
          <div>
            <h1 class="jv-title">Transform Your Job Ads</h1>
            <p class="jv-subtitle">
              Turn text-heavy descriptions into clear, high-performing visual assets in seconds.
            </p>
          </div>

          <section class="jv-card">
            <div class="jv-cardBody">
              <div class="jv-label">Job Description Source</div>

              <textarea
                class="jv-textarea"
                placeholder="Paste your job description or LinkedIn URL here..."
                value={jobText()}
                onInput={(e) => setJobText(e.currentTarget.value)}
              />
            </div>

            <div class="jv-cardFooter">
              <div>
                <button class="jv-iconBtn" title="Paste link">
                  <span class="material-symbols-outlined">link</span>
                </button>
                <button class="jv-iconBtn" title="Upload">
                  <span class="material-symbols-outlined">upload_file</span>
                </button>
              </div>

              <button class="jv-cta" onClick={() => console.log(jobText())}>
                <span class="material-symbols-outlined">magic_button</span>
                Visualize &amp; Analyze
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
