import { i18nKeys, t } from "~/common/translate";

export function SidebarNav() {
  return (
    <nav class="jv-nav">
      <NavItem icon="work" label={i18nKeys.navMyAds} />
      <NavItem icon="palette" label={i18nKeys.navBrandAssets} />
      <NavItem icon="payments" label={i18nKeys.navBilling} />
    </nav>
  );
}

function NavItem(props: { icon: string; label: string }) {
  return (
    <a class="jv-navItem" href="#">
      <span class="material-symbols-outlined">{props.icon}</span>
      <span>{t(props.label)}</span>
    </a>
  );
}