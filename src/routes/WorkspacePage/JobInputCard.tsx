import { i18nKeys, t } from "~/common/translate";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onVisualize: () => void;
};

export function JobInputCard(props: Props) {
  return (
    <section class="jv-card">
      <div class="jv-cardBody">
        <label class="jv-label" for="job-source">
          {t(i18nKeys.inputLabel)}
        </label>

        <textarea
          id="job-source"
          class="jv-textarea"
          placeholder={t(i18nKeys.inputPlaceholder)}
          value={props.value}
          onInput={(e) => props.onChange(e.currentTarget.value)}
        />
      </div>

      <div class="jv-cardFooter">
        <div />
        <button class="jv-cta" onClick={props.onVisualize}>
          <span class="material-symbols-outlined">magic_button</span>
          {t(i18nKeys.btnVisualize)}
        </button>
      </div>
    </section>
  );
}
