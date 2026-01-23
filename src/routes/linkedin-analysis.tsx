import { createSignal, For, Show } from "solid-js";
import "../styles/linkedin-analysis.css";

// i18n keys
const I18N = {
  "brand": "JobVisual AI",
  "nav.home": "Home",
  "nav.network": "My Network",
  "nav.jobs": "Jobs",
  "nav.messaging": "Messaging",
  "nav.notifications": "Notifications",
  "nav.me": "Me",
  
  "profile.name": "Alex Smith",
  "profile.title": "Product Designer at Creative Studio",
  "profile.views": "Profile views",
  "profile.impressions": "Post impressions",
  "profile.premium": "Try Premium for $0",
  "profile.items": "My items",
  
  "share.placeholder": "Start a post",
  "share.media": "Media",
  "share.event": "Event",
  "share.article": "Write article",
  
  "post.author": "Sarah Jenkins",
  "post.role": "HR Manager",
  "post.company": "Talent Acquisition at TechFlow Inc.",
  "post.time": "1h",
  "post.content": "We are growing! 🚀 Join our product team as a Senior Designer. Check out the details below. We're looking for someone to lead our vision and build amazing user experiences!",
  
  "reactions.count": "Alex Smith and 124 others",
  "reactions.comments": "45 comments",
  "reactions.reposts": "12 reposts",
  
  "actions.like": "Like",
  "actions.comment": "Comment",
  "actions.repost": "Repost",
  "actions.send": "Send",
  
  "sidebar.addFeed": "Add to your feed",
  "sidebar.follow": "Follow",
  "sidebar.viewAll": "View all recommendations",
  "sidebar.promoted": "Promoted",
  
  "analysis.brand": "VisualAd AI",
  "analysis.dashboard": "Dashboard",
  "analysis.current": "AI Analysis & Results",
  "analysis.title": "Job Visual Asset Preview",
  "analysis.subtitle": "AI has successfully processed your description. Review the visual output and strategic analysis below.",
  "analysis.download": "Download PNG",
  "analysis.share": "Share Link",
  "analysis.format": "LINKEDIN OPTIMIZED (1.91:1)",
  "analysis.tip": "Need a different look? Try regenerating.",
  "analysis.regen": "Regenerate",
  "analysis.truth.title": 'THE "TRUTH" TRANSLATOR',
  "analysis.truth.says": "WHAT THE AD SAYS",
  "analysis.truth.means": "WHAT IT REALLY MEANS",
  "analysis.match.title": "CANDIDATE MATCHING",
  "analysis.match.ideal": "IDEAL FOR",
  "analysis.match.notFor": "NOT FOR",
  "analysis.ready.title": "Ready to post?",
  "analysis.ready.subtitle": "PNG is formatted for LinkedIn posts.",
};

// Types
interface JobData {
  title: string;
  company: string;
  location: string;
  salaryRange: string;
  experience: string;
  teamSize: string;
  tags: string[];
  techs: { name: string; color: string }[];
}

interface TruthRow {
  says: string;
  means: string;
}

