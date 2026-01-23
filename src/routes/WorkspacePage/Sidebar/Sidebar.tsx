import { i18nKeys, t } from "~/common/translate";
import { SidebarNav } from "./SidebarNav";
import { SidebarBrand } from "./SidebarBrand";
import { SidebarBottom } from "./SidebarBottom";
import { SidebarProps } from "./types";

export function Sidebar(props: SidebarProps) {
  return (
    <aside class="jv-sidebar">
      <div class="jv-sidebarInner">
        <SidebarBrand />
        <SidebarNav />
        <SidebarBottom onNewAsset={props.onNewAsset} />
      </div>
    </aside>
  );
}
