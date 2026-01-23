import { i18nKeys, t } from "~/common/translate";

export function WorkspaceHeading() {
  return (
    <section class="jv-heading">
      <h2 class="jv-h2">{t(i18nKeys.headingTitle)}</h2>
      <p class="jv-subtitle">{t(i18nKeys.headingSubtitle)}</p>
    </section>
  );
}