export default function LinkedinAnalysis() {
  // Dynamic job data
  const [jobData, setJobData] = createSignal<JobData>({
    title: "Senior Product\nDesigner",
    company: "TechFlow",
    location: "New York / Remote",
    salaryRange: "$140k - $180k",
    experience: "5+ Years",
    teamSize: "12 Members",
    tags: ["SENIOR ROLE", "REMOTE FIRST"],
    techs: [
      { name: "Figma", color: "#F24E1E" },
      { name: "React", color: "#61DAFB" },
      { name: "Tailwind", color: "#06B6D4" },
    ],
  });

  const [truthRows] = createSignal<TruthRow[]>([
    { says: '"Fast-paced environment"', means: "High workload; expect consistent overtime." },
    { says: '"Wear many hats"', means: "Roles aren't defined; startup chaos/multitasking." },
    { says: '"Self-starter wanted"', means: "No formal onboarding; figure it out yourself." },
  ]);

  const [idealFor] = createSignal<string[]>([
    "Product-minded engineers",
    "Design-system lovers",
    "Async communication fans",
  ]);

  const [notFor] = createSignal<string[]>([
    "Strict 9-to-5 seekers",
    "Corporate bureaucracy fans",
    "Individual contributors only",
  ]);

  // Edit mode
  const [isEditing, setIsEditing] = createSignal(false);
  const [editForm, setEditForm] = createSignal<JobData>({ ...jobData() });

  const handleSave = () => {
    setJobData({ ...editForm() });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...jobData() });
    setIsEditing(false);
  };

  return (
    <div class="app-root">
      {/* Left Panel: LinkedIn Feed Mockup */}
      <div class="linkedin-panel">
        <div class="linkedin-wrapper">
          {/* LinkedIn Header */}
          <header class="ln-header">
            <div class="ln-header-inner">
              <div class="ln-logo-search">
                <div class="ln-logo">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div class="ln-search">
                  <span class="ln-search-icon">🔍</span>
                  <input type="text" placeholder="Search" class="ln-search-input" />
                </div>
              </div>
              <nav class="ln-nav">
                <a href="#" class="ln-nav-item ln-nav-active">
                  <span class="ln-nav-icon">🏠</span>
                  <span class="ln-nav-label">{I18N["nav.home"]}</span>
                </a>
                <a href="#" class="ln-nav-item">
                  <span class="ln-nav-icon">👥</span>
                  <span class="ln-nav-label">{I18N["nav.network"]}</span>
                </a>
                <a href="#" class="ln-nav-item">
                  <span class="ln-nav-icon">💼</span>
                  <span class="ln-nav-label">{I18N["nav.jobs"]}</span>
                </a>
                <a href="#" class="ln-nav-item">
                  <span class="ln-nav-icon">💬</span>
                  <span class="ln-nav-label">{I18N["nav.messaging"]}</span>
                </a>
                <a href="#" class="ln-nav-item ln-nav-notif">
                  <span class="ln-nav-icon">🔔</span>
                  <span class="ln-nav-label">{I18N["nav.notifications"]}</span>
                  <span class="ln-notif-dot"></span>
                </a>
                <div class="ln-nav-divider"></div>
                <div class="ln-nav-profile">
                  <div class="ln-avatar-small"></div>
                  <span class="ln-nav-label">{I18N["nav.me"]} ▾</span>
                </div>
              </nav>
            </div>
          </header>

          {/* LinkedIn Main Content */}
          <main class="ln-main">
            {/* Left Sidebar */}
            <aside class="ln-sidebar-left">
              <div class="ln-profile-card">
                <div class="ln-profile-banner"></div>
                <div class="ln-profile-content">
                  <div class="ln-avatar-large"></div>
                  <h1 class="ln-profile-name">{I18N["profile.name"]}</h1>
                  <p class="ln-profile-title">{I18N["profile.title"]}</p>
                </div>
                <div class="ln-profile-stats">
                  <div class="ln-stat-row">
                    <span class="ln-stat-label">{I18N["profile.views"]}</span>
                    <span class="ln-stat-value">1,248</span>
                  </div>
                  <div class="ln-stat-row">
                    <span class="ln-stat-label">{I18N["profile.impressions"]}</span>
                    <span class="ln-stat-value">5,312</span>
                  </div>
                </div>
                <div class="ln-premium">
                  <span class="ln-premium-icon">⭐</span>
                  <span>{I18N["profile.premium"]}</span>
                </div>
                <div class="ln-my-items">
                  <span>🔖</span>
                  <span>{I18N["profile.items"]}</span>
                </div>
              </div>
            </aside>

            {/* Feed */}
            <section class="ln-feed">
              {/* Share Box */}
              <div class="ln-share-box">
                <div class="ln-share-top">
                  <div class="ln-avatar-medium"></div>
                  <button class="ln-share-input">{I18N["share.placeholder"]}</button>
                </div>
                <div class="ln-share-actions">
                  <button class="ln-share-btn">
                    <span class="ln-share-icon ln-icon-media">🖼️</span>
                    {I18N["share.media"]}
                  </button>
                  <button class="ln-share-btn">
                    <span class="ln-share-icon ln-icon-event">📅</span>
                    {I18N["share.event"]}
                  </button>
                  <button class="ln-share-btn">
                    <span class="ln-share-icon ln-icon-article">📝</span>
                    {I18N["share.article"]}
                  </button>
                </div>
              </div>

              {/* Main Post */}
              <article class="ln-post">
                <div class="ln-post-header">
                  <div class="ln-post-author">
                    <div class="ln-avatar-author"></div>
                    <div class="ln-author-info">
                      <h3 class="ln-author-name">
                        {I18N["post.author"]} • <span class="ln-author-role">{I18N["post.role"]}</span>
                      </h3>
                      <p class="ln-author-company">{I18N["post.company"]}</p>
                      <p class="ln-post-meta">{I18N["post.time"]} • 🌐</p>
                    </div>
                  </div>
                  <button class="ln-post-more">⋯</button>
                </div>

                <p class="ln-post-content">{I18N["post.content"]}</p>

                {/* Dynamic Job Card Preview */}
                <div class="ln-job-card">
                  <div class="job-card-inner">
                    {/* Background decorations */}
                    <div class="job-card-bg-circle-1"></div>
                    <div class="job-card-bg-circle-2"></div>

                    <div class="job-card-top">
                      <div class="job-card-left">
                        <div class="job-card-logo">
                          <div class="job-card-logo-inner">⚡</div>
                        </div>
                        <h4 class="job-card-title">{jobData().title}</h4>
                        <p class="job-card-location">{jobData().company} • {jobData().location}</p>
                      </div>
                      <div class="job-card-badge">
                        {jobData().tags[0]}
                      </div>
                    </div>

                    <div class="job-card-bottom">
                      <div class="job-card-stats">
                        <div class="job-stat">
                          <span class="job-stat-label">Salary Range</span>
                          <span class="job-stat-value">{jobData().salaryRange}</span>
                        </div>
                        <div class="job-stat">
                          <span class="job-stat-label">Experience</span>
                          <span class="job-stat-value">{jobData().experience}</span>
                        </div>
                        <div class="job-stat">
                          <span class="job-stat-label">Team Size</span>
                          <span class="job-stat-value">{jobData().teamSize}</span>
                        </div>
                      </div>
                      <button class="job-card-apply">Apply Now</button>
                    </div>
                  </div>
                </div>

                {/* Reactions */}
                <div class="ln-reactions">
                  <div class="ln-reaction-icons">
                    <span class="ln-reaction ln-reaction-like">👍</span>
                    <span class="ln-reaction ln-reaction-love">❤️</span>
                    <span class="ln-reaction ln-reaction-celebrate">🎉</span>
                    <span class="ln-reaction-count">{I18N["reactions.count"]}</span>
                  </div>
                  <div class="ln-reaction-meta">
                    <span>{I18N["reactions.comments"]}</span>
                    <span>•</span>
                    <span>{I18N["reactions.reposts"]}</span>
                  </div>
                </div>

                {/* Actions */}
                <div class="ln-actions">
                  <button class="ln-action-btn">
                    <span>👍</span>
                    <span>{I18N["actions.like"]}</span>
                  </button>
                  <button class="ln-action-btn">
                    <span>💬</span>
                    <span>{I18N["actions.comment"]}</span>
                  </button>
                  <button class="ln-action-btn">
                    <span>🔁</span>
                    <span>{I18N["actions.repost"]}</span>
                  </button>
                  <button class="ln-action-btn">
                    <span>📤</span>
                    <span>{I18N["actions.send"]}</span>
                  </button>
                </div>
              </article>

              {/* Placeholder post */}
              <div class="ln-post-placeholder">
                <div class="ln-placeholder-header">
                  <div class="ln-placeholder-avatar"></div>
                  <div class="ln-placeholder-lines">
                    <div class="ln-placeholder-line ln-pl-short"></div>
                    <div class="ln-placeholder-line ln-pl-medium"></div>
                  </div>
                </div>
                <div class="ln-placeholder-body"></div>
              </div>
            </section>

            {/* Right Sidebar */}
            <aside class="ln-sidebar-right">
              <div class="ln-add-feed">
                <div class="ln-add-feed-header">
                  <h2>{I18N["sidebar.addFeed"]}</h2>
                  <span class="ln-info-icon">ℹ️</span>
                </div>
                <div class="ln-suggestion">
                  <div class="ln-suggestion-avatar ln-sugg-1"></div>
                  <div class="ln-suggestion-info">
                    <p class="ln-suggestion-name">Design Masters</p>
                    <p class="ln-suggestion-desc">Company • Design Services</p>
                    <button class="ln-follow-btn">
                      <span>+</span> {I18N["sidebar.follow"]}
                    </button>
                  </div>
                </div>
                <div class="ln-suggestion">
                  <div class="ln-suggestion-avatar ln-sugg-2"></div>
                  <div class="ln-suggestion-info">
                    <p class="ln-suggestion-name">Jordan Lee</p>
                    <p class="ln-suggestion-desc">Lead Designer at Global Tech</p>
                    <button class="ln-follow-btn">
                      <span>+</span> {I18N["sidebar.follow"]}
                    </button>
                  </div>
                </div>
                <a href="#" class="ln-view-all">{I18N["sidebar.viewAll"]} →</a>
              </div>

              <div class="ln-promoted">
                <div class="ln-promoted-header">
                  <span>{I18N["sidebar.promoted"]}</span>
                  <span>⋯</span>
                </div>
                <div class="ln-promoted-content">
                  <div class="ln-promoted-image"></div>
                  <p class="ln-promoted-title">Master Design Systems for Figma 2024</p>
                  <p class="ln-promoted-desc">Enroll today and get 40% off</p>
                </div>
              </div>

              <footer class="ln-footer">
                <div class="ln-footer-links">
                  <a href="#">About</a>
                  <a href="#">Accessibility</a>
                  <a href="#">Help Center</a>
                  <a href="#">Privacy & Terms</a>
                </div>
                <div class="ln-footer-brand">
                  <span class="ln-footer-logo">in</span> LinkedIn Corp © 2024
                </div>
              </footer>
            </aside>
          </main>

          {/* Messaging drawer */}
          <div class="ln-messaging">
            <div class="ln-messaging-header">
              <div class="ln-messaging-user">
                <div class="ln-avatar-tiny">
                  <span class="ln-online-dot"></span>
                </div>
                <span>Messaging</span>
              </div>
              <div class="ln-messaging-icons">
                <span>✏️</span>
                <span>⋯</span>
                <span>▲</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Analysis & Editor */}
      <div class="analysis-panel">
        <div class="analysis-wrapper">
          {/* Header */}
          <header class="an-header">
            <div class="an-brand">
              <div class="an-brand-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l8.5 4.9V17L12 22 3.5 17V6.9L12 2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M12 22V12" stroke="currentColor" stroke-width="2"/>
                  <path d="M20.5 6.9L12 12 3.5 6.9" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <span class="an-brand-text">{I18N["analysis.brand"]}</span>
            </div>
            <div class="an-actions">
              <button class="an-btn-primary">
                <span>⬇️</span>
                {I18N["analysis.download"]}
              </button>
              <button class="an-btn-ghost">
                <span>🔗</span>
                {I18N["analysis.share"]}
              </button>
            </div>
          </header>

          {/* Content */}
          <main class="an-content">
            <div class="an-breadcrumb">
              <span class="an-bc-link">{I18N["analysis.dashboard"]}</span>
              <span class="an-bc-sep">/</span>
              <span class="an-bc-current">{I18N["analysis.current"]}</span>
            </div>

            <h1 class="an-title">{I18N["analysis.title"]}</h1>
            <p class="an-subtitle">{I18N["analysis.subtitle"]}</p>

            <div class="an-grid">
              {/* Left: Preview & Editor */}
              <section class="an-left">
                {/* Preview Card */}
                <div class="an-preview-card">
                  <div class="an-preview-top">
                    <span class="an-preview-label">{I18N["analysis.format"]}</span>
                    <div class="an-mac-dots">
                      <span class="an-dot an-dot-red"></span>
                      <span class="an-dot an-dot-yellow"></span>
                      <span class="an-dot an-dot-green"></span>
                    </div>
                  </div>

                  <div class="an-hero">
                    <div class="an-hero-bg"></div>
                    
                    <div class="an-tags">
                      <For each={jobData().tags}>
                        {(tag) => <span class="an-pill">{tag}</span>}
                      </For>
                    </div>

                    <pre class="an-job-title">{jobData().title}</pre>
                    <div class="an-comp">{jobData().salaryRange} • Equity Package</div>

                    <div class="an-tech-row">
                      <For each={jobData().techs}>
                        {(tech) => (
                          <div class="an-tech-item">
                            <div class="an-tech-icon" style={{ background: tech.color }}></div>
                            <span class="an-tech-name">{tech.name}</span>
                          </div>
                        )}
                      </For>
                    </div>

                    <div class="an-hiring-card">
                      <div class="an-hiring-icon">⚡</div>
                      <div class="an-hiring-text">
                        <div class="an-hiring-kicker">HIRING AT</div>
                        <div class="an-hiring-name">{jobData().company}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regen bar */}
                <div class="an-regen-bar">
                  <div class="an-regen-left">
                    <span class="an-spark">✦</span>
                    <span>{I18N["analysis.tip"]}</span>
                  </div>
                  <button class="an-btn-regen">
                    <span>↻</span>
                    {I18N["analysis.regen"]}
                  </button>
                </div>

                {/* Edit Form */}
                <div class="an-editor">
                  <div class="an-editor-header">
                    <h3>Edit Job Details</h3>
                    <Show when={!isEditing()}>
                      <button class="an-edit-btn" onClick={() => setIsEditing(true)}>
                        ✏️ Edit
                      </button>
                    </Show>
                  </div>

                  <Show when={isEditing()}>
                    <div class="an-form">
                      <div class="an-form-group">
                        <label>Job Title</label>
                        <textarea
                          value={editForm().title}
                          onInput={(e) => setEditForm({ ...editForm(), title: e.currentTarget.value })}
                          rows={2}
                        />
                      </div>
                      <div class="an-form-row">
                        <div class="an-form-group">
                          <label>Company</label>
                          <input
                            type="text"
                            value={editForm().company}
                            onInput={(e) => setEditForm({ ...editForm(), company: e.currentTarget.value })}
                          />
                        </div>
                        <div class="an-form-group">
                          <label>Location</label>
                          <input
                            type="text"
                            value={editForm().location}
                            onInput={(e) => setEditForm({ ...editForm(), location: e.currentTarget.value })}
                          />
                        </div>
                      </div>
                      <div class="an-form-row">
                        <div class="an-form-group">
                          <label>Salary Range</label>
                          <input
                            type="text"
                            value={editForm().salaryRange}
                            onInput={(e) => setEditForm({ ...editForm(), salaryRange: e.currentTarget.value })}
                          />
                        </div>
                        <div class="an-form-group">
                          <label>Experience</label>
                          <input
                            type="text"
                            value={editForm().experience}
                            onInput={(e) => setEditForm({ ...editForm(), experience: e.currentTarget.value })}
                          />
                        </div>
                      </div>
                      <div class="an-form-group">
                        <label>Team Size</label>
                        <input
                          type="text"
                          value={editForm().teamSize}
                          onInput={(e) => setEditForm({ ...editForm(), teamSize: e.currentTarget.value })}
                        />
                      </div>
                      <div class="an-form-actions">
                        <button class="an-btn-cancel" onClick={handleCancel}>Cancel</button>
                        <button class="an-btn-save" onClick={handleSave}>Save Changes</button>
                      </div>
                    </div>
                  </Show>
                </div>
              </section>

              {/* Right: Analysis panels */}
              <aside class="an-right">
                {/* Truth Translator */}
                <section class="an-panel">
                  <div class="an-panel-title">
                    <span class="an-panel-icon">🔄</span>
                    <span>{I18N["analysis.truth.title"]}</span>
                  </div>
                  <div class="an-table">
                    <div class="an-table-head">
                      <div class="an-th">{I18N["analysis.truth.says"]}</div>
                      <div class="an-th an-th-right">{I18N["analysis.truth.means"]}</div>
                    </div>
                    <For each={truthRows()}>
                      {(row) => (
                        <div class="an-tr">
                          <div class="an-td an-td-muted">{row.says}</div>
                          <div class="an-td">{row.means}</div>
                        </div>
                      )}
                    </For>
                  </div>
                </section>

                {/* Candidate Matching */}
                <section class="an-panel">
                  <div class="an-panel-title">
                    <span class="an-panel-icon">👥</span>
                    <span>{I18N["analysis.match.title"]}</span>
                  </div>
                  <div class="an-fit-grid">
                    <div>
                      <div class="an-fit-header an-fit-good">
                        <span class="an-fit-dot an-dot-good"></span>
                        {I18N["analysis.match.ideal"]}
                      </div>
                      <ul class="an-list">
                        <For each={idealFor()}>{(item) => <li>{item}</li>}</For>
                      </ul>
                    </div>
                    <div>
                      <div class="an-fit-header an-fit-bad">
                        <span class="an-fit-dot an-dot-bad"></span>
                        {I18N["analysis.match.notFor"]}
                      </div>
                      <ul class="an-list">
                        <For each={notFor()}>{(item) => <li>{item}</li>}</For>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Ready to post */}
                <section class="an-ready">
                  <div class="an-ready-text">
                    <div class="an-ready-title">{I18N["analysis.ready.title"]}</div>
                    <div class="an-ready-subtitle">{I18N["analysis.ready.subtitle"]}</div>
                  </div>
                  <button class="an-ready-fab">
                    🚀
                  </button>
                </section>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
