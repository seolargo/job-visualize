import { createSignal, For } from "solid-js";
import "../styles/job-visualizer-workspace.css";
import { i18nKeys, t, recentItems } from "~/common/translate";

export default function WorkspacePage() {
  const [jobText, setJobText] = createSignal("");

  const onNewAsset = () => {
    setJobText("");

    const el = document.getElementById("job-source") as HTMLTextAreaElement | null;
    el?.focus();
  };

  const onVisualize = () => {
    console.log("Job source:", jobText());
  };

  return (
    <div class="jv-root">
      <div class="jv-shell">
        {/* Sidebar */}
        <aside class="jv-sidebar">
          <div class="jv-sidebarInner">
            <div class="jv-brand">
              <div class="jv-logo">
                <span class="material-symbols-outlined jv-logoIcon">auto_awesome</span>
              </div>
              <div class="jv-brandText">
                <div class="jv-brandTitle" data-i18n={i18nKeys.brandTitle}>
                  {t(i18nKeys.brandTitle)}
                </div>
                <div class="jv-brandSub" data-i18n={i18nKeys.brandSubtitle}>
                  {t(i18nKeys.brandSubtitle)}
                </div>
              </div>
            </div>

            <nav class="jv-nav">
              <a class="jv-navItem jv-navItemActive" href="#">
                <span class="material-symbols-outlined">work</span>
                <span data-i18n={i18nKeys.navMyAds}>{t(i18nKeys.navMyAds)}</span>
              </a>

              <a class="jv-navItem" href="#">
                <span class="material-symbols-outlined">palette</span>
                <span data-i18n={i18nKeys.navBrandAssets}>{t(i18nKeys.navBrandAssets)}</span>
              </a>

              <a class="jv-navItem" href="#">
                <span class="material-symbols-outlined">payments</span>
                <span data-i18n={i18nKeys.navBilling}>{t(i18nKeys.navBilling)}</span>
              </a>
            </nav>

            <div class="jv-sidebarBottom">
              <button class="jv-btnPrimary" type="button" onClick={onNewAsset} data-i18n={i18nKeys.ctaNewAsset}>
                {t(i18nKeys.ctaNewAsset)}
              </button>

              <div class="jv-settingsRow" role="button" tabIndex={0}>
                <span class="material-symbols-outlined">settings</span>
                <span data-i18n={i18nKeys.navSettings}>{t(i18nKeys.navSettings)}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main class="jv-main">
          {/* Topbar */}
          <header class="jv-topbar">
            <div class="jv-breadcrumb">
              <a class="jv-breadcrumbLink" href="#" data-i18n={i18nKeys.breadcrumbDashboard}>
                {t(i18nKeys.breadcrumbDashboard)}
              </a>
              <span class="jv-breadcrumbSep">/</span>
              <span class="jv-breadcrumbCurrent" data-i18n={i18nKeys.breadcrumbWorkspace}>
                {t(i18nKeys.breadcrumbWorkspace)}
              </span>
            </div>
          </header>

          <div class="jv-content">
            {/* Heading */}
            <section class="jv-heading">
              <h2 class="jv-h2" data-i18n={i18nKeys.headingTitle}>
                {t(i18nKeys.headingTitle)}
              </h2>
              <p class="jv-subtitle" data-i18n={i18nKeys.headingSubtitle}>
                {t(i18nKeys.headingSubtitle)}
              </p>
            </section>

            {/* Input Card */}
            <section class="jv-card">
              <div class="jv-cardBody">
                <label class="jv-label" for="job-source" data-i18n={i18nKeys.inputLabel}>
                  {t(i18nKeys.inputLabel)}
                </label>

                <textarea
                  id="job-source"
                  class="jv-textarea"
                  placeholder={t(i18nKeys.inputPlaceholder)}
                  data-i18n={i18nKeys.inputPlaceholder}
                  value={jobText()}
                  onInput={(e) => setJobText(e.currentTarget.value)}
                />
              </div>

              <div class="jv-cardFooter">
                <div class="jv-footerLeft">

                </div>

                <button class="jv-cta" type="button" onClick={onVisualize} data-i18n={i18nKeys.btnVisualize}>
                  <span class="material-symbols-outlined">magic_button</span>
                  {t(i18nKeys.btnVisualize)}
                </button>
              </div>
            </section>

            {/* Recent */}
            <section class="jv-recent">
              <div class="jv-recentHeader">
                <h3 class="jv-h3" data-i18n={i18nKeys.recentTitle}>
                  {t(i18nKeys.recentTitle)}
                </h3>
                <a class="jv-viewAll" href="#" data-i18n={i18nKeys.recentViewAll}>
                  {t(i18nKeys.recentViewAll)}
                </a>
              </div>

              <div class="jv-grid">
                <For each={recentItems}>
                  {(item) => (
                    <article class="jv-miniCard">
                      <div class={`jv-miniHero jv-grad-${item.gradient}`}>
                        <div class="jv-heroOverlay" />
                        <div class={`jv-pattern jv-pattern-${item.pattern}`} aria-hidden="true" />
                      </div>

                      <div class="jv-miniBody">
                        <p class="jv-miniKicker">{item.category}</p>
                        <h4 class="jv-miniTitle" title={item.title}>
                          {item.title}
                        </h4>

                        <div class="jv-miniMeta">
                          <p class="jv-miniTime">{item.createdAt}</p>
                          <span class="material-symbols-outlined jv-more">more_horiz</span>
                        </div>
                      </div>
                    </article>
                  )}
                </For>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
