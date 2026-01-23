import { createMemo, For } from "solid-js";
import { Title, Link as MetaLink } from "@solidjs/meta";
import "../styles/landing.css";

const I18N = {
  // Nav
  "landing.brand": "JobVisualizer",
  "landing.nav.features": "Features",
  "landing.nav.pricing": "Pricing",
  "landing.nav.about": "About Us",
  "landing.nav.signIn": "Sign In",
  "landing.nav.startFree": "Start Free",

  // Hero
  "landing.hero.badge": "New: AI-Powered v2.0",
  "landing.hero.h1.line1": "Stop Reading Ads.",
  "landing.hero.h1.line2": "Start Understanding Roles.",
  "landing.hero.subtitle":
    "Reduce irrelevant applications by 40% with AI-driven role visualization. Transform boring text into high-converting assets in seconds.",
  "landing.hero.cta.primary": "Start Visualizing for Free",
  "landing.hero.cta.secondary": "View Demo",

  // Social proof
  "landing.trustedBy": "Trusted by modern talent teams",

  // Before/After
  "landing.transform.title": "The Transformation: Before vs After",
  "landing.transform.subtitle": "Stop sending candidates a wall of text they'll never read.",
  "landing.before.label": "The Boring Text",
  "landing.after.label": "The Sleek Job Card",
  "landing.before.note": "Candidates spend 6 seconds reading this...",
  "landing.after.note": "Candidates spend 45 seconds engaging with this!",
  "landing.after.card.title": "Senior UI Designer",
  "landing.after.card.meta": "Remote • Full-time • $140k-180k",
  "landing.after.card.growth.title": "Growth Path",
  "landing.after.card.growth.value": "Design Director",
  "landing.after.card.stack.title": "Tech Stack",
  "landing.after.card.stack.value": "Figma, React",
  "landing.after.card.fit.title": "Culture Fit",
  "landing.after.card.fit.value": "92%",

  // Features
  "landing.features.title": "Engineered for High-Quality Hiring",
  "landing.features.subtitle": "Our tool uses advanced AI to bridge the gap between recruiters and top talent.",
  "landing.features.c1.title": "AI-Powered Visual Cards",
  "landing.features.c1.desc":
    "Automatically turn any PDF job description into a beautiful infographic that highlights what truly matters to talent.",
  "landing.features.c2.title": "The Truth-Filter",
  "landing.features.c2.desc":
    'Our LLM translates corporate jargon like "fast-paced environment" into real-talk that candidates actually understand.',
  "landing.features.c3.title": "One-Click Sharing",
  "landing.features.c3.desc":
    "Instant exports perfectly formatted for LinkedIn, X, and Instagram. Stop worrying about image dimensions.",

  // Testimonial
  "landing.quote":
    '"JobVisualizer changed our hiring game. We saw a 40% drop in \'junk\' applications and a 2x increase in conversion from top-tier talent. It\'s the only way we post jobs now."',
  "landing.quote.person": "Sarah Jenkins",
  "landing.quote.role": "HR Director @ InnovateTech",

  // Pricing
  "landing.pricing.title": "Simple, Transparent Pricing",
  "landing.pricing.subtitle": "Transform your hiring whether you're a startup or a global agency.",
  "landing.pricing.starter": "Starter",
  "landing.pricing.pro": "Pro",
  "landing.pricing.agency": "Agency",
  "landing.pricing.mostPopular": "Most Popular",
  "landing.pricing.perMonth": "/mo",
  "landing.pricing.chooseStarter": "Choose Starter",
  "landing.pricing.getStarted": "Get Started",
  "landing.pricing.contactSales": "Contact Sales",

  // Pricing bullets
  "landing.pricing.starter.b1": "3 Visualizations / mo",
  "landing.pricing.starter.b2": "Standard Templates",
  "landing.pricing.starter.b3": "Social Exports",
  "landing.pricing.pro.b1": "Unlimited Visualizations",
  "landing.pricing.pro.b2": "Custom Branding",
  "landing.pricing.pro.b3": "Advanced AI Truth-Filter",
  "landing.pricing.pro.b4": "Priority Support",
  "landing.pricing.agency.b1": "Everything in Pro",
  "landing.pricing.agency.b2": "Team Collaboration",
  "landing.pricing.agency.b3": "API Access",
  "landing.pricing.agency.b4": "Dedicated Account Manager",

  // Final CTA
  "landing.final.title": "Ready to transform your hiring?",
  "landing.final.subtitle": "Join 500+ talent teams already using JobVisualizer to cut through the noise.",
  "landing.final.button": "Create Your First Job Card Now",
  "landing.final.note": "No credit card required. Free 14-day trial.",

  // Footer
  "landing.footer.privacy": "Privacy Policy",
  "landing.footer.terms": "Terms of Service",
  "landing.footer.contact": "Contact",
  "landing.footer.copyright": "© 2024 JobVisualizer Inc. All rights reserved.",
};

