import { i18nKeys, t } from "~/common/translate";

export function Topbar() {
  return (
    <header class="jv-topbar">
      <div class="jv-breadcrumb">
        <a class="jv-breadcrumbLink" href="#">
          {t(i18nKeys.breadcrumbDashboard)}
        </a>
        <span class="jv-breadcrumbSep">/</span>
        <span class="jv-breadcrumbCurrent">
          {t(i18nKeys.breadcrumbWorkspace)}
        </span>
      </div>
    </header>
  );
}
