import "../styles/job-visualizer-workspace.css";

export default function ResultPage() {
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
                    <span class="jv-badge">Senior</span>
                    <h3 class="jv-jobTitle">Senior Frontend Engineer</h3>

                    <ul class="jv-metaList">
                      <li><strong>Location:</strong> Remote (EU)</li>
                      <li><strong>Experience:</strong> 5–8 years</li>
                      <li><strong>Salary:</strong> €70k – €90k</li>
                    </ul>

                    <div class="jv-techStack">
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>CSS</span>
                      <span>REST</span>
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

                  <table class="jv-meaningTable">
                    <tbody>
                      <tr>
                        <td>Fast-paced environment</td>
                        <td>High workload & tight deadlines</td>
                      </tr>
                      <tr>
                        <td>Startup mentality</td>
                        <td>Unclear boundaries & shifting priorities</td>
                      </tr>
                      <tr>
                        <td>Self-motivated</td>
                        <td>Minimal guidance from management</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="jv-fitCard">
                  <div>
                    <h4>Good Fit If</h4>
                    <ul>
                      <li>You like autonomy</li>
                      <li>You are comfortable with ambiguity</li>
                      <li>You enjoy fast delivery cycles</li>
                    </ul>
                  </div>

                  <div>
                    <h4>Not a Fit If</h4>
                    <ul>
                      <li>You need strict role definitions</li>
                      <li>You prefer low-pressure environments</li>
                      <li>You expect close mentoring</li>
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
