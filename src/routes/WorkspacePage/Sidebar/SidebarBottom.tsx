import { t, i18nKeys } from "~/common/translate";

export function SidebarBottom(props: { onNewAsset: () => void }) {
  return (
    <div class="jv-sidebarBottom">
      <button class="jv-btnPrimary" onClick={props.onNewAsset}>
        {t(i18nKeys.ctaNewAsset)}
      </button>

      <div class="jv-settingsRow" role="button" tabIndex={0}>
        <span class="material-symbols-outlined">settings</span>
        <span>{t(i18nKeys.navSettings)}</span>
      </div>
    </div>
  );
}