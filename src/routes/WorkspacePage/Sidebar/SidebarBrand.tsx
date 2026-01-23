import { t, i18nKeys } from "~/common/translate";

export function SidebarBrand() {
  return (
    <div class="jv-brand">
      <div class="jv-logo">
        <span class="material-symbols-outlined jv-logoIcon">auto_awesome</span>
      </div>
      <div class="jv-brandText">
        <div class="jv-brandTitle">{t(i18nKeys.brandTitle)}</div>
        <div class="jv-brandSub">{t(i18nKeys.brandSubtitle)}</div>
      </div>
    </div>
  );
}