function t(key: keyof typeof I18N) {
  return I18N[key] ?? key;
}

export default function LandingPage() {
  const logos = createMemo(() => Array.from({ length: 4 }));

  return (
    <div class="lj-root">
      <Title>JobVisualizer | Transform Your Hiring</Title>

      {/* Fonts + Material Symbols (self-contained) */}
      <MetaLink
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      />
      <MetaLink
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />

      {/* Top Navigation */}
      <header class="lj-topNav">
        <div class="lj-topNavInner">
          <div class="lj-brand">
            <div class="lj-brandMark" aria-hidden="true">
              <span class="material-symbols-outlined">visibility</span>
            </div>
            <h2 class="lj-brandName">{t("landing.brand")}</h2>
          </div>

          <nav class="lj-navLinks" aria-label="primary">
            <a href="#features">{t("landing.nav.features")}</a>
            <a href="#pricing">{t("landing.nav.pricing")}</a>
            <a href="#">{t("landing.nav.about")}</a>
          </nav>

          <div class="lj-navActions">
            <button class="lj-linkBtn" type="button">
              {t("landing.nav.signIn")}
            </button>
            <button class="lj-primaryBtn" type="button">
              {t("landing.nav.startFree")}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section class="lj-hero">
        <div class="lj-container lj-heroGrid">
          <div class="lj-heroLeft">
            <div class="lj-badge" aria-label={t("landing.hero.badge")}>
              <span class="lj-ping" aria-hidden="true">
                <span class="lj-pingPulse" />
                <span class="lj-pingDot" />
              </span>
              {t("landing.hero.badge")}
            </div>

            <h1 class="lj-h1">
              {t("landing.hero.h1.line1")}
              <br />
              <span class="lj-h1Accent">{t("landing.hero.h1.line2")}</span>
            </h1>

            <p class="lj-heroSubtitle">{t("landing.hero.subtitle")}</p>

            <div class="lj-heroCtas">
              <button class="lj-ctaPrimary" type="button">
                {t("landing.hero.cta.primary")}
              </button>
              <button class="lj-ctaSecondary" type="button">
                {t("landing.hero.cta.secondary")}
              </button>
            </div>
          </div>

          <div class="lj-heroRight">
            <div class="lj-heroMockOuter" aria-hidden="true">
              <div class="lj-heroMockInner">
                <div class="lj-mockPad">
                  <div class="lj-mockTopBar" />
                  <div class="lj-mockTiles">
                    <div class="lj-mockTile lj-mockTilePrimary" />
                    <div class="lj-mockTile" />
                    <div class="lj-mockTile" />
                  </div>
                  <div class="lj-mockDropzone">
                    <span class="material-symbols-outlined">upload_file</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section class="lj-socialProof">
        <div class="lj-container">
          <p class="lj-socialTitle">{t("landing.trustedBy")}</p>

          <div class="lj-socialRow">
            <For each={logos()}>
              {() => <div class="lj-logoBlock" aria-hidden="true" />}
            </For>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section class="lj-compare">
        <div class="lj-container lj-compareInner">
          <div class="lj-compareHead">
            <h2 class="lj-h2">{t("landing.transform.title")}</h2>
            <p class="lj-muted">{t("landing.transform.subtitle")}</p>
          </div>

          <div class="lj-compareGrid">
            {/* Before */}
            <div class="lj-before">
              <span class="lj-compareLabel lj-beforeLabel">
                <span class="material-symbols-outlined">block</span>
                {t("landing.before.label")}
              </span>

              <div class="lj-beforeCard" aria-hidden="true">
                <div class="lj-lines">
                  <div class="lj-line w100" />
                  <div class="lj-line w85" />
                  <div class="lj-line w100" />
                  <div class="lj-line w70" />
                  <div class="lj-linesSub">
                    <div class="lj-lineSm w100" />
                    <div class="lj-lineSm w100" />
                    <div class="lj-lineSm w75" />
                  </div>
                </div>
                <p class="lj-beforeNote">{t("landing.before.note")}</p>
              </div>
            </div>

            {/* After */}
            <div class="lj-after">
              <span class="lj-compareLabel lj-afterLabel">
                <span class="material-symbols-outlined">auto_awesome</span>
                {t("landing.after.label")}
              </span>

              <div class="lj-afterCard">
                <div class="lj-afterStamp" aria-hidden="true">
                  <span class="material-symbols-outlined">verified</span>
                </div>

                <div class="lj-afterTop">
                  <div class="lj-afterIcon" aria-hidden="true">
                    <span class="material-symbols-outlined">engineering</span>
                  </div>
                  <div>
                    <h4 class="lj-afterTitle">{t("landing.after.card.title")}</h4>
                    <p class="lj-afterMeta">{t("landing.after.card.meta")}</p>
                  </div>
                </div>

                <div class="lj-afterBody">
                  <div class="lj-afterTiles">
                    <div class="lj-afterTile">
                      <p class="lj-tileK">{t("landing.after.card.growth.title")}</p>
                      <p class="lj-tileV">{t("landing.after.card.growth.value")}</p>
                    </div>
                    <div class="lj-afterTile">
                      <p class="lj-tileK">{t("landing.after.card.stack.title")}</p>
                      <p class="lj-tileV">{t("landing.after.card.stack.value")}</p>
                    </div>
                  </div>

                  <div class="lj-fit">
                    <div class="lj-fitRow">
                      <p>{t("landing.after.card.fit.title")}</p>
                      <p>{t("landing.after.card.fit.value")}</p>
                    </div>
                    <div class="lj-fitBar">
                      <div class="lj-fitFill" style={{ width: "92%" }} />
                    </div>
                  </div>
                </div>

                <p class="lj-afterNote">{t("landing.after.note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="lj-features" id="features">
        <div class="lj-container">
          <div class="lj-featHead">
            <h2 class="lj-h2">{t("landing.features.title")}</h2>
            <p class="lj-muted">{t("landing.features.subtitle")}</p>
          </div>

          <div class="lj-featGrid">
            <div class="lj-featCard">
              <div class="lj-featIcon">
                <span class="material-symbols-outlined">auto_fix_high</span>
              </div>
              <h3 class="lj-h3">{t("landing.features.c1.title")}</h3>
              <p class="lj-muted">{t("landing.features.c1.desc")}</p>
            </div>

            <div class="lj-featCard">
              <div class="lj-featIcon">
                <span class="material-symbols-outlined">filter_alt</span>
              </div>
              <h3 class="lj-h3">{t("landing.features.c2.title")}</h3>
              <p class="lj-muted">{t("landing.features.c2.desc")}</p>
            </div>

            <div class="lj-featCard">
              <div class="lj-featIcon">
                <span class="material-symbols-outlined">share</span>
              </div>
              <h3 class="lj-h3">{t("landing.features.c3.title")}</h3>
              <p class="lj-muted">{t("landing.features.c3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section class="lj-testimonial">
        <div class="lj-container lj-testimonialInner">
          <span class="material-symbols-outlined lj-quoteIcon">format_quote</span>

          <blockquote class="lj-quote">{t("landing.quote")}</blockquote>

          <div class="lj-person">
            <div class="lj-avatar" aria-hidden="true" />
            <div>
              <p class="lj-personName">{t("landing.quote.person")}</p>
              <p class="lj-personRole">{t("landing.quote.role")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section class="lj-pricing" id="pricing">
        <div class="lj-container">
          <div class="lj-pricingHead">
            <h2 class="lj-h2">{t("landing.pricing.title")}</h2>
            <p class="lj-muted">{t("landing.pricing.subtitle")}</p>
          </div>

          <div class="lj-pricingGrid">
            {/* Starter */}
            <div class="lj-priceCard">
              <h3 class="lj-h3">{t("landing.pricing.starter")}</h3>
              <div class="lj-priceRow">
                <span class="lj-price">$0</span>
                <span class="lj-per">{t("landing.pricing.perMonth")}</span>
              </div>

              <ul class="lj-bullets">
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.starter.b1")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.starter.b2")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.starter.b3")}
                </li>
              </ul>

              <button class="lj-outlineBtn" type="button">
                {t("landing.pricing.chooseStarter")}
              </button>
            </div>

            {/* Pro */}
            <div class="lj-priceCard lj-priceCardPro">
              <div class="lj-mostPopular">{t("landing.pricing.mostPopular")}</div>

              <h3 class="lj-h3">{t("landing.pricing.pro")}</h3>
              <div class="lj-priceRow">
                <span class="lj-price">$49</span>
                <span class="lj-per">{t("landing.pricing.perMonth")}</span>
              </div>

              <ul class="lj-bullets">
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.pro.b1")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.pro.b2")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.pro.b3")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.pro.b4")}
                </li>
              </ul>

              <button class="lj-primaryBtnFull" type="button">
                {t("landing.pricing.getStarted")}
              </button>
            </div>

            {/* Agency */}
            <div class="lj-priceCard">
              <h3 class="lj-h3">{t("landing.pricing.agency")}</h3>
              <div class="lj-priceRow">
                <span class="lj-price">$199</span>
                <span class="lj-per">{t("landing.pricing.perMonth")}</span>
              </div>

              <ul class="lj-bullets">
                <li class="isMuted">
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.agency.b1")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.agency.b2")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.agency.b3")}
                </li>
                <li>
                  <span class="material-symbols-outlined">check_circle</span>
                  {t("landing.pricing.agency.b4")}
                </li>
              </ul>

              <button class="lj-outlineBtn" type="button">
                {t("landing.pricing.contactSales")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="lj-finalCta">
        <div class="lj-container lj-finalInner">
          <h2 class="lj-finalTitle">{t("landing.final.title")}</h2>
          <p class="lj-finalSubtitle">{t("landing.final.subtitle")}</p>
          <button class="lj-finalBtn" type="button">
            {t("landing.final.button")}
          </button>
          <p class="lj-finalNote">{t("landing.final.note")}</p>
        </div>
      </section>

      {/* Footer */}
      <footer class="lj-footer">
        <div class="lj-container lj-footerInner">
          <div class="lj-footerBrand">
            <div class="lj-footerMark" aria-hidden="true">
              <span class="material-symbols-outlined">visibility</span>
            </div>
            <h2 class="lj-footerName">{t("landing.brand")}</h2>
          </div>

          <div class="lj-footerLinks">
            <a href="#">{t("landing.footer.privacy")}</a>
            <a href="#">{t("landing.footer.terms")}</a>
            <a href="#">{t("landing.footer.contact")}</a>
          </div>

          <p class="lj-footerCopy">{t("landing.footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
