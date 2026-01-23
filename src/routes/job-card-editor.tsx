import { createSignal, For, Show, createEffect } from "solid-js";
import "../styles/job-card-editor.css";

// Types
interface JobCardData {
  teamLabel: string;
  title: string;
  description: string;
  salaryRange: string;
  location: string;
  techStack: string[];
  brandColor: string;
}

interface LayoutStyle {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
}

interface SmartCopy {
  text: string;
}

interface TrendingDesign {
  id: number;
  gradient: string;
}

export default function JobCardEditor() {
  // Brand colors
  const brandColors = [
    { id: "blue", color: "#2563eb" },
    { id: "black", color: "#1a1a1a" },
    { id: "purple", color: "#7c3aed" },
    { id: "green", color: "#16a34a" },
  ];

  // Layout styles
  const layoutStyles: LayoutStyle[] = [
    { id: "modern", name: "Modern Professional", subtitle: "Best for Tech Roles", icon: "grid" },
    { id: "classic", name: "Classic Corporate", subtitle: "Traditional & Clean", icon: "square" },
    { id: "minimal", name: "Minimalist Grid", subtitle: "Social Media Focused", icon: "minimal" },
  ];

  // Smart copy suggestions
  const smartCopies: SmartCopy[] = [
    { text: '"Build the future of finance with our core engineering team."' },
    { text: '"Ready for a challenge? Help us scale to 10M+ users."' },
  ];

  // Trending designs
  const trendingDesigns: TrendingDesign[] = [
    { id: 1, gradient: "linear-gradient(135deg, #fef3e2 0%, #fde8d0 100%)" },
    { id: 2, gradient: "linear-gradient(135deg, #fce4d6 0%, #f8d4c4 100%)" },
    { id: 3, gradient: "linear-gradient(135deg, #e8f4f0 0%, #d4ebe4 100%)" },
    { id: 4, gradient: "linear-gradient(135deg, #f0f4e8 0%, #e4ebd4 100%)" },
  ];

  // State
  const [activeTab, setActiveTab] = createSignal<"branding" | "layout" | "content">("branding");
  const [selectedColor, setSelectedColor] = createSignal("blue");
  const [fontSize, setFontSize] = createSignal(24);
  const [selectedLayout, setSelectedLayout] = createSignal("modern");
  const [zoomLevel, setZoomLevel] = createSignal(85);
  const [lastSaved, setLastSaved] = createSignal("2M AGO");

  const [jobData, setJobData] = createSignal<JobCardData>({
    teamLabel: "ENGINEERING TEAM",
    title: "Senior Software Engineer",
    description: "Join our core platform team to build the next generation of fintech solutions. Scale systems to millions of users.",
    salaryRange: "$140k - $180k",
    location: "Remote (Global)",
    techStack: ["React", "Node.js", "AWS", "Kubernetes"],
    brandColor: "#2563eb",
  });

  // Update brand color when selection changes
  createEffect(() => {
    const color = brandColors.find(c => c.id === selectedColor())?.color || "#2563eb";
    setJobData(prev => ({ ...prev, brandColor: color }));
  });

  const handleApplyCopy = (text: string) => {
    // Remove quotes and apply as description
    const cleanText = text.replace(/^"|"$/g, '');
    setJobData(prev => ({ ...prev, description: cleanText }));
  };

  return (
    <div class="jce-root">
      {/* Top Header Bar */}
      <header class="jce-header">
        <div class="jce-header-left">
          <div class="jce-logo">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3L4 14h7l-1 8 10-13h-7l1-6z" />
            </svg>
          </div>
          <div class="jce-header-title">
            <span class="jce-title-main">Job Card Editor</span>
            <span class="jce-title-breadcrumb">
              Projects <span class="jce-breadcrumb-sep">›</span> 
              <span class="jce-breadcrumb-active">Senior Engineer Ad</span>
            </span>
          </div>
        </div>

        <div class="jce-header-center">
          <button class="jce-icon-btn" title="Undo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 10h10a5 5 0 0 1 5 5v2" />
              <path d="M3 10l4-4M3 10l4 4" />
            </svg>
          </button>
          <button class="jce-icon-btn" title="Redo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10H11a5 5 0 0 0-5 5v2" />
              <path d="M21 10l-4-4M21 10l-4 4" />
            </svg>
          </button>
          <div class="jce-zoom-control">
            <button class="jce-zoom-btn" onClick={() => setZoomLevel(z => Math.max(50, z - 10))}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35M8 11h6" />
              </svg>
            </button>
            <span class="jce-zoom-value">{zoomLevel()}%</span>
            <button class="jce-zoom-btn" onClick={() => setZoomLevel(z => Math.min(200, z + 10))}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35M8 11h6M11 8v6" />
              </svg>
            </button>
          </div>
        </div>

        <div class="jce-header-right">
          <button class="jce-btn-ghost">Share</button>
          <button class="jce-btn-primary">Download PNG</button>
          <div class="jce-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main class="jce-main">
        {/* Left Sidebar - Customization */}
        <aside class="jce-sidebar-left">
          <div class="jce-sidebar-header">
            <h2 class="jce-sidebar-title">Customization</h2>
            <p class="jce-sidebar-subtitle">Refine your job visual card appearance</p>
          </div>

          {/* Tabs */}
          <div class="jce-tabs">
            <button 
              class={`jce-tab ${activeTab() === "branding" ? "jce-tab-active" : ""}`}
              onClick={() => setActiveTab("branding")}
            >
              Branding
            </button>
            <button 
              class={`jce-tab ${activeTab() === "layout" ? "jce-tab-active" : ""}`}
              onClick={() => setActiveTab("layout")}
            >
              Layout
            </button>
            <button 
              class={`jce-tab ${activeTab() === "content" ? "jce-tab-active" : ""}`}
              onClick={() => setActiveTab("content")}
            >
              Content
            </button>
          </div>

          {/* Tab Content */}
          <div class="jce-tab-content">
            <Show when={activeTab() === "branding"}>
              {/* Company Logo */}
              <div class="jce-section">
                <label class="jce-label">COMPANY LOGO</label>
                <div class="jce-logo-upload">
                  <div class="jce-upload-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17,8 12,3 7,8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <span>Click to upload PNG</span>
                </div>
              </div>

              {/* Brand Identity */}
              <div class="jce-section">
                <label class="jce-label">BRAND IDENTITY</label>
                <div class="jce-color-palette">
                  <For each={brandColors}>
                    {(item) => (
                      <button
                        class={`jce-color-swatch ${selectedColor() === item.id ? "jce-swatch-active" : ""}`}
                        style={{ background: item.color }}
                        onClick={() => setSelectedColor(item.id)}
                      />
                    )}
                  </For>
                  <button class="jce-color-add">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Typography */}
              <div class="jce-section">
                <label class="jce-label">TYPOGRAPHY</label>
                <div class="jce-slider-row">
                  <span class="jce-slider-label">Font Size</span>
                  <span class="jce-slider-value">{fontSize()}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="36"
                  value={fontSize()}
                  onInput={(e) => setFontSize(parseInt(e.currentTarget.value))}
                  class="jce-slider"
                />
              </div>

              {/* Layout Style */}
              <div class="jce-section">
                <label class="jce-label">LAYOUT STYLE</label>
                <div class="jce-layout-options">
                  <For each={layoutStyles}>
                    {(layout) => (
                      <button
                        class={`jce-layout-option ${selectedLayout() === layout.id ? "jce-layout-active" : ""}`}
                        onClick={() => setSelectedLayout(layout.id)}
                      >
                        <div class="jce-layout-icon">
                          <Show when={layout.icon === "grid"}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <rect x="3" y="3" width="7" height="7" rx="1" />
                              <rect x="14" y="3" width="7" height="7" rx="1" />
                              <rect x="3" y="14" width="7" height="7" rx="1" />
                              <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>
                          </Show>
                          <Show when={layout.icon === "square"}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                            </svg>
                          </Show>
                          <Show when={layout.icon === "minimal"}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <line x1="3" y1="9" x2="21" y2="9" />
                            </svg>
                          </Show>
                        </div>
                        <div class="jce-layout-text">
                          <span class="jce-layout-name">{layout.name}</span>
                          <span class="jce-layout-subtitle">{layout.subtitle}</span>
                        </div>
                      </button>
                    )}
                  </For>
                </div>
              </div>
            </Show>

            <Show when={activeTab() === "content"}>
              <div class="jce-section">
                <label class="jce-label">TEAM LABEL</label>
                <input
                  type="text"
                  class="jce-input"
                  value={jobData().teamLabel}
                  onInput={(e) => setJobData(prev => ({ ...prev, teamLabel: e.currentTarget.value }))}
                />
              </div>
              <div class="jce-section">
                <label class="jce-label">JOB TITLE</label>
                <input
                  type="text"
                  class="jce-input"
                  value={jobData().title}
                  onInput={(e) => setJobData(prev => ({ ...prev, title: e.currentTarget.value }))}
                />
              </div>
              <div class="jce-section">
                <label class="jce-label">DESCRIPTION</label>
                <textarea
                  class="jce-textarea"
                  value={jobData().description}
                  onInput={(e) => setJobData(prev => ({ ...prev, description: e.currentTarget.value }))}
                  rows={3}
                />
              </div>
              <div class="jce-section">
                <label class="jce-label">SALARY RANGE</label>
                <input
                  type="text"
                  class="jce-input"
                  value={jobData().salaryRange}
                  onInput={(e) => setJobData(prev => ({ ...prev, salaryRange: e.currentTarget.value }))}
                />
              </div>
              <div class="jce-section">
                <label class="jce-label">LOCATION</label>
                <input
                  type="text"
                  class="jce-input"
                  value={jobData().location}
                  onInput={(e) => setJobData(prev => ({ ...prev, location: e.currentTarget.value }))}
                />
              </div>
              <div class="jce-section">
                <label class="jce-label">TECH STACK (comma separated)</label>
                <input
                  type="text"
                  class="jce-input"
                  value={jobData().techStack.join(", ")}
                  onInput={(e) => setJobData(prev => ({ 
                    ...prev, 
                    techStack: e.currentTarget.value.split(",").map(t => t.trim()).filter(Boolean)
                  }))}
                />
              </div>
            </Show>
          </div>
        </aside>

        {/* Center - Preview */}
        <section class="jce-preview-area">
          <div class="jce-preview-badge">
            <span class="jce-badge-dot"></span>
            LIVE PREVIEW
          </div>

          <div 
            class="jce-card-preview"
            style={{ transform: `scale(${zoomLevel() / 100})` }}
          >
            {/* Header with gradient */}
            <div 
              class="jce-card-header"
              style={{ background: jobData().brandColor }}
            >
              <div class="jce-card-logo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <circle cx="8" cy="8" r="2" />
                  <circle cx="16" cy="8" r="2" />
                  <circle cx="8" cy="16" r="2" />
                  <circle cx="16" cy="16" r="2" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div class="jce-card-content">
              <span class="jce-card-team" style={{ color: jobData().brandColor }}>
                {jobData().teamLabel}
              </span>
              <h2 class="jce-card-title" style={{ "font-size": `${fontSize()}px` }}>
                {jobData().title}
              </h2>
              <p class="jce-card-description">{jobData().description}</p>

              <div class="jce-card-divider"></div>

              <div class="jce-card-meta">
                <div class="jce-meta-item">
                  <div class="jce-meta-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    </svg>
                  </div>
                  <div class="jce-meta-text">
                    <span class="jce-meta-label">SALARY RANGE</span>
                    <span class="jce-meta-value">{jobData().salaryRange}</span>
                  </div>
                </div>
                <div class="jce-meta-item">
                  <div class="jce-meta-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div class="jce-meta-text">
                    <span class="jce-meta-label">LOCATION</span>
                    <span class="jce-meta-value">{jobData().location}</span>
                  </div>
                </div>
              </div>

              <div class="jce-card-tags">
                <For each={jobData().techStack}>
                  {(tech) => <span class="jce-tag">{tech}</span>}
                </For>
              </div>

              <div class="jce-card-footer">
                <span class="jce-powered-by">POWERED BY</span>
                <span class="jce-brand-name" style={{ color: jobData().brandColor }}>JOBCARD.AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar - AI Tools */}
        <aside class="jce-sidebar-right">
          {/* AI Smart Copy */}
          <div class="jce-ai-section">
            <div class="jce-ai-header">
              <span class="jce-ai-icon">✦</span>
              <span class="jce-ai-title">AI Smart Copy</span>
            </div>

            <div class="jce-copy-suggestions">
              <For each={smartCopies}>
                {(copy) => (
                  <div class="jce-copy-card">
                    <p class="jce-copy-text">{copy.text}</p>
                    <button 
                      class="jce-copy-apply"
                      onClick={() => handleApplyCopy(copy.text)}
                    >
                      APPLY TO CARD <span>→</span>
                    </button>
                  </div>
                )}
              </For>
            </div>

            <button class="jce-btn-outline">Regenerate Ideas</button>
          </div>

          {/* Trending Designs */}
          <div class="jce-trending-section">
            <div class="jce-trending-header">
              <span class="jce-trending-icon">◐</span>
              <span class="jce-trending-title">Trending Designs</span>
            </div>

            <div class="jce-trending-grid">
              <For each={trendingDesigns}>
                {(design) => (
                  <div class="jce-trending-item" style={{ background: design.gradient }}>
                    <div class="jce-trending-leaf">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#3d6b59" stroke-width="1.5">
                        <path d="M12 22c-4-4-8-7-8-12a8 8 0 0 1 16 0c0 5-4 8-8 12z" />
                        <path d="M12 6v10M8 10l4-4 4 4" />
                      </svg>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>

          {/* Pro Tip */}
          <div class="jce-pro-tip">
            <span class="jce-tip-label">PRO TIP</span>
            <p class="jce-tip-text">
              Try using high-contrast colors for social media posts to increase CTR by up to 40%.
            </p>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer class="jce-footer">
        <span class="jce-save-status">CHANGES SAVED {lastSaved()}</span>
        <span class="jce-export-status">
          EXPORTING AS <span class="jce-export-link">PNG (2X)</span>
        </span>
      </footer>
    </div>
  );
}
