import { For } from "solid-js";
import { i18nKeys, t, recentItems } from "~/common/translate";

export function RecentSection() {
  return (
    <section class="jv-recent">
      <div class="jv-recentHeader">
        <h3 class="jv-h3">{t(i18nKeys.recentTitle)}</h3>
        <a class="jv-viewAll" href="#">
          {t(i18nKeys.recentViewAll)}
        </a>
      </div>

      <div class="jv-grid">
        <For each={recentItems}>
          {(item) => (
            <article class="jv-miniCard">
              <div class={`jv-miniHero jv-grad-${item.gradient}`}>
                <div class="jv-heroOverlay" />
                <div class={`jv-pattern jv-pattern-${item.pattern}`} />
              </div>

              <div class="jv-miniBody">
                <p class="jv-miniKicker">{item.category}</p>
                <h4 class="jv-miniTitle">{item.title}</h4>

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
  );
}